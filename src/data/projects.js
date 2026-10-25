/**
 * Personal projects — independent work, kept deliberately separate from the
 * client work above so the distinction is obvious to anyone reading.
 *
 * No deployed demos are claimed, because none exist. No usage numbers are
 * claimed either. `repo` renders a link; a missing `demo` renders nothing.
 */

import memoirShot from '../assets/media/memoir.webp';
import noteddShot from '../assets/media/notedd.webp';
import distractionsShot from '../assets/media/distractions.webp';

export const projects = [
  {
    id: 'eccho',
    name: 'Eccho',
    tagline: 'Real-time chat, built end to end',
    year: '2024—25',
    current: true,
    stack: ['React', 'Node.js', 'Socket.IO', 'MongoDB', 'Redux Toolkit', 'Express', 'JWT'],
    repo: 'https://github.com/Ansh2002Gupta/Eccho',
    demo: null,
    image: null,
    summary:
      'A messaging application where I wrote both halves — the React client and the Express/MongoDB server behind it. The interesting part is the bit that is not request/response: keeping presence, delivery and group membership consistent over a socket connection that drops.',
    highlights: [
      'One-to-one and group conversations over a persistent Socket.IO connection rather than polling.',
      'Conversations persist for both guest and authenticated users, so a session is not lost on refresh.',
      'User presence, contact management and group creation on top of a JWT-authenticated REST API.',
      'MongoDB/Mongoose schemas for users, chats and messages, with the socket layer and the REST layer sharing one model.',
    ],
  },
  {
    id: 'memoir',
    name: 'Memoir',
    tagline: 'Multi-author blogging platform',
    year: '2023',
    current: false,
    stack: ['React', 'Node.js', 'MySQL', 'REST', 'Multer'],
    repo: 'https://github.com/Ansh2002Gupta/blogapp',
    demo: null,
    image: memoirShot,
    imageAlt:
      'The Memoir blogging platform home page, showing a featured article and a grid of posts by category.',
    summary:
      'A blogging platform with full create/read/update/delete for posts, author profiles and category browsing, backed by a REST API over MySQL.',
    highlights: [
      'Multi-user authoring with per-author profiles and category-based browsing.',
      'REST API over a MySQL schema covering users, posts and categories.',
      'Image uploads handled through Multer for both post media and author avatars.',
    ],
  },
];

/**
 * Earlier work, kept honest about its age. These are university-era projects;
 * they are listed because the code is public, not presented as current work.
 */
export const earlierProjects = [
  {
    id: 'notedd',
    name: 'Notedd',
    year: '2023',
    blurb:
      'Note organiser with JWT-authenticated accounts and CRUD over a MongoDB store.',
    stack: ['React', 'Node.js', 'MongoDB', 'JWT'],
    repo: 'https://github.com/Ansh2002Gupta/Notedd',
    image: noteddShot,
    imageAlt: 'The Notedd note-organiser interface showing a list of saved notes.',
  },
  {
    id: 'distractions',
    name: 'Distractions',
    year: '2022',
    blurb:
      'Browser games portal with accounts, a high-score dashboard and a PHP/MySQL backend. Self-hosted on a VPS for two months in early 2022; no longer running.',
    stack: ['PHP', 'MySQL', 'HTML', 'CSS'],
    repo: 'https://github.com/Ansh2002Gupta/Gaming_website',
    image: distractionsShot,
    imageAlt: 'The Distractions gaming portal dashboard showing high scores and recent plays.',
  },
];

export default projects;
