import { earlierProjects, projects } from '../../data/projects';
import { cx } from '../../lib/cx';
import { Eyebrow, Section, TagList, TextLink } from '../ui/primitives';

/**
 * Personal projects — kept in their own section so there is no ambiguity about
 * which work was done independently and which was done for a client.
 *
 * Nothing claims a live demo, because none of these are deployed. Repository
 * links are the only external action, and they are only rendered when present.
 */
export default function Projects() {
  return (
    <Section
      id="projects"
      label="04 — Personal projects"
      title="Things I built on my own time"
      intro="Independent work. Source is public; none of these are deployed, so none of them pretend to be."
      tone="raised"
    >
      <div className="space-y-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="mt-14 border-t border-line pt-10">
        <Eyebrow>Earlier — university projects, kept for the record</Eyebrow>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2">
          {earlierProjects.map((project) => (
            <li
              key={project.id}
              className="reveal flex flex-col rounded-[var(--radius-md)] border border-line bg-surface p-5"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-[0.9375rem] font-semibold tracking-tight">{project.name}</h3>
                <span className="font-mono text-[0.75rem] text-subtle">{project.year}</span>
              </div>
              <p className="mt-2 flex-1 text-[0.875rem] leading-relaxed text-muted">
                {project.blurb}
              </p>
              <TagList items={project.stack} className="mt-4" />
              <TextLink href={project.repo} className="mt-4 text-[0.875rem]">
                Source
              </TextLink>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function ProjectCard({ project, index }) {
  const hasImage = Boolean(project.image);

  return (
    <article
      className={cx(
        'reveal overflow-hidden rounded-[var(--radius-lg)] border border-line bg-surface',
        hasImage && 'lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-stretch',
      )}
      style={{ '--reveal-delay': `${index * 70}ms` }}
      aria-labelledby={`project-${project.id}-title`}
    >
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <Eyebrow>Personal project</Eyebrow>
          <span aria-hidden="true" className="h-px w-5 bg-line-strong/50" />
          <span className="font-mono text-[0.6875rem] text-subtle">{project.year}</span>
        </div>

        <h3
          id={`project-${project.id}-title`}
          className="mt-3 font-serif text-[1.625rem] leading-tight tracking-[-0.01em] sm:text-[1.875rem]"
        >
          {project.name}
        </h3>
        <p className="mt-1 text-[1rem] text-muted">{project.tagline}</p>

        <p className="mt-4 max-w-[58ch] text-[0.9375rem] leading-[1.7] text-muted">
          {project.summary}
        </p>

        <ul className="mt-5 space-y-2.5">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-3 text-[0.875rem] leading-relaxed text-muted">
              <span
                aria-hidden="true"
                className="mt-[0.6rem] size-1 shrink-0 rounded-full bg-line-strong"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <TagList items={project.stack} className="mt-5" />

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {project.repo ? (
            <TextLink href={project.repo} className="text-[0.9375rem]">
              Source on GitHub
            </TextLink>
          ) : null}
          {/* `demo` is null for every entry today; the link simply does not
              render rather than pointing somewhere that does not exist. */}
          {project.demo ? (
            <TextLink href={project.demo} className="text-[0.9375rem]">
              Live demo
            </TextLink>
          ) : null}
        </div>
      </div>

      {hasImage ? (
        <div className="border-t border-line bg-raised/50 p-5 sm:p-6 lg:border-l lg:border-t-0">
          <img
            src={project.image}
            width={1200}
            height={638}
            loading="lazy"
            decoding="async"
            alt={project.imageAlt}
            className="w-full rounded-[var(--radius-sm)] border border-line object-cover"
          />
        </div>
      ) : null}
    </article>
  );
}
