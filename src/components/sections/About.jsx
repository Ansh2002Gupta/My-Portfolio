import portrait640 from '../../assets/media/portrait-640.webp';
import portrait320 from '../../assets/media/portrait-320.webp';
import { about, education } from '../../data/content';
import site from '../../data/site';
import { Section } from '../ui/primitives';

export default function About() {
  return (
    <Section id="about" label="01 — About" title={about.heading} intro={about.lead}>
      <div className="grid gap-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-12">
        <div className="min-w-0 space-y-5">
          {about.body.map((paragraph, index) => (
            <p
              key={index}
              className="reveal max-w-[62ch] text-[1.0125rem] leading-[1.75] text-muted"
              style={{ '--reveal-delay': `${index * 60}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <Portrait />
      </div>

      <ul className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-line bg-line sm:grid-cols-2">
        {about.principles.map((principle, index) => (
          <li
            key={principle.title}
            className="reveal bg-surface p-5 sm:p-6"
            style={{ '--reveal-delay': `${index * 55}ms` }}
          >
            <h3 className="text-[0.9375rem] font-semibold tracking-tight text-ink">
              {principle.title}
            </h3>
            <p className="mt-2 text-[0.875rem] leading-relaxed text-muted">{principle.body}</p>
          </li>
        ))}
      </ul>

      <div className="reveal mt-12 border-t border-line pt-6">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-subtle">
          Education
        </p>
        <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <div>
            <p className="text-[0.9375rem] font-medium text-ink">{education.degree}</p>
            <p className="text-[0.875rem] text-muted">{education.institution}</p>
          </div>
          <p className="font-mono text-[0.8125rem] text-subtle">
            {education.period} · {education.result}
          </p>
        </div>
      </div>
    </Section>
  );
}

/**
 * Portrait. A cut-out photograph on a soft tinted ground — small and secondary
 * to the writing, served as WebP at two sizes with explicit dimensions so it
 * reserves its space and never shifts the layout.
 */
function Portrait() {
  return (
    <figure className="reveal mx-auto w-full max-w-[13rem] shrink-0 sm:mx-0 sm:w-[12rem] lg:w-[13.5rem]">
      <div className="relative aspect-square overflow-hidden rounded-[var(--radius-lg)] border border-line bg-accent-soft">
        <img
          src={portrait640}
          srcSet={`${portrait320} 320w, ${portrait640} 640w`}
          sizes="(min-width: 1024px) 216px, (min-width: 640px) 192px, 208px"
          width={640}
          height={640}
          loading="lazy"
          decoding="async"
          alt={`${site.name}, ${site.title}`}
          className="size-full object-cover object-top"
        />
      </div>
      <figcaption className="mt-3 text-center font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-subtle sm:text-left">
        {site.location}
      </figcaption>
    </figure>
  );
}
