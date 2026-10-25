/**
 * Professional work — case studies for products delivered inside my
 * engineering role, not personal side projects.
 *
 * CONTENT RULES APPLIED HERE
 * - No screenshots, logos or internal implementation detail. These are client
 *   products; the narrative describes my contribution, not their codebase.
 * - Only links that have been checked and resolve are included. A project with
 *   no approved public URL simply carries no link, and the UI renders nothing.
 * - Numbers are reproduced exactly as reported internally and are labelled as
 *   internal measurements. See `metricsNote` on each entry.
 *
 * OPEN ITEM: `employer` is intentionally absent on the two internship entries.
 * Add it once confirmed rather than guessing — the UI only renders the line
 * when the field is present.
 *
 * Shape:
 *   id, name, tagline, kind, role, stack[], links[], summary, highlights[],
 *   metrics[]?, metricsNote?, caseStudy{}?, featured
 */

export const work = [
  {
    id: 'foodstories',
    name: 'Foodstories',
    tagline: 'Premium grocery and lifestyle commerce, for iOS and Android',
    kind: 'Client product · Mobile',
    role: 'Built from scratch · led 3 engineers, then sole developer',
    featured: true,
    stack: [
      'React Native',
      'Redux',
      'Magento',
      'Storybook',
      'Firebase Remote Config',
      'AWS S3',
      'Crashlytics',
      'Stallion OTA',
      'CleverTap',
      'AppsFlyer',
    ],
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/in/app/foodstories/id6760836052',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=shop.foodstories.app',
      },
    ],
    summary:
      'A React Native storefront built from nothing on top of an existing Magento commerce backend, then carried through store submission, crash monitoring and hotfix releases. I started on it as part of a three-engineer frontend team that I led, and ended up as the sole developer responsible for the app.',
    highlights: [
      'Built the application end to end — catalogue, product listing, cart, checkout and account — against a legacy Magento backend that was never designed for a mobile client.',
      'Designed the shared UI layer with a Factory Pattern, standardised the API contracts behind it, and developed components in Storybook so the library stayed documented as it grew.',
      'Made the Product Listing Page workable with interdependent filters and sorting, where the hard part was keeping the filter state consistent without re-rendering the whole list on every change.',
      'Kept checkout responsive despite slow backend calls using optimistic updates and stale-while-revalidate, so the interface reacted immediately and reconciled afterwards.',
      'Built remotely configurable page layouts: Home, Gifting and Recipe screens render from JSON served out of AWS S3, later extended to feature flags and force-update rules and hardened with Firebase Remote Config.',
      'Owned the release pipeline — Android and iOS builds, Play Console and App Store Connect submissions, review tracking, Crashlytics triage, hotfix coordination and Stallion for OTA distribution to QA.',
      'Instrumented the funnel with CleverTap, Microsoft Clarity, Google Analytics and AppsFlyer, and used CleverTap push notifications for re-engagement and repeat-purchase campaigns.',
    ],

    caseStudy: {
      label: 'Performance case study — the Diwali campaign',
      context:
        'Home and Gifting were designed around six or seven carousels. The Diwali campaign needed them to carry 15–20 dynamic sections — merchandising rails, gifting collections, recipe entry points — composed remotely so the merchandising team could change the campaign without a new app release.',
      problem:
        'At that section count the screens became unusable for a reported 10–15 seconds. The cost was not in one place. The layout JSON describing the page had grown large and was being fetched from origin. The imagery was unoptimised. The render pass waited for every section API before showing anything. And after navigating away, the JavaScript thread was still doing work for a screen nobody was looking at — which hurt most on lower-end Android devices.',
      sections: [
        {
          title: 'Shrink what has to arrive first',
          body: 'Moved layout JSON delivery onto a CDN and trimmed the payload itself, taking it from 224 KB to 51 KB. Switched page imagery to WebP variants. Both are unglamorous changes, and together they removed most of the wait before anything could be drawn.',
        },
        {
          title: 'Stop waiting for everything',
          body: 'Replaced the all-or-nothing render with incremental section rendering, so the first sections appear as their data resolves instead of blocking on the slowest call in the page. Lottie animations were deferred behind a WebP placeholder that renders immediately and is swapped once the animation has downloaded in the background.',
        },
        {
          title: 'Remove work nobody asked for',
          body: 'Audited the home screen request waterfall and removed redundant calls, cutting it from 25 requests to 15. Enabled React Navigation’s freezeOnBlur and aborted obsolete in-flight requests on navigation, so a screen the user has left stops competing for the JavaScript thread with the one they are on.',
        },
      ],
      outcome:
        'The screens shipped with 15–20 sections instead of 6–7 and became usable in a fraction of the time. Just as usefully, the campaign layout became something the merchandising team could change remotely, without an app release and without a regression in load time.',
    },

    metrics: [
      { label: 'Reported loading time', before: '10–15 s', after: '0.5–2 s' },
      { label: 'Layout JSON payload', before: '224 KB', after: '51 KB', delta: '−77%' },
      { label: 'Layout JSON download', before: '~2 s', after: '~150 ms' },
      { label: 'Image load time', before: '~3 s', after: '~1 s' },
      { label: 'Home screen API calls', before: '25', after: '15', delta: '−40%' },
    ],
    /*
     * NOTE TO SELF / OPEN ITEM — see the report accompanying this rebuild.
     * "Reported loading time" is deliberately not called "full page load".
     * Confirm what the 0.5–2 s figure measured (first usable content vs. every
     * section fully settled) and tighten this label accordingly. Do not
     * restate it as a stronger claim than the measurement supports.
     */
    metricsNote:
      'Internal measurements reported from the campaign build on team test devices, not lab-standardised benchmarks.',
  },

  {
    id: 'shoppers-stop',
    name: 'Shopper’s Stop',
    tagline: 'Revamping a national retail e-commerce platform',
    kind: 'Client product · Web',
    role: 'Frontend engineer · owned the luxury PLP revamp',
    featured: true,
    stack: ['React', 'Next.js', 'Strapi', 'Redux', 'CSS'],
    links: [{ label: 'shoppersstop.com', href: 'https://www.shoppersstop.com/' }],
    summary:
      'Contributed to a UI/UX revamp of an established retail e-commerce platform, building responsive components against an existing production codebase and a Strapi CMS. I took ownership of the luxury-product listing experience and of a multi-step appointment flow that had to survive everything a real user does to a browser.',
    highlights: [
      'Rebuilt responsive layouts across the revamp so the same components behaved sensibly from small phones to wide desktop, rather than being redesigned per breakpoint.',
      'Owned the revamp of the luxury-product Product Listing Page.',
      'Built CMS-driven UI on Strapi, including dynamic header and footer sections that merchandising could change without a deploy.',
      'Developed reusable catalogue layouts supporting masonry-style presentation, so different categories could present stock at different densities from one component.',
      'Built a reusable time-slot selector and a multi-step appointment workflow on Redux with persistent local storage.',
    ],

    caseStudy: {
      label: 'Detail — an appointment flow that survives real browsers',
      context:
        'A multi-step appointment booking flow with a time-slot selector. On paper it is a wizard; in practice users reload halfway, open a second tab, hit the back button, and send the link to themselves on another device.',
      problem:
        'Any of those actions can leave a wizard in a state the code never anticipated — progress silently lost, or two tabs disagreeing about which slot is selected and the second one overwriting the first.',
      sections: [
        {
          title: 'Persist progress, not assumptions',
          body: 'Step state lives in Redux and is persisted to local storage, so a reload or a navigation away and back resumes where the user left off instead of restarting the flow.',
        },
        {
          title: 'Handle the awkward cases explicitly',
          body: 'Duplicate tabs, reloads mid-step, backwards navigation and links opened on a different device were each treated as a case to define rather than a bug to patch later — the flow decides what the correct state is instead of letting the last write win by accident.',
        },
      ],
      outcome:
        'The selector and the wizard were both built to be reused elsewhere in the platform rather than being specific to one booking journey.',
    },

    /*
     * OMITTED ON PURPOSE: an earlier resume draft noted the luxury PLP
     * "accounted for a 50% share of website revenue". The interpretation of
     * that figure is unconfirmed (contribution vs. growth), so it is not
     * published here. Add it to `metrics` only once the meaning is verified —
     * and keep the wording as "share of revenue", never "revenue growth".
     */
    metrics: null,

    award: '“Who Hit the Home Run” award for contributions to the project.',
  },

  {
    id: 'opiwiz',
    name: 'Opiwiz',
    tagline: 'Real-time prediction market platform',
    kind: 'Client product · Web',
    role: 'Frontend engineer · onboarding and market creation',
    featured: true,
    stack: ['Next.js', 'Server-side rendering', 'React Joyride', 'AI translation & news APIs'],
    /* No approved public URL exists for this product, so no link is rendered. */
    links: [],
    summary:
      'A server-rendered prediction market where users create and trade on markets in real time. I worked on the market-creation workflow and the onboarding that gets a new user through it, in a product where a slow first paint directly costs engagement.',
    highlights: [
      'Implemented server-side rendering with a sub-second First Meaningful Paint, so the market view is readable before the client bundle has finished its work.',
      'Built a multi-step market-creation workflow with AI-powered translation for form fields, so a market authored in one language is usable in another.',
      'Added live AI-generated news alongside the form to give authors the context they need while writing a market, instead of sending them elsewhere to find it.',
      'Applied prefetching, lazy loading and chunked uploads to improve perceived performance and keep large uploads from blocking the interface.',
      'Developed and maintained guided onboarding with React Joyride, which contributed to a reported 40% increase in user retention.',
      'Reviewed a fellow developer’s pull requests and supported delivery through the maintenance phase.',
    ],
    metrics: [
      { label: 'First Meaningful Paint', after: 'sub-second', note: 'via SSR' },
      { label: 'User retention', after: '+40%', note: 'reported, after guided onboarding' },
    ],
    metricsNote: 'Retention figure as reported by the product team.',
  },

  {
    id: 'aakash-life',
    name: 'Aakash Life',
    tagline: 'Medical e-commerce across web and mobile',
    kind: 'Internship project · Web & mobile',
    role: 'Frontend engineer (intern)',
    featured: false,
    stack: ['React', 'React Native', 'Solito'],
    links: [],
    summary:
      'A medical commerce product that had to exist on web and mobile at once. I set up the Solito monorepo that let both targets share navigation and screens, and built the internal portal the business side used to run inventory.',
    highlights: [
      'Set up a Solito-based monorepo sharing code between the React web app and the React Native mobile app, which enabled roughly 40% faster feature development across both.',
      'Built an administrative portal for inventory and point-of-sale management.',
      'Improved bulk-upload reliability with API polling, reducing failures by more than 60%.',
    ],
    metrics: null,
  },

  {
    id: 'gulf-hr',
    name: 'Gulf HR',
    tagline: 'Configurable dashboards for a CMS application',
    kind: 'Internship project · Web',
    role: 'Frontend engineer (intern)',
    featured: false,
    stack: ['React', 'React-Draggable', 'Axios'],
    links: [],
    summary:
      'A CMS application where every customer wanted a different dashboard. Rather than building each one, I built the thing that builds them.',
    highlights: [
      'Built a drag-and-drop dashboard builder that cut dashboard setup time by roughly 80%.',
      'Developed reusable chart and data-table components with optimised API usage, reducing API calls by 25–35%.',
    ],
    metrics: null,
  },
];

export const featuredWork = work.filter((w) => w.featured);
export const additionalWork = work.filter((w) => !w.featured);

export default work;
