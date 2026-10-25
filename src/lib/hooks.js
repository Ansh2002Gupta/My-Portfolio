import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Entrance reveals, via IntersectionObserver rather than an animation library.
 *
 * The CSS that hides un-revealed content is scoped behind
 * `[data-reveal-armed="true"]`, which this hook sets on <html> only once it is
 * running. If JavaScript never executes, nothing is ever hidden — the page is
 * fully readable without it.
 *
 * Elements opt in with `<div className="reveal">`; this hook adds `is-visible`
 * once and then stops observing, so nothing animates on the way back up.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    const root = document.documentElement;

    // Reduced motion: never hide anything in the first place.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // No IntersectionObserver (very old browsers): leave content visible.
    if (!('IntersectionObserver' in window)) return;

    root.dataset.revealArmed = 'true';

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 },
    );

    const observeAll = () => {
      for (const el of document.querySelectorAll('.reveal:not(.is-visible)')) {
        observer.observe(el);
      }
    };

    observeAll();

    // Case studies expand after mount and bring new `.reveal` nodes with them.
    const mutation = new MutationObserver(observeAll);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
      delete root.dataset.revealArmed;
    };
  }, []);
}

const THEME_KEY = 'portfolio-theme';

/**
 * Light/dark theme. Defaults to the OS preference and only persists once the
 * visitor makes an explicit choice, so the site keeps following the system
 * setting for everyone who never touches the toggle.
 */
export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || 'light',
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0C0E12' : '#FAF8F4');
  }, [theme]);

  // Follow the OS until the visitor overrides it.
  useEffect(() => {
    if (localStorage.getItem(THEME_KEY)) return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e) => setTheme(e.matches ? 'dark' : 'light');
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch {
        // Private mode / storage disabled — the toggle still works for this visit.
      }
      return next;
    });
  }, []);

  return { theme, toggle };
}

/**
 * Tracks which section is currently in view so the navigation can mark it.
 * Uses a band near the top of the viewport rather than the centre, which
 * matches how people read a long page.
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!ids.length || !('IntersectionObserver' in window)) return;

    const visible = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        }
        if (!visible.size) return;
        // Of the sections on screen, mark the one earliest in document order.
        const first = ids.find((id) => visible.has(id));
        if (first) setActive(first);
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.2] },
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

/**
 * Locks background scrolling while an overlay is open, compensating for the
 * scrollbar width so the page behind does not jump sideways.
 */
export function useScrollLock(locked) {
  useEffect(() => {
    if (!locked) return;
    const { body } = document;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;
    const gap = window.innerWidth - document.documentElement.clientWidth;

    body.style.overflow = 'hidden';
    if (gap > 0) body.style.paddingRight = `${gap}px`;

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
    };
  }, [locked]);
}

/**
 * Keeps keyboard focus inside an open overlay, restores it to the trigger on
 * close, and calls `onClose` on Escape.
 */
export function useFocusTrap(active, onClose) {
  const containerRef = useRef(null);
  const previouslyFocused = useRef(null);

  useEffect(() => {
    if (!active) return;
    const container = containerRef.current;
    if (!container) return;

    previouslyFocused.current = document.activeElement;

    const selector =
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const focusables = () => Array.from(container.querySelectorAll(selector));
    focusables()[0]?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose?.();
        return;
      }
      if (event.key !== 'Tab') return;

      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      previouslyFocused.current?.focus?.();
    };
  }, [active, onClose]);

  return containerRef;
}

/** True once the window has scrolled past `offset` pixels. */
export function useScrolledPast(offset = 8) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setPast(window.scrollY > offset);
        frame = 0;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [offset]);

  return past;
}

/**
 * Honours a deep link such as `/My-Portfolio/#work`.
 *
 * The browser resolves the fragment while parsing the document, which on a
 * client-rendered page is before any section exists — so the jump silently does
 * nothing. Re-applying it after the first paint makes shared links work.
 */
export function useInitialHashScroll() {
  useEffect(() => {
    const { hash } = window.location;
    if (!hash || hash.length < 2) return;

    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!target) return;

    // Wait one frame so layout (and the sticky header offset) is settled.
    // `behavior: 'instant'` is required here: 'auto' defers to the CSS
    // `scroll-behavior: smooth`, which would animate the whole page past the
    // visitor before landing. A deep link should arrive, not travel.
    const frame = requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
    return () => cancelAnimationFrame(frame);
  }, []);
}
