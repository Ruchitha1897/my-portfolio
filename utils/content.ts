// =============================================================
// PORTFOLIO CONTENT — the only file you edit to personalize
// the site. Every component just renders this data.
// =============================================================

import type {
  BadgePlatform,
  Certification,
  NavLink,
  Project,
  SkillCategory,
  SocialLink,
  Stat,
  TimelineEntry,
} from '~/types'

export const profile = {
  name: 'Ruchitha',
  initials: 'R',
  githubUsername: 'Ruchitha_Developer',
  roles: [
    'Software Engineer',
    'Full-Stack Developer',
    'Cloud Engineer',
    'AWS Certified Developer',
    'AI Enthusiast',
  ],
  tagline:
    'I build fast, reliable products end to end — from cloud infrastructure to the pixels people actually touch.',
  bio: [
    'I\u2019m a full-stack engineer who enjoys the whole path from a rough idea to a deployed, monitored service. Most of my recent work sits at the intersection of web applications and cloud infrastructure — designing APIs, shaping data models, and running them reliably on AWS.',
    'Outside client work I explore applied AI and contribute to open-source tooling. I care about code the next engineer can read without a walkthrough.',
  ],
  location: 'Remote / Open to relocation',
  email: 'hello@example.com',
  resumeFile: '/resume-placeholder.pdf',
} as const

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Resume', href: '#resume' },
  { label: 'Badges', href: '#badges' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
]

export const stats: Stat[] = [
  { id: 'years', label: 'Years of experience', value: 4, suffix: '+' },
  { id: 'projects', label: 'Projects shipped', value: 18, suffix: '+' },
  { id: 'certs', label: 'AWS certifications', value: 3 },
  { id: 'commits', label: 'Commits this year', value: 900, suffix: '+' },
]

export const timeline: TimelineEntry[] = [
  {
    id: 'exp-2',
    kind: 'experience',
    range: '2023 — Present',
    title: 'Software Engineer',
    org: 'Company Name',
    description:
      'Own a Vue + Node service handling core product workflows; led the TypeScript migration and cut production incidents by tightening the CI pipeline.',
  },
  {
    id: 'exp-1',
    kind: 'experience',
    range: '2021 — 2023',
    title: 'Backend Developer',
    org: 'Previous Company',
    description:
      'Built and scaled FastAPI services on AWS, introduced containerized deployments with Docker and Kubernetes, and mentored two junior engineers.',
  },
  {
    id: 'edu-1',
    kind: 'education',
    range: '2017 — 2021',
    title: 'B.S. in Computer Science',
    org: 'University Name',
    description:
      'Distributed systems, algorithms, and databases. Capstone on medical image segmentation.',
  },
]

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    icon: 'code',
    items: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 80 },
      { name: 'JavaScript', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks',
    icon: 'stack',
    items: [
      { name: 'Vue', level: 90 },
      { name: 'Nuxt', level: 85 },
      { name: 'React', level: 82 },
      { name: 'Node.js', level: 88 },
      { name: 'Express', level: 85 },
      { name: 'FastAPI', level: 83 },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud',
    icon: 'cloud',
    items: [
      { name: 'AWS', level: 87 },
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 75 },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: 'database',
    items: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 80 },
      { name: 'DynamoDB', level: 74 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: 'tools',
    items: [
      { name: 'Git', level: 92 },
      { name: 'Linux', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'CI/CD', level: 84 },
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Cloud-Native Task Orchestrator',
    description:
      'A workflow engine for scheduling and monitoring background jobs across services, with retry policies and live status streaming to the UI.',
    stack: ['Vue 3', 'FastAPI', 'PostgreSQL', 'AWS', 'Docker'],
    category: 'featured',
    githubUrl: 'https://github.com/your-username',
    liveUrl: 'https://example.com',
    accent: 'gold',
  },
  {
    id: 'proj-2',
    title: 'Real-Time Analytics Dashboard',
    description:
      'A metrics dashboard with live charts and alerting, built to help a small team catch regressions before customers do.',
    stack: ['Nuxt 3', 'Node.js', 'Express', 'MongoDB'],
    category: 'featured',
    githubUrl: 'https://github.com/your-username',
    liveUrl: 'https://example.com',
    accent: 'blue',
  },
  {
    id: 'proj-3',
    title: 'Medical Image Segmentation',
    description:
      'Research applying convolutional models to segment anatomical structures in MRI scans, evaluated against clinical benchmarks.',
    stack: ['Python', 'PyTorch', 'PostgreSQL'],
    category: 'academic',
    githubUrl: 'https://github.com/your-username',
    accent: 'emerald',
  },
  {
    id: 'proj-4',
    title: 'Distributed Job Queue on Kubernetes',
    description:
      'A horizontally scalable queue with autoscaling worker pools, deployed on Kubernetes with DynamoDB for state.',
    stack: ['Python', 'Kubernetes', 'DynamoDB', 'AWS'],
    category: 'personal',
    githubUrl: 'https://github.com/your-username',
    accent: 'blue',
  },
  {
    id: 'proj-5',
    title: 'Smart-Home IoT Hub',
    description:
      'An event-driven hub for household sensors with an offline-first dashboard and MQTT ingestion.',
    stack: ['TypeScript', 'Node.js', 'MQTT', 'MongoDB'],
    category: 'personal',
    githubUrl: 'https://github.com/your-username',
    accent: 'gold',
  },
]

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    title: 'AWS Certified Developer — Associate',
    issuer: 'Amazon Web Services',
    date: '2024',
    credentialUrl: 'https://www.credly.com/',
  },
  {
    id: 'cert-2',
    title: 'AWS Certified Solutions Architect — Associate',
    issuer: 'Amazon Web Services',
    date: '2024',
    credentialUrl: 'https://www.credly.com/',
  },
  {
    id: 'cert-3',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialUrl: 'https://www.credly.com/',
  },
]

export const badges: BadgePlatform[] = [
  { id: 'github', name: 'GitHub', handle: '@your-username', url: 'https://github.com/your-username' },
  { id: 'aws', name: 'AWS', handle: 'Certification badges', url: 'https://www.credly.com/' },
  { id: 'leetcode', name: 'LeetCode', handle: '@your-username', url: 'https://leetcode.com/' },
  { id: 'hackerrank', name: 'HackerRank', handle: '@your-username', url: 'https://www.hackerrank.com/' },
  { id: 'gfg', name: 'GeeksforGeeks', handle: '@your-username', url: 'https://www.geeksforgeeks.org/' },
  { id: 'codechef', name: 'CodeChef', handle: '@your-username', url: 'https://www.codechef.com/' },
]

export const socialLinks: SocialLink[] = [
  { id: 'github', label: 'GitHub', url: 'https://github.com/your-username', icon: 'github' },
  { id: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com/in/your-username', icon: 'linkedin' },
  { id: 'email', label: profile.email, url: `mailto:${profile.email}`, icon: 'mail' },
  { id: 'location', label: profile.location, url: '#contact', icon: 'location' },
]
