// =============================================================
// PORTFOLIO CONTENT — the only file you edit to personalize
// the site. Every component just renders this data.
// =============================================================

import type {
  BadgePlatform,
  Certification,
  NavLink,
  Project,
  Publication,
  SkillCategory,
  SocialLink,
  Stat,
  TimelineEntry,
} from '~/types'

export const profile = {
  name: 'Ruchitha',
  initials: 'R',
  githubUsername: 'Ruchitha1897',
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
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Certifications', to: '/certifications' },
  { label: 'Publications', to: '/publications' },
  { label: 'Skills', to: '/skills' },
  { label: 'Resume', to: '/resume' },
  { label: 'Badges', to: '/badges' },
  { label: 'Contact', to: '/contact' },
]

export const stats: Stat[] = [
  { id: 'years', label: 'Years of experience', value: 3, suffix: '+' },
  { id: 'projects', label: 'Projects shipped', value: 18, suffix: '+' },
  { id: 'certs', label: 'AWS certifications', value: 3 },
  { id: 'commits', label: 'Commits this year', value: 900, suffix: '+' },
]

export const timeline: TimelineEntry[] = [
  {
    id: 'exp-3',
    kind: 'experience',
    range: 'Aug 2024 — Present',
    title: 'Full Stack Developer II',
    org: 'Contracts and Purchasing — Northern Arizona University, Flagstaff, AZ',
    description:
      'Shipped a React, Django, FastAPI, PostgreSQL platform replacing a legacy system across 500+ contracts and 150+ vendors. Built an LLM layer with RAG (pgvector embeddings), structured JSON-schema prompts, and confidence-scored routing to human review — cutting hallucinations and improving field-extraction accuracy across 20+ document types. Architected an AI-augmented vendor onboarding pipeline on AWS S3 + OpenAI API that OCR-parses and classifies vendor documents, populates 20+ normalized fields, and drafts human-in-the-loop emails — eliminating 80% of manual data entry.',
  },
  {
    id: 'exp-2',
    kind: 'experience',
    range: 'Aug 2022 — Aug 2024',
    title: 'Full Stack Developer',
    org: 'SpeakUp B.V, Bangalore, India',
    description:
      'Led the migration of the core frontend from Vue 2 to Vue 3 with TypeScript and modernized Node.js backend services, lifting developer productivity 30%, cutting build times 40%, and reducing production bundle size 25%. Architected scalable, cloud-native SaaS infrastructure on AWS (EC2, Lambda, S3, EKS, API Gateway, CloudFront, CloudWatch) with Docker on Kubernetes, achieving 99.9% uptime and reducing average API latency by 45%. Served 500K requests/day across 20K users and reduced MTTR by 90% through on-call rotation. Hardened security with IAM least-privilege roles, AWS Cognito with JWT/OAuth 2.0, RBAC, and audit logging supporting SOC 2-aligned controls.',
  },
  {
    id: 'exp-1',
    kind: 'experience',
    range: 'May 2021 — Jul 2022',
    title: 'Software Developer',
    org: 'ACIK Enterprises (OPC) Pvt Ltd, Bangalore, India',
    description:
      'Developed and tested 25+ high-performance RESTful APIs, achieving 99% test coverage and reducing production defects by 35%. Engineered dashboards with optimized SQL, cutting report latency from 30 minutes to under 2 minutes and reporting overhead by 60%. Built reusable input validation that reduced repetitive logic by 40% and improved API response consistency by 30%.',
  },
  {
    id: 'exp-volunteer',
    kind: 'volunteer',
    range: '2023 — Present',
    title: 'Community Member',
    org: 'Society of Women Engineers (SWE)',
    description:
      'Volunteer with SWE, supporting outreach and mentorship programs that encourage women and underrepresented groups to pursue and stay in engineering careers.',
  },
  {
    id: 'edu-2',
    kind: 'education',
    range: 'Aug 2024 — May 2026',
    title: 'Master of Science in Computer Science',
    org: 'Northern Arizona University, Flagstaff, AZ',
    description: '',
  },
  {
    id: 'edu-1',
    kind: 'education',
    range: 'Aug 2018 — Aug 2022',
    title: 'Bachelor of Science in Computer Science',
    org: 'Visvesvaraya Technological University, Bangalore, IN',
    description: '',
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
    id: 'proj-4',
    title: 'Distributed Job Queue on Kubernetes',
    description:
      'A horizontally scalable queue with autoscaling worker pools, deployed on Kubernetes with DynamoDB for state.',
    stack: ['Python', 'Kubernetes', 'DynamoDB', 'AWS'],
    category: 'personal',
    liveUrl: 'https://example.com',
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
  {
    id: 'proj-1',
    title: 'Cloud-Native Task Orchestrator',
    description:
      'A workflow engine for scheduling and monitoring background jobs across services, with retry policies and live status streaming to the UI.',
    stack: ['Vue 3', 'FastAPI', 'PostgreSQL', 'AWS', 'Docker'],
    category: 'featured',
    githubUrl: 'https://github.com/your-username',
    accent: 'gold',
  },
  {
    id: 'proj-6',
    title: 'Grounded SQL',
    description:
      'A text-to-SQL assistant that grounds LLM-generated queries in the real schema via RAG over pgvector, cutting hallucinated columns and joins before a query ever runs.',
    stack: ['Python', 'OpenAI API', 'RAG', 'pgvector', 'PostgreSQL'],
    category: 'featured',
    githubUrl: 'https://github.com/Ruchitha1897',
    accent: 'emerald',
  },
  {
    id: 'proj-8',
    title: 'AI Code Assistant',
    description:
      'An LLM-powered code review platform with RAG over pgvector and GitHub webhooks, surfacing confidence-scored inline suggestions with severity tagging on every pull request.',
    stack: ['TypeScript', 'OpenAI API', 'RAG', 'pgvector', 'GitHub Actions'],
    category: 'featured',
    githubUrl: 'https://github.com/Ruchitha1897',
    accent: 'gold',
  },
  {
    id: 'proj-9',
    title: 'Multi-Agent RAG System',
    description:
      'A multi-agent pipeline that routes queries between specialized retrieval, reasoning, and tool-use agents, coordinating over a shared pgvector knowledge base to answer questions no single agent could handle alone.',
    stack: ['Python', 'LangChain', 'OpenAI API', 'RAG', 'pgvector'],
    category: 'featured',
    githubUrl: 'https://github.com/Ruchitha1897',
    accent: 'blue',
  },
  {
    id: 'proj-7',
    title: 'AI Cricket Decision Coach',
    description:
      'A computer-vision assistant that reviews cricket match footage, tracking ball trajectory and player positioning to suggest LBW, run-out, and shot-selection calls in real time.',
    stack: ['Python', 'Computer Vision', 'OpenCV', 'PyTorch', 'FastAPI'],
    category: 'featured',
    githubUrl: 'https://github.com/Ruchitha1897',
    accent: 'blue',
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
    liveUrl: 'https://example.com',
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
    credentialId: 'ABC123XYZ',
    badgeImage: '/certification-badges/aws-simulearn-ai-practitioner.png',
  },
  {
    id: 'cert-2',
    title: 'AWS SimuLearn: AI Practitioner — Trained',
    issuer: 'AWS SimuLearn',
    date: '2024',
    credentialUrl: 'https://www.credly.com/badges/c9ed39a0-108b-4169-a3b7-f7dfaf58de43',
    badgeImage: '/certification-badges/aws-simulearn-ai-practitioner.png',
  },
  {
    id: 'cert-3',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialUrl: 'https://www.credly.com/',
    credentialId: 'ABC123XYZ',
    badgeImage: '/certification-badges/aws-simulearn-ai-practitioner.png',
  },
]

export const publications: Publication[] = [
  {
    id: 'pub-1',
    title:
      'Comparative analysis of active contour, random walker and watershed algorithms in segmentation of ovarian cancer',
    authors: [
      'Ruchitha P J',
      'Sai Richitha Y',
      'Ashwini Kodipalli',
      'Roshan Joy Martis',
      'Santosh Dasar',
      'Taha Ismail',
    ],
    venue:
      '2022 International Conference on Distributed Computing, VLSI, Electrical Circuits and Robotics (DISCOVER)',
    year: '2022',
    doi: 'https://doi.org/10.1109/DISCOVER55800.2022.9974855',
    pdfFile: '/research-papers/discover-2022-segmentation-comparison.pdf',
    thumbnail: '/research-papers/discover-2022-segmentation-comparison.png',
  },
  {
    id: 'pub-2',
    title: 'Segmentation of Ovarian Cancer using Active Contour and Random Walker Algorithm',
    authors: ['Ruchitha P J', 'Sai Richitha Y', 'Ashwini Kodipalli', 'Roshan Joy Martis'],
    venue:
      '2021 5th International Conference on Electrical, Electronics, Communication, Computer Technologies and Optimization Techniques (ICEECCOT)',
    year: '2021',
    doi: 'https://doi.org/10.1109/ICEECCOT52851.2021.9707939',
    pdfFile: '/research-papers/iceeccot-2021-ovarian-segmentation.pdf',
    thumbnail: '/research-papers/iceeccot-2021-ovarian-segmentation.png',
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
  { id: 'github', label: 'GitHub', url: 'https://github.com/Ruchitha1897', icon: 'github' },
  { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/ruchitha-podhili-jayachandra-naidu-763b781a2', icon: 'linkedin' },
  { id: 'email', label: profile.email, url: `mailto:${profile.email}`, icon: 'mail' },
  { id: 'location', label: profile.location, url: '/contact', icon: 'location' },
]
