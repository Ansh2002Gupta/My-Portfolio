import { additionalWork, featuredWork } from '../../data/work';
import { cx } from '../../lib/cx';
import { Disclosure, Eyebrow, Section, TagList, TextLink } from '../ui/primitives';

/**
 * Selected professional work.
 *
 * Each featured product gets a full case-study layout: context, role, what the
 * problem actually was, the decisions, and the measured result. The long-form
 * narrative sits in a disclosure so the section stays scannable, but the text
 * remains in the DOM for in-page search and is never truncated by a fixed
 * height.
 */
export default function Work() {
  return (
    <Section
      id="work"
      label="03 — Selected work"
      title="Professional work"
      intro="Products built inside my engineering role. No screenshots or internal detail — client work stays client work."
    >
      <div className="space-y-16 sm:space-y-20">
        {featuredWork.map((project, index) => (
          <CaseStudy key={project.id} project={project} index={index} />
        ))}
      </div>

      {additionalWork.length ? (
        <div className="mt-16 border-t border-line pt-10 sm:mt-20">
          <Eyebrow>Earlier engagements</Eyebrow>
          <ul className="mt-6 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-line bg-line sm:grid-cols-2">
            {additionalWork.map((project) => (
              <CompactCard key={project.id} project={project} />
            ))}
          </ul>
        </div>
      ) : null}
    </Section>
  );
}

