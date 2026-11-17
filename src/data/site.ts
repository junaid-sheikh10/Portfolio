// ─────────────────────────────────────────────────────────────
//  All the portfolio's content lives in this file.
//  Edit the text here; the design picks it up automatically.
//  To add a project, copy one block in `projects` and change it.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Junaid Sheikh',
  title: 'Backend Developer',
  tagline:
    'I build reliable APIs and backend systems. This is placeholder text: replace it with a sentence about what you do and what you care about.',
  location: 'Your City, Country',
  email: 'you@example.com', // placeholder: put the address you want to show publicly
  resumeUrl: '', // e.g. '/Portfolio/resume.pdf' after adding resume.pdf to /public
};

export const socials = [
  { label: 'GitHub', url: 'https://github.com/junaid-sheikh10' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/' }, // placeholder
];

export const about = [
  'This is placeholder text for your bio. Write two or three sentences about who you are, what you work on, and what you are learning right now.',
  'A second short paragraph can cover what kind of role or projects you are looking for, or what you enjoy outside of code.',
];

export const skills = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'SQL'] },
  { group: 'Backend', items: ['Node.js', 'NestJS', 'REST APIs', 'BullMQ'] },
  { group: 'Data', items: ['PostgreSQL', 'Redis'] },
  { group: 'Tools', items: ['Git', 'Docker', 'Jest', 'Linux'] },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: 'URL Shortener',
    description:
      'A URL shortener backend with raw SQL on PostgreSQL, Redis caching, and click tracking through a BullMQ queue.',
    tech: ['NestJS', 'PostgreSQL', 'Redis', 'BullMQ'],
    github: 'https://github.com/junaid-sheikh10/url-shortener',
  },
  {
    title: 'Project Two',
    description:
      'Placeholder project. Describe what it does and the problem it solves in one or two sentences.',
    tech: ['TypeScript', 'Express'],
    github: 'https://github.com/junaid-sheikh10',
  },
  {
    title: 'Project Three',
    description:
      'Placeholder project. A live demo link appears as a second button when you fill in `live`.',
    tech: ['React', 'Node.js'],
    github: 'https://github.com/junaid-sheikh10',
    live: 'https://example.com',
  },
];

export const experience = [
  {
    role: 'Software Engineer (placeholder)',
    org: 'Company Name',
    period: '2025 — Present',
    summary: 'One or two lines on what you built or were responsible for.',
  },
  {
    role: 'B.Sc. Computer Science (placeholder)',
    org: 'University Name',
    period: '2021 — 2025',
    summary: 'Relevant coursework, thesis, or achievements.',
  },
];
