import site, { mailto } from '../../data/site';
import { hero } from '../../data/content';
import { cx } from '../../lib/cx';
import { ArrowIcon, ButtonLink, Container, SocialIcon } from '../ui/primitives';

/**
 * Hero. Answers who, what and why-keep-reading above the fold, with a facts
 * panel that gives a hiring manager the verifiable essentials at a glance.
 *
 * Deliberately contains no invented statistics and no animated background, and
 * no entrance animation either: everything here is painted on the first frame
 * rather than waiting for an IntersectionObserver callback. Nothing in the
 * first viewport should depend on JavaScript to become readable.
 */
export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden">
      <GridBackdrop />

      <Container className="relative pb-16 pt-[calc(var(--header-h)+3.5rem)] sm:pb-20 sm:pt-[calc(var(--header-h)+5rem)] lg:pb-28 lg:pt-[calc(var(--header-h)+7rem)]">
        <div className="grid gap-x-14 gap-y-12 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:items-start">
          <div className="min-w-0">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-subtle">
              <span className="inline-flex items-center gap-2">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-brass" />
                {hero.eyebrow}
              </span>
            </p>

            <h1
              id="hero-heading"
              className="mt-5 font-serif text-[2.25rem] leading-[1.04] tracking-[-0.015em] xs:text-[2.6rem] sm:text-[3.4rem] lg:text-[4rem]"
            >
              {hero.headline}
            </h1>

            <p
              className="mt-6 max-w-[58ch] text-[1.0625rem] leading-relaxed text-muted sm:text-lg"
            >
              {hero.lede}
            </p>

            <div
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <ButtonLink href="#work" tone="primary">
                View selected work
                <ArrowIcon />
              </ButtonLink>

              {/* Only one of these ever renders: a real download, or a real
                  email action. Never an empty button. */}
              {site.resumeUrl ? (
                <ButtonLink href={site.resumeUrl} tone="secondary" download external={false}>
                  Download résumé
                </ButtonLink>
              ) : (
                <ButtonLink
                  href={mailto('Résumé request')}
                  tone="secondary"
                  external={false}
                >
                  Request my résumé
                </ButtonLink>
              )}
            </div>

            <ul
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2"
            >
              {site.socials.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors duration-[var(--dur-fast)] hover:text-ink"
                  >
                    <SocialIcon id={social.id} />
                    <span>{social.label}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={mailto()}
                  className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors duration-[var(--dur-fast)] hover:text-ink"
                >
                  <SocialIcon id="email" />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>

          <FactsPanel />
        </div>
      </Container>
    </section>
  );
}

/**
 * The supporting visual: a bordered panel of real, checkable facts rather than
 * decoration. It earns its place by being content.
 */
function FactsPanel() {
  return (
    <aside
      className="rounded-[var(--radius-lg)] border border-line bg-surface/70 p-6 shadow-sm backdrop-blur-[2px] sm:p-7 lg:mt-2"
      aria-label="At a glance"
    >
      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-subtle">
        At a glance
      </p>
      <dl className="mt-5 space-y-5">
        {hero.facts.map((fact, index) => (
          <div
            key={fact.label}
            className={cx(index > 0 && 'border-t border-line pt-5')}
          >
            <dt className="text-[0.75rem] uppercase tracking-[0.1em] text-subtle">
              {fact.label}
            </dt>
            <dd className="mt-1.5">
              <span className="block text-[0.9375rem] font-medium leading-snug text-ink">
                {fact.value}
              </span>
              {fact.detail ? (
                <span className="mt-0.5 block text-[0.8125rem] leading-snug text-muted">
                  {fact.detail}
                </span>
              ) : null}
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

/**
 * Static hairline grid wash behind the hero. Pure CSS, no animation, no
 * additional request, and it fades out before it can compete with the text.
 */
function GridBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute inset-x-0 top-0 h-[42rem] opacity-[0.55]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(var(--c-line)) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--c-line)) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(120% 70% at 70% 0%, #000 0%, transparent 72%)',
          WebkitMaskImage: 'radial-gradient(120% 70% at 70% 0%, #000 0%, transparent 72%)',
        }}
      />
      <div className="absolute -right-24 -top-40 size-[34rem] rounded-full bg-accent/[0.05] blur-3xl" />
    </div>
  );
}
