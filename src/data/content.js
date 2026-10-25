/**
 * Narrative copy: hero, about and the professional experience timeline.
 *
 * Every claim here traces back to the resume of record. Nothing is rounded up,
 * and measurements that came from internal tooling are labelled as such rather
 * than presented as benchmarks.
 */

export const hero = {
  eyebrow: 'Frontend Software Engineer · Gurugram, India',
  headline: 'I build web and mobile interfaces that hold up in production.',
  lede: "Associate Software Engineer at Unthinkable Solutions, working in React, Next.js and React Native. Most of my time goes to the parts users actually feel — how fast a screen becomes usable, how a component library holds together as it grows, and how a front end behaves when the backend behind it was never designed for it.",
  /** Facts panel beside the headline. Short, scannable, all verifiable. */
  facts: [
    { label: 'Now', value: 'Associate Software Engineer', detail: 'Unthinkable Solutions LLP' },
    { label: 'Since', value: 'January 2024', detail: 'Joined as Junior Associate Software Engineer' },
    { label: 'Core stack', value: 'React · Next.js · React Native', detail: 'TypeScript, Redux Toolkit, Storybook' },
    { label: 'Shipped', value: 'Foodstories', detail: 'Live on the App Store and Google Play' },
  ],
};

export const about = {
  heading: 'About',
  lead: 'I work on the unglamorous half of frontend — the half that decides whether a product feels fast and stays maintainable.',
  body: [
    "I joined Unthinkable Solutions in January 2024 and have spent the time since on customer-facing products: a grocery and lifestyle commerce app I built from scratch in React Native, a revamp of a national retail e-commerce platform in Next.js, and a real-time prediction market rendered server-side. The common thread is integration — most of my work sits between a design that assumes everything is instant and a backend that is slower, older or more rigid than that.",
    "The problems I enjoy most are the ones where the fix is not in the component you are looking at. A listing page that stutters is usually a re-render problem two levels up. A ten-second home screen is rarely one slow call — it is a payload, an image format, a render pass that waits for everything, and a JavaScript thread still busy with the screen you just left. I like taking that apart and measuring each piece.",
    "I have also carried what happens after the merge: generating Android and iOS builds, pushing them through Play Console and App Store Connect, watching Crashlytics after a release, and coordinating the hotfix when something slips through. Owning that end of the process changed how I write the code at the other end.",
  ],
  /** Short principles, kept concrete. */
  principles: [
    {
      title: 'Measure before refactoring',
      body: 'Payload size, request count and render passes are observable. Opinions about what is slow usually are not.',
    },
    {
      title: 'Make the second one cheap',
      body: 'A component is worth abstracting once the third use case arrives — not before, and not after it has been copied four times.',
    },
    {
      title: 'Design for the backend you have',
      body: 'Optimistic updates and stale-while-revalidate exist because rewriting a legacy commerce API is rarely an option.',
    },
    {
      title: 'Ship it and watch it',
      body: 'Crash dashboards, funnels and release notes are part of the job, not someone else’s follow-up.',
    },
  ],
};

export const experience = [
  {
    id: 'unthinkable',
    company: 'Unthinkable Solutions LLP',
    location: 'Gurugram, India',
    period: 'January 2024 — Present',
    current: true,
    roles: [
      { title: 'Associate Software Engineer', note: 'Current' },
      { title: 'Junior Associate Software Engineer', note: 'On joining' },
    ],
    summary:
      'Building and operating client-facing web and mobile products. Scope has grown from implementing features to owning a mobile application end to end — architecture, performance, analytics instrumentation and the release pipeline — and leading other engineers on it.',
    /** Kept short on purpose; the detail lives in the case studies. */
    highlights: [
      {
        title: 'From feature work to product ownership',
        body: 'Started on feature delivery, then led a team of three frontend engineers on the Foodstories mobile app before becoming the sole developer responsible for it and its production lifecycle.',
      },
      {
        title: 'Architecture that other people use',
        body: 'Built a Factory-Pattern component layer and standardised API contracts, documented in Storybook so the UI stayed consistent as the surface area grew.',
      },
      {
        title: 'Performance as a deliverable',
        body: 'Led a performance initiative ahead of a Diwali campaign that cut reported loading time, layout payload size and request count on the highest-traffic screens.',
      },
      {
        title: 'Release and production support',
        body: 'Owned Android and iOS builds, Play Console and App Store Connect submissions, Firebase Crashlytics monitoring, Stallion OTA distribution and hotfix coordination.',
      },
      {
        title: 'Instrumentation and product feedback',
        body: 'Integrated CleverTap, Microsoft Clarity, Google Analytics and AppsFlyer to surface funnel drop-offs, campaign attribution and average order value, and used CleverTap push campaigns for re-engagement.',
      },
    ],
    /** Which case studies to link into from the experience block. */
    relatedWork: ['foodstories', 'shoppers-stop', 'opiwiz'],
    award: {
      title: '“Who Hit the Home Run”',
      body: 'Awarded for contributions to the Shopper’s Stop project.',
    },
  },
];

export const education = {
  degree: 'B.Tech, Computer Science and Engineering',
  institution: 'Dr. A.P.J. Abdul Kalam Technical University',
  period: 'September 2020 — June 2024',
  result: 'CGPA 7.81 / 10',
};

export const contact = {
  heading: 'Contact',
  lead: 'Open to Frontend / Software Engineer roles at product companies.',
  body: 'The quickest way to reach me is email — I read everything and reply to anything specific. The form below goes to the same inbox.',
};