function CaseStudy({ project, index }) {
  return (
    <article
      id={`work-${project.id}`}
      aria-labelledby={`work-${project.id}-title`}
    >
      <header className="reveal">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-mono text-[0.6875rem] tabular-nums text-subtle">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span aria-hidden="true" className="h-px w-6 bg-line-strong/50" />
          <Eyebrow>{project.kind}</Eyebrow>
        </div>

        <h3
          id={`work-${project.id}-title`}
          className="mt-3 font-serif text-[1.875rem] leading-[1.1] tracking-[-0.01em] sm:text-[2.25rem]"
        >
          {project.name}
        </h3>
        <p className="mt-1.5 text-[1.0625rem] text-muted">{project.tagline}</p>

        <p className="mt-4 inline-flex rounded-[var(--radius-xs)] border border-line bg-raised px-2.5 py-1 text-[0.8125rem] text-muted">
          {project.role}
        </p>
      </header>

      <p className="reveal mt-6 max-w-[64ch] text-[1.0125rem] leading-[1.75] text-muted">
        {project.summary}
      </p>

      {project.metrics?.length ? <MetricStrip project={project} /> : null}

      <div className="reveal mt-7">
        <h4 className="sr-only">What I did on {project.name}</h4>
        <ul className="space-y-3">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-muted">
              <span
                aria-hidden="true"
                className="mt-[0.65rem] size-1 shrink-0 rounded-full bg-line-strong"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {project.award ? (
        <p className="reveal mt-6 text-[0.875rem] text-muted">
          <span className="font-medium text-brass">Recognition</span> — {project.award}
        </p>
      ) : null}

      <div className="reveal mt-7 flex flex-wrap items-start gap-x-8 gap-y-4">
        <div className="min-w-0 flex-1">
          <Eyebrow className="mb-2">Stack</Eyebrow>
          <TagList items={project.stack} />
        </div>

        {project.links?.length ? (
          <div>
            <Eyebrow className="mb-2">Live</Eyebrow>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {project.links.map((link) => (
                <li key={link.href}>
                  <TextLink href={link.href} className="text-[0.9375rem]">
                    {link.label}
                  </TextLink>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      {project.caseStudy ? (
        <Disclosure summary={project.caseStudy.label} className="reveal mt-8">
          <CaseStudyBody body={project.caseStudy} />
        </Disclosure>
      ) : null}
    </article>
  );
}

/** Before/after figures, shown as a table so the comparison is explicit. */
function MetricStrip({ project }) {
  const hasBefore = project.metrics.some((m) => m.before);

  return (
    <div className="reveal mt-7 overflow-hidden rounded-[var(--radius-md)] border border-line">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[19rem] border-collapse text-left">
          <caption className="sr-only">
            Reported measurements for {project.name}, before and after the work described.
          </caption>
          <thead>
            <tr className="border-b border-line bg-raised/70">
              <th scope="col" className="px-3 py-2.5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-subtle sm:px-4">
                Measure
              </th>
              {hasBefore ? (
                <th scope="col" className="px-3 py-2.5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-subtle sm:px-4">
                  Before
                </th>
              ) : null}
              <th scope="col" className="px-3 py-2.5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-subtle sm:px-4">
                After
              </th>
            </tr>
          </thead>
          <tbody>
            {project.metrics.map((metric, index) => (
              <tr
                key={metric.label}
                className={cx(index > 0 && 'border-t border-line')}
              >
                <th scope="row" className="px-3 py-3 text-[0.875rem] font-normal text-muted sm:px-4">
                  {metric.label}
                  {metric.note ? (
                    <span className="block text-[0.75rem] text-subtle">{metric.note}</span>
                  ) : null}
                </th>
                {hasBefore ? (
                  <td className="whitespace-nowrap px-3 py-3 font-mono text-[0.875rem] tabular-nums text-subtle sm:px-4">
                    {metric.before ?? '—'}
                  </td>
                ) : null}
                <td className="whitespace-nowrap px-3 py-3 font-mono text-[0.875rem] tabular-nums font-medium text-ink sm:px-4">
                  {metric.after}
                  {metric.delta ? (
                    <span className="ml-2 text-brass">{metric.delta}</span>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {project.metricsNote ? (
        <p className="border-t border-line bg-raised/40 px-3 py-2.5 text-[0.75rem] leading-relaxed text-subtle sm:px-4">
          {project.metricsNote}
        </p>
      ) : null}
    </div>
  );
}

function CaseStudyBody({ body }) {
  return (
    <div className="max-w-[66ch] space-y-6">
      <Block title="Context" text={body.context} />
      <Block title="The problem" text={body.problem} />

      {body.sections?.length ? (
        <div className="space-y-5">
          <Eyebrow>Approach</Eyebrow>
          <ol className="space-y-5">
            {body.sections.map((section, index) => (
              <li key={section.title} className="grid gap-1.5 border-l-2 border-accent/25 pl-4">
                <h5 className="text-[0.9375rem] font-medium text-ink">
                  <span className="mr-2 font-mono text-[0.75rem] text-subtle">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {section.title}
                </h5>
                <p className="text-[0.9375rem] leading-relaxed text-muted">{section.body}</p>
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      <Block title="Result" text={body.outcome} />
    </div>
  );
}

function Block({ title, text }) {
  if (!text) return null;
  return (
    <div>
      <Eyebrow className="mb-2">{title}</Eyebrow>
      <p className="text-[0.9375rem] leading-[1.7] text-muted">{text}</p>
    </div>
  );
}

function CompactCard({ project }) {
  return (
    <li className="reveal bg-surface p-5 sm:p-6">
      <Eyebrow>{project.kind}</Eyebrow>
      <h3 className="mt-2 text-lg font-semibold tracking-tight">{project.name}</h3>
      <p className="mt-0.5 text-[0.875rem] text-muted">{project.tagline}</p>
      <p className="mt-3 text-[0.875rem] leading-relaxed text-muted">{project.summary}</p>

      <ul className="mt-4 space-y-2">
        {project.highlights.map((item) => (
          <li key={item} className="flex gap-2.5 text-[0.875rem] leading-relaxed text-muted">
            <span aria-hidden="true" className="mt-[0.6rem] size-1 shrink-0 rounded-full bg-line-strong" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <TagList items={project.stack} className="mt-4" />

      {project.links?.length ? (
        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
          {project.links.map((link) => (
            <li key={link.href}>
              <TextLink href={link.href} className="text-[0.875rem]">
                {link.label}
              </TextLink>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}
