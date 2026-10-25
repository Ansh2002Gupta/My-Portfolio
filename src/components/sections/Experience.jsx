import { experience } from '../../data/content';
import { work } from '../../data/work';
import { cx } from '../../lib/cx';
import { ArrowIcon, Section } from '../ui/primitives';

const workById = Object.fromEntries(work.map((item) => [item.id, item]));

/**
 * Professional experience as a timeline.
 *
 * Kept to scope, progression and the shape of the ownership — the measurable
 * detail lives in the case studies, linked from the bottom of each entry
 * rather than repeated here.
 */
export default function Experience() {
  return (
    <Section
      id="experience"
      label="02 — Experience"
      title="Where I've worked"
      intro="Progression in what I own, rather than a list of every ticket."
      tone="raised"
    >
      <ol className="relative space-y-12">
        {experience.map((role) => (
          <li key={role.id} className="relative pl-7 sm:pl-9">
            {/* Timeline rail and marker. Decorative only — the structure is in
                the list semantics and headings, not the line. */}
            <span
              aria-hidden="true"
              className="absolute left-[3px] top-2 h-full w-px bg-line"
            />
            <span
              aria-hidden="true"
              className={cx(
                'absolute left-0 top-[7px] size-[7px] rounded-full ring-4 ring-raised',
                role.current ? 'bg-brass' : 'bg-line-strong',
              )}
            />

            <div className="reveal">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                  {role.company}
                </h3>
                <p className="font-mono text-[0.8125rem] text-subtle">{role.period}</p>
              </div>
              <p className="mt-1 text-sm text-subtle">{role.location}</p>

              <ul className="mt-4 flex flex-wrap items-center gap-2">
                {role.roles.map((r, index) => (
                  <li key={r.title} className="flex items-center gap-2">
                    {index > 0 ? (
                      <span aria-hidden="true" className="text-subtle">
                        ←
                      </span>
                    ) : null}
                    <span
                      className={cx(
                        'rounded-[var(--radius-xs)] border px-2.5 py-1 text-[0.8125rem]',
                        index === 0
                          ? 'border-accent/30 bg-accent-soft font-medium text-accent'
                          : 'border-line bg-surface text-muted',
                      )}
                    >
                      {r.title}
                      <span className="sr-only"> — {r.note}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 max-w-[62ch] text-[1.0125rem] leading-[1.7] text-muted">
                {role.summary}
              </p>
            </div>

            <ul className="mt-7 space-y-5 border-t border-line pt-6">
              {role.highlights.map((highlight, index) => (
                <li
                  key={highlight.title}
                  className="reveal grid gap-1 sm:grid-cols-[minmax(0,13rem)_minmax(0,1fr)] sm:gap-6"
                  style={{ '--reveal-delay': `${index * 45}ms` }}
                >
                  <h4 className="text-[0.9375rem] font-medium leading-snug text-ink">
                    {highlight.title}
                  </h4>
                  <p className="text-[0.9375rem] leading-relaxed text-muted">{highlight.body}</p>
                </li>
              ))}
            </ul>

            {role.award ? (
              <p className="reveal mt-7 rounded-[var(--radius-md)] border border-brass/25 bg-brass-soft px-4 py-3 text-[0.875rem] text-ink">
                <span className="font-medium">{role.award.title}</span> — {role.award.body}
              </p>
            ) : null}

            {role.relatedWork?.length ? (
              <div className="reveal mt-7">
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-subtle">
                  Case studies
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {role.relatedWork.map((id) => (
                    <li key={id}>
                      <a
                        href={`#work-${id}`}
                        className="inline-flex min-h-10 items-center gap-1.5 rounded-[var(--radius-xs)] border border-line bg-surface px-3 text-[0.875rem] text-ink transition-colors duration-[var(--dur-fast)] hover:border-accent hover:text-accent"
                      >
                        {workById[id]?.name ?? id}
                        <ArrowIcon className="size-3" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </Section>
  );
}
