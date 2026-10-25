/**
 * Shared UI primitives. Every visual decision that repeats more than twice
 * lives here so the design stays consistent and is changed in one place.
 */

import { useId, useState } from 'react';

import { cx } from '../../lib/cx';

/* ------------------------------------------------------------------ layout */

export function Container({ as: Tag = 'div', className, children }) {
  return (
    <Tag className={cx('mx-auto w-full max-w-[var(--container)] px-5 sm:px-8 lg:px-12', className)}>
      {children}
    </Tag>
  );
}

/**
 * A page section. Height is always determined by content — there is no
 * viewport-height clamp and no scroll snapping anywhere in this site.
 */
export function Section({ id, label, title, intro, children, className, tone = 'default' }) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      // Anchor offset comes from `scroll-padding-top` on <html> (see index.css).
      // Adding scroll-margin here as well would double the gap.
      className={cx(
        'border-t border-line py-16 sm:py-20 lg:py-28',
        tone === 'raised' && 'bg-raised/60',
        className,
      )}
    >
      <Container>
        <div className="grid gap-x-12 gap-y-8 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+2.5rem)] lg:self-start">
            {label ? <SectionLabel>{label}</SectionLabel> : null}
            <h2
              id={headingId}
              className="reveal mt-3 font-serif text-3xl leading-[1.08] tracking-[-0.01em] sm:text-4xl lg:text-[2.75rem]"
            >
              {title}
            </h2>
            {intro ? (
              <p className="reveal mt-4 max-w-prose text-[0.975rem] text-muted lg:text-base">
                {intro}
              </p>
            ) : null}
          </div>
          <div className="min-w-0">{children}</div>
        </div>
      </Container>
    </section>
  );
}

/** The small monospaced index label that numbers each section. */
export function SectionLabel({ children }) {
  return (
    <p className="reveal font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-subtle">
      {children}
    </p>
  );
}

/** Thin horizontal rule used between list items. */
export function Rule({ className }) {
  return <hr className={cx('border-0 border-t border-line', className)} />;
}

/* ------------------------------------------------------------------ atoms */

const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] text-sm font-medium ' +
  'transition-[background-color,color,border-color,transform] duration-[var(--dur-fast)] ' +
  'ease-[var(--ease-brand)] active:translate-y-px min-h-11 px-5 py-2.5';

const buttonTones = {
  primary: 'bg-accent text-accent-contrast hover:bg-accent/90',
  secondary: 'border border-line-strong/70 bg-surface text-ink hover:border-accent hover:text-accent',
  ghost: 'text-ink hover:bg-raised',
};

/**
 * Anchor styled as a button. External links get `rel="noreferrer"` plus an
 * accessible hint, so screen-reader users are told the link opens a new tab.
 */
export function ButtonLink({ href, tone = 'primary', external, download, className, children, ...rest }) {
  const isExternal = external ?? /^https?:/.test(href || '');
  return (
    <a
      href={href}
      className={cx(buttonBase, buttonTones[tone], className)}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : null)}
      {...(download ? { download: '' } : null)}
      {...rest}
    >
      {children}
      {isExternal ? <ExternalIcon /> : null}
    </a>
  );
}

export function Button({ tone = 'primary', className, children, ...rest }) {
  return (
    <button className={cx(buttonBase, buttonTones[tone], className)} {...rest}>
      {children}
    </button>
  );
}

/** Plain text link with a underline that thickens on hover. */
export function TextLink({ href, children, className, ...rest }) {
  const isExternal = /^https?:/.test(href || '');
  return (
    <a
      href={href}
      className={cx(
        // min-h-6 keeps these standalone links at the 24px minimum target size
        // (WCAG 2.5.8) without changing how they sit on the text baseline.
        'inline-flex min-h-6 items-center gap-1 text-accent underline decoration-accent/35',
        'underline-offset-[3px] transition-colors duration-[var(--dur-fast)] hover:decoration-accent',
        className,
      )}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : null)}
      {...rest}
    >
      {children}
      {isExternal ? <ExternalIcon /> : null}
    </a>
  );
}

export function ExternalIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 16 16"
      className="size-3 shrink-0 opacity-70"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3h7v7" />
      <path d="M13 3 6.5 9.5" />
      <path d="M11 9.5V13H3V5h3.5" />
    </svg>
  );
}

