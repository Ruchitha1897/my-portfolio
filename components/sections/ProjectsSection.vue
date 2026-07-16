<script setup lang="ts">
import type { Project, ProjectCategory } from '~/types'

const groups: { key: ProjectCategory; label: string }[] = [
  { key: 'featured', label: 'Featured Projects' },
]

const byCategory = (key: ProjectCategory): Project[] =>
  projects.filter((project) => project.category === key)
</script>

<template lang="pug">
section#projects.section.projects
  div.container
    SectionHeading(
      eyebrow="Projects"
      title=" My work"
    )

    template(v-for="group in groups" :key="group.key")
      div(v-if="byCategory(group.key).length")
        h3.projects__group-title(v-reveal) {{ group.label }}
        div.projects__grid(:class="{ 'projects__grid--featured': group.key === 'featured' }")
          GlassCard.project-card(
            v-for="(project, i) in byCategory(group.key)"
            :key="project.id"
            :accent="project.accent"
            interactive
            v-reveal="i"
          )
            span.project-card__badge(v-if="group.key === 'featured'") Featured
            div.project-card__glyph(:class="`project-card__glyph--${project.accent}`")
              AppIcon(:name="group.key === 'featured' ? 'stack' : 'code'" :size="24")
            h4.project-card__title {{ project.title }}
            p.project-card__description {{ project.description }}
            ul.project-card__stack
              li.mono(v-for="tech in project.stack" :key="tech") {{ tech }}
            div.project-card__actions
              a.project-card__link(
                v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener noreferrer"
              )
                AppIcon(name="github" :size="16")
                span GitHub
              a.project-card__link(
                v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer"
              )
                AppIcon(name="external" :size="16")
                span Live Demo
</template>

<style scoped lang="scss">
.projects__group-title {
  font-size: 1.15rem;
  color: t.$color-silver;
  margin-bottom: t.$space-5;
  margin-top: t.$space-7;

  &:first-of-type {
    margin-top: 0;
  }
}

.projects__grid {
  display: grid;
  gap: t.$space-5;
  grid-template-columns: 1fr;

  @include m.respond(md) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include m.respond(xl) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.projects__grid--featured {
  @include m.respond(xl) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.project-card {
  display: flex;
  flex-direction: column;
  position: relative;
}

.project-card__badge {
  position: absolute;
  top: t.$space-5;
  right: t.$space-5;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: t.$color-bg-deep;
  background: linear-gradient(120deg, t.$color-gold-soft, t.$color-gold);
  padding: 0.3rem 0.7rem;
  border-radius: t.$radius-pill;
}

.project-card__glyph {
  width: 48px;
  height: 48px;
  border-radius: t.$radius-md;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: t.$space-4;
}

.project-card__glyph--gold {
  background: rgba(212, 175, 55, 0.12);
  color: t.$color-gold;
}
.project-card__glyph--blue,
.project-card__glyph--silver {
  background: rgba(62, 142, 247, 0.12);
  color: t.$color-blue-soft;
}
.project-card__glyph--emerald {
  background: rgba(47, 217, 138, 0.12);
  color: t.$color-emerald-soft;
}

.project-card__title {
  font-size: 1.15rem;
  color: t.$color-text;
  margin-bottom: t.$space-2;
}

.project-card__description {
  color: t.$color-muted;
  margin-bottom: t.$space-4;
  flex-grow: 1;
}

.project-card__stack {
  display: flex;
  flex-wrap: wrap;
  gap: t.$space-2;
  margin-bottom: t.$space-5;

  li {
    font-size: 0.72rem;
    color: t.$color-blue-soft;
    background: rgba(62, 142, 247, 0.1);
    border: 1px solid rgba(62, 142, 247, 0.2);
    padding: 0.25rem 0.65rem;
    border-radius: t.$radius-pill;
  }
}

.project-card__actions {
  display: flex;
  gap: t.$space-5;
  border-top: 1px solid t.$color-border;
  padding-top: t.$space-4;
}

.project-card__link {
  display: inline-flex;
  align-items: center;
  gap: t.$space-2;
  font-size: 0.85rem;
  font-weight: 700;
  color: t.$color-text;
  transition: color t.$duration-fast ease;

  &:hover {
    color: t.$color-gold-soft;
  }
}
</style>
