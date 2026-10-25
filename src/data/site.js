/**
 * Single source of truth for identity, contact details and metadata.
 *
 * Everything a recruiter can click lives here. If a value is `null` the UI
 * omits the corresponding control entirely rather than rendering a dead link.
 */

const BASE = import.meta.env.BASE_URL;

export const site = {
  name: 'Ansh Gupta',
  title: 'Frontend Software Engineer',
  /** Short descriptor used in the header, footer and document title. */
  shortBio: 'Frontend Software Engineer building production web and mobile applications.',
  location: 'Gurugram, India',

  /**
   * CONTACT EMAIL — verified.
   *
   * The repository's 2023 resume, the previous portfolio source and the current
   * (Oct 2026) resume all use this address. The `ansh.developer2002@gmail.com`
   * variant appears in no current artefact and is treated as stale.
   * Change it in this one place if that is wrong.
   */
  email: 'ansh.go2002@gmail.com',

  /**
   * Phone is kept here but deliberately not rendered anywhere public. Set
   * `showPhonePublicly` to true to surface it in the contact section.
   */
  phone: '+91-6386216706',
  showPhonePublicly: false,

  /**
   * RESUME.
   *
   * Set `resumeUrl` once the current PDF is added. Drop the file at
   * `public/resume/Ansh-Gupta-Resume.pdf` and change this to:
   *   resumeUrl: `${BASE}resume/Ansh-Gupta-Resume.pdf`
   *
   * While it is null the hero and contact section fall back to an email
   * request action instead of rendering a download button that 404s. The 2023
   * PDF that used to ship with the site is parked in `archive/` and is NOT
   * published, because it predates all current experience.
   */
  resumeUrl: null,

  /** Canonical production URL (GitHub Pages project site). */
  url: 'https://ansh2002gupta.github.io/My-Portfolio/',
  baseUrl: BASE,

  /**
   * Social profiles. `Ansh2002Gupta` is the live GitHub account (verified via
   * the GitHub API); the `Ansh-Gupta-02` handle printed on the current resume
   * returns 404 and should be corrected there.
   */
  socials: [
    {
      id: 'github',
      label: 'GitHub',
      handle: '@Ansh2002Gupta',
      href: 'https://github.com/Ansh2002Gupta',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      handle: 'ansh-gupta-18040a226',
      href: 'https://www.linkedin.com/in/ansh-gupta-18040a226/',
    },
    {
      id: 'leetcode',
      label: 'LeetCode',
      handle: 'CodeLeet2002',
      href: 'https://leetcode.com/CodeLeet2002/',
    },
  ],

  /** Section order drives both the navigation and the page itself. */
  nav: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'work', label: 'Work' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'recognition', label: 'Recognition' },
    { id: 'contact', label: 'Contact' },
  ],

  meta: {
    documentTitle: 'Ansh Gupta — Frontend Software Engineer',
    description:
      'Ansh Gupta is a Frontend Software Engineer in Gurugram building production web and mobile applications with React, Next.js and React Native — covering component architecture, rendering and network performance, and mobile release ownership.',
    keywords: [
      'Frontend Engineer',
      'React',
      'Next.js',
      'React Native',
      'TypeScript',
      'Performance',
      'Ansh Gupta',
    ],
    ogImage: `${BASE}og-image.png`,
    themeColor: { light: '#FAF8F4', dark: '#0C0E12' },
  },

  /**
   * EmailJS. These are the identifiers already in production — public by
   * design (EmailJS public keys are safe in client code and are scoped by the
   * allowed-origin list in the EmailJS dashboard). No private secret is or
   * should be stored here. Env vars allow overriding without a code change.
   */
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_99xlpbl',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_dwhzc3c',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '15uHFwebaV6f9IZvi',
  },
};

/** Convenience lookups used by several components. */
export const socialsById = Object.fromEntries(site.socials.map((s) => [s.id, s]));

export const mailto = (subject = 'Hello Ansh') =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;

export default site;