/** Technology chip. */
export function Tag({ children, emphasis }) {
  return (
    <li
      className={cx(
        'rounded-[var(--radius-xs)] border px-2.5 py-1 text-[0.8125rem] leading-tight',
        emphasis
          ? 'border-accent/30 bg-accent-soft font-medium text-accent'
          : 'border-line bg-surface text-muted',
      )}
    >
      {children}
    </li>
  );
}

export function TagList({ items, className, getEmphasis }) {
  if (!items?.length) return null;
  return (
    <ul className={cx('flex flex-wrap gap-1.5', className)}>
      {items.map((item) => {
        const name = typeof item === 'string' ? item : item.name;
        const emphasis = typeof item === 'string' ? getEmphasis?.(item) : item.emphasis;
        return (
          <Tag key={name} emphasis={emphasis}>
            {name}
          </Tag>
        );
      })}
    </ul>
  );
}

/** Small uppercase category marker. */
export function Eyebrow({ children, className }) {
  return (
    <p
      className={cx(
        'font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-subtle',
        className,
      )}
    >
      {children}
    </p>
  );
}

/* ------------------------------------------------------------- disclosure */

/**
 * Accessible show/hide panel used for the long-form case studies.
 *
 * The panel is kept in the DOM and collapsed with a grid-rows transition, so
 * in-page search still finds the text and the height is never measured in JS.
 * `inert` keeps collapsed content out of the tab order.
 */
export function Disclosure({ summary, children, defaultOpen = false, className }) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className={cx('border-t border-line', className)}>
      <h4 className="m-0">
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className={cx(
            'group flex min-h-11 w-full items-center justify-between gap-4 py-4 text-left',
            'text-[0.9375rem] font-medium text-ink transition-colors duration-[var(--dur-fast)] hover:text-accent',
          )}
        >
          <span>{summary}</span>
          <span
            aria-hidden="true"
            className={cx(
              'grid size-7 shrink-0 place-items-center rounded-full border border-line-strong/60',
              'transition-transform duration-[var(--dur-mid)] ease-[var(--ease-brand)] group-hover:border-accent',
              open && 'rotate-180',
            )}
          >
            <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="m4 6 4 4 4-4" />
            </svg>
          </span>
        </button>
      </h4>
      <div className="collapsible" data-open={open}>
        <div>
          <div id={panelId} role="region" aria-labelledby={buttonId} inert={!open || undefined} className="pb-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- icons */

export function SocialIcon({ id, className }) {
  const common = {
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
    className: cx('size-[1.125rem]', className),
  };

  if (id === 'github') {
    return (
      <svg {...common} fill="currentColor">
        <path d="M12 .5C5.73.5.9 5.34.9 11.62c0 4.9 3.17 9.06 7.57 10.53.55.1.76-.24.76-.53v-1.9c-3.08.67-3.73-1.3-3.73-1.3-.5-1.3-1.23-1.64-1.23-1.64-1-.69.08-.67.08-.67 1.11.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.46-.28-5.05-1.23-5.05-5.5 0-1.21.43-2.2 1.14-2.98-.11-.28-.5-1.41.11-2.94 0 0 .93-.3 3.05 1.14a10.5 10.5 0 0 1 5.56 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.22 2.66.11 2.94.71.78 1.14 1.77 1.14 2.98 0 4.28-2.6 5.21-5.07 5.49.4.35.76 1.03.76 2.08v3.08c0 .3.2.64.77.53 4.39-1.47 7.56-5.63 7.56-10.53C23.1 5.34 18.27.5 12 .5Z" />
      </svg>
    );
  }

  if (id === 'linkedin') {
    return (
      <svg {...common} fill="currentColor">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
      </svg>
    );
  }

  if (id === 'leetcode') {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.4 3.5 7.1 10.8a2.9 2.9 0 0 0 0 4.1l3.6 3.6a2.9 2.9 0 0 0 4.1 0l1.9-1.9" />
        <path d="M11 7.2h6.6" />
        <path d="M10.6 13h8.9" />
      </svg>
    );
  }

  if (id === 'email') {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2.5" y="4.5" width="19" height="15" rx="2.2" />
        <path d="m3.5 6.5 7.3 5.6a2 2 0 0 0 2.4 0l7.3-5.6" />
      </svg>
    );
  }

  return null;
}

export function ArrowIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 16 16"
      className={cx('size-3.5', className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h10" />
      <path d="m9 4 4 4-4 4" />
    </svg>
  );
}
