import { useCallback, useEffect, useMemo, useState } from 'react';

import site from '../../data/site';
import { useActiveSection, useFocusTrap, useScrollLock, useScrolledPast, useTheme } from '../../lib/hooks';
import { cx } from '../../lib/cx';
import { Container } from '../ui/primitives';

/**
 * Sticky site header.
 *
 * Desktop: a single hairline-separated bar with in-page links that mark the
 * section currently in view. Mobile: the same links in a full-screen panel
 * with a focus trap, Escape-to-close and background scroll locked.
 */
export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolledPast(10);
  const { theme, toggle } = useTheme();

  const sectionIds = useMemo(() => site.nav.map((item) => item.id), []);
  const active = useActiveSection(sectionIds);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  useScrollLock(menuOpen);
  const panelRef = useFocusTrap(menuOpen, closeMenu);

  // A resize past the mobile breakpoint should not leave an orphaned panel.
  useEffect(() => {
    if (!menuOpen) return;
    const mq = window.matchMedia('(min-width: 64rem)');
    const onChange = (e) => e.matches && closeMenu();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [menuOpen, closeMenu]);

  return (
    <header
      className={cx(
        'fixed inset-x-0 top-0 z-50 h-[var(--header-h)] transition-[background-color,border-color,backdrop-filter]',
        'duration-[var(--dur-mid)] ease-[var(--ease-brand)]',
        scrolled || menuOpen
          ? 'border-b border-line bg-bg/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <Container className="flex h-full items-center justify-between gap-4">
        <a
          href="#top"
          className="group flex items-baseline gap-2 text-[0.9375rem] font-semibold tracking-tight"
        >
          <span>{site.name}</span>
          <span
            aria-hidden="true"
            className="hidden font-mono text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-subtle sm:inline"
          >
            Frontend Engineer
          </span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <nav aria-label="Sections" className="hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {site.nav.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? 'true' : undefined}
                      className={cx(
                        'relative inline-flex min-h-9 items-center rounded-[var(--radius-xs)] px-3 text-[0.875rem]',
                        'transition-colors duration-[var(--dur-fast)]',
                        isActive ? 'text-ink' : 'text-muted hover:text-ink',
                      )}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={cx(
                          'absolute inset-x-3 bottom-1 h-px origin-left bg-accent transition-transform',
                          'duration-[var(--dur-mid)] ease-[var(--ease-brand)]',
                          isActive ? 'scale-x-100' : 'scale-x-0',
                        )}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <ThemeToggle theme={theme} onToggle={toggle} />

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-[var(--radius-sm)] text-ink transition-colors duration-[var(--dur-fast)] hover:bg-raised lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </Container>

      {/* Mobile panel. Rendered only when open so nothing is focusable behind. */}
      {menuOpen ? (
        <div
          id="mobile-nav"
          ref={panelRef}
          className="fixed inset-0 top-[var(--header-h)] z-40 overflow-y-auto overscroll-contain bg-bg lg:hidden"
        >
          <Container className="py-6">
            <nav aria-label="Sections">
              <ul className="flex flex-col">
                {site.nav.map((item, index) => (
                  <li key={item.id} className="border-b border-line">
                    <a
                      href={`#${item.id}`}
                      onClick={closeMenu}
                      aria-current={active === item.id ? 'true' : undefined}
                      className="flex min-h-14 items-center justify-between gap-4 py-3 text-lg"
                    >
                      <span className={active === item.id ? 'text-accent' : 'text-ink'}>
                        {item.label}
                      </span>
                      <span className="font-mono text-xs text-subtle">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
              {site.socials.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center text-sm text-muted"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isDark}
      className="inline-flex size-11 items-center justify-center rounded-[var(--radius-sm)] text-muted transition-colors duration-[var(--dur-fast)] hover:bg-raised hover:text-ink"
    >
      <span className="sr-only">
        {isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      </span>
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        className="size-[1.125rem]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {isDark ? (
          <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
        ) : (
          <>
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4" />
          </>
        )}
      </svg>
    </button>
  );
}

function MenuIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <path
        d={open ? 'M6 6l12 12' : 'M3.5 7.5h17'}
        className="transition-[d] duration-[var(--dur-mid)]"
      />
      <path d={open ? 'M18 6 6 18' : 'M3.5 16.5h17'} />
    </svg>
  );
}
