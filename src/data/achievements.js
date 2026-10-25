/**
 * Recognition and competitive-programming record.
 *
 * Supporting signal, not the main argument — the work above is. Kept short.
 *
 * LINK POLICY: every `href` below was requested and confirmed to resolve.
 * Entries whose source link is dead carry no link at all rather than a broken
 * one (see the Wipro entry).
 */

export const achievements = [
  {
    id: 'home-run',
    category: 'Award',
    title: '“Who Hit the Home Run”',
    detail: 'Awarded at Unthinkable Solutions for contributions to the Shopper’s Stop project.',
    href: null,
  },
  {
    id: 'leadership',
    category: 'Leadership',
    title: 'Led three frontend engineers on Foodstories',
    detail:
      'Before becoming the sole developer responsible for the mobile application and its production lifecycle.',
    href: null,
  },
  {
    id: 'kickstart',
    category: 'Competitive programming',
    title: 'Google Kick Start — global rank 2775 and 2789',
    detail: 'Round G and Round H respectively.',
    href: 'https://drive.google.com/file/d/1dk3Goa8xTSOvdH5r3PTtOLr_6KBPf7eq/view?usp=drive_link',
    hrefLabel: 'Certificates',
  },
  {
    id: 'codechef',
    /*
     * OPEN ITEM — verify before publishing.
     * The figure below is the one on the current resume. As checked on
     * 26 Oct 2026, the public profile at this handle displays a current rating
     * of 1566 and a highest rating of 1585 (Division 3), which would be 2-star
     * rather than 3-star. Either the handle or the figure needs correcting —
     * a recruiter who follows the link will see the profile value.
     */
    category: 'Competitive programming',
    title: 'CodeChef — 3★, maximum rating 1739',
    detail: null,
    href: 'https://www.codechef.com/users/saktiman2002',
    hrefLabel: 'Profile',
  },
  {
    id: 'problems',
    category: 'Competitive programming',
    title: '700+ problems solved',
    detail: 'Across LeetCode and GeeksforGeeks.',
    href: 'https://leetcode.com/CodeLeet2002/',
    hrefLabel: 'LeetCode',
    secondaryHref: 'https://www.geeksforgeeks.org/profile/anshgo2002',
    secondaryLabel: 'GeeksforGeeks',
  },
  {
    id: 'coderush',
    category: 'Competitive programming',
    title: 'Rank 565 — Newton School Coderush',
    detail: null,
    href: 'https://www.linkedin.com/posts/ansh-gupta-18040a226_coderush-newton-school-april-23-activity-7060338433176535040-Svl6',
    hrefLabel: 'Announcement',
  },
  {
    id: 'wipro',
    category: 'Certification',
    title: 'Gold certification — Cloud Computing Foundation',
    detail: 'Wipro FutureSkills.',
    /*
     * The old verification URL (cert.diceid.com/fsn/cid/SxiE0D) no longer
     * resolves — the domain has no DNS record as of 26 Oct 2026. Left unlinked
     * rather than shipping a dead link. Add a current URL here if one exists.
     */
    href: null,
  },
];

export default achievements;
