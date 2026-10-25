import { achievements } from '../../data/achievements';
import { Section, TextLink } from '../ui/primitives';

/**
 * Recognition and competitive-programming record.
 *
 * Supporting signal, kept short and visually subordinate to the work. Entries
 * render a verification link only when one exists and resolves; the rest
 * simply carry no link rather than a dead one.
 */
export default function Recognition() {
  return (
    <Section
      id="recognition"
      label="06 — Recognition"
      title="Awards & competitive programming"
      intro="Context, not the headline. The work above is the argument; this is the supporting evidence."
      tone="raised"
    >
      <ul className="grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-line bg-line">
        {achievements.map((item, index) => (
          <li
            key={item.id}
            className="reveal bg-surface px-5 py-5 sm:px-6"
            style={{ '--reveal-delay': `${index * 40}ms` }}
          >
            <div className="grid gap-x-8 gap-y-2 sm:grid-cols-[minmax(0,10rem)_minmax(0,1fr)] sm:items-baseline">
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-subtle">
                {item.category}
              </p>
              <div className="min-w-0">
                <h3 className="text-[0.9375rem] font-medium leading-snug text-ink">
                  {item.title}
                </h3>
                {item.detail ? (
                  <p className="mt-1 text-[0.875rem] leading-relaxed text-muted">{item.detail}</p>
                ) : null}

                {item.href || item.secondaryHref ? (
                  <ul className="mt-2.5 flex flex-wrap gap-x-5 gap-y-1">
                    {item.href ? (
                      <li>
                        <TextLink href={item.href} className="text-[0.8125rem]">
                          {item.hrefLabel ?? 'Verify'}
                        </TextLink>
                      </li>
                    ) : null}
                    {item.secondaryHref ? (
                      <li>
                        <TextLink href={item.secondaryHref} className="text-[0.8125rem]">
                          {item.secondaryLabel ?? 'Verify'}
                        </TextLink>
                      </li>
                    ) : null}
                  </ul>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
