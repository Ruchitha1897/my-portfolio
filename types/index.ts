// Central content types — every section component and the content
// file agree on these shapes.

export type Accent = 'gold' | 'blue' | 'emerald' | 'silver'

export interface NavLink {
  label: string
  href: string
}

export interface Stat {
  id: string
  label: string
  value: number
  suffix?: string
}

export interface SkillItem {
  name: string
  level: number // 0–100, drives the proficiency bar
}

export interface SkillCategory {
  id: string
  title: string
  icon: IconName
  items: SkillItem[]
}

export interface TimelineEntry {
  id: string
  kind: 'education' | 'experience'
  range: string
  title: string
  org: string
  description: string
}

export type ProjectCategory = 'featured' | 'academic' | 'personal'

export interface Project {
  id: string
  title: string
  description: string
  stack: string[]
  category: ProjectCategory
  githubUrl?: string
  liveUrl?: string
  accent: Accent
}

export interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  credentialUrl?: string
  credentialId?: string
  badgeImage?: string
}

export interface BadgePlatform {
  id: string
  name: string
  handle: string
  url: string
}

export interface SocialLink {
  id: string
  label: string
  url: string
  icon: IconName
}

export interface GithubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  pushed_at: string
}

export type IconName =
  | 'github'
  | 'linkedin'
  | 'mail'
  | 'location'
  | 'download'
  | 'external'
  | 'menu'
  | 'close'
  | 'arrow-up'
  | 'arrow-right'
  | 'send'
  | 'code'
  | 'stack'
  | 'cloud'
  | 'database'
  | 'tools'
  | 'medal'
  | 'shield'
  | 'check'
  | 'star'
  | 'fork'
