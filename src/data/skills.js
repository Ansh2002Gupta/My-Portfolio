/**
 * Technical skills, grouped by what they are used for.
 *
 * Deliberately no proficiency percentages. A number like "React 50%" is not
 * measurable, not comparable between people, and reads as a guess — which it
 * is. Grouping by purpose tells a reader more, and the case studies above show
 * the depth that a bar chart only asserts.
 *
 * `emphasis: true` marks the technologies that most of my day-to-day work is
 * actually in; the UI gives those slightly more weight.
 */

export const skillGroups = [
  {
    id: 'frontend',
    title: 'Frontend',
    note: 'Where most of my work happens.',
    skills: [
      { name: 'React', emphasis: true },
      { name: 'Next.js', emphasis: true },
      { name: 'React Native', emphasis: true },
      { name: 'TypeScript', emphasis: true },
      { name: 'JavaScript (ES6+)', emphasis: true },
      { name: 'Redux Toolkit' },
      { name: 'Storybook' },
      { name: 'Solito' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    id: 'architecture',
    title: 'Architecture & performance',
    note: 'Techniques I have applied on production work, not a reading list.',
    skills: [
      { name: 'Reusable component architecture', emphasis: true },
      { name: 'Factory Pattern' },
      { name: 'API contract standardisation' },
      { name: 'Render & re-render profiling', emphasis: true },
      { name: 'Incremental rendering' },
      { name: 'Optimistic UI updates' },
      { name: 'Stale-while-revalidate' },
      { name: 'Lazy loading & prefetching' },
      { name: 'CDN delivery' },
      { name: 'WebP image optimisation' },
      { name: 'Server-side rendering' },
    ],
  },
  {
    id: 'integration',
    title: 'Backend & integration',
    note: 'Enough to meet the backend halfway.',
    skills: [
      { name: 'REST APIs', emphasis: true },
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'Magento' },
      { name: 'Strapi' },
      { name: 'Axios' },
      { name: 'MongoDB' },
      { name: 'MySQL' },
      { name: 'AWS S3' },
      { name: 'Firebase Remote Config' },
      { name: 'API polling' },
    ],
  },
  {
    id: 'release',
    title: 'Release & product analytics',
    note: 'Owning what happens after the merge.',
    skills: [
      { name: 'Google Play Console', emphasis: true },
      { name: 'App Store Connect', emphasis: true },
      { name: 'Firebase Crashlytics' },
      { name: 'Stallion OTA updates' },
      { name: 'CleverTap' },
      { name: 'AppsFlyer' },
      { name: 'Google Analytics' },
      { name: 'Microsoft Clarity' },
    ],
  },
  {
    id: 'tooling',
    title: 'Tooling & workflow',
    note: null,
    skills: [
      { name: 'Git & GitHub', emphasis: true },
      { name: 'Code review', emphasis: true },
      { name: 'Nx / Turborepo' },
      { name: 'Vite' },
      { name: 'Agile delivery' },
      { name: 'C++' },
    ],
  },
];

export default skillGroups;
