<script setup lang="ts">
import type { GithubRepo } from '~/types'

// Live GitHub data, fetched client-side from the public REST API (no
// token needed). Repos are sorted by stars to approximate "pinned".
// If the request fails (rate limit, offline), the section degrades
// gracefully to the profile link.
const username = profile.githubUsername
const repos = ref<GithubRepo[]>([])
const state = ref<'loading' | 'ready' | 'error'>('loading')

// Stats + contribution graph as pre-rendered images from two widely
// used community services; both are lazy-loaded below the fold.
const statsImg = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&title_color=d4af37&icon_color=3e8ef7&text_color=97a3b8&hide_border=true`
const langsImg = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&title_color=d4af37&text_color=97a3b8&hide_border=true`
const graphImg = `https://ghchart.rshah.org/d4af37/${username}`

onMounted(async () => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`,
    )
    if (!response.ok) throw new Error(`GitHub API ${response.status}`)
    const data: GithubRepo[] = await response.json()
    repos.value = data
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6)
    state.value = 'ready'
  } catch {
    state.value = 'error'
  }
})
</script>

<template lang="pug">
section#github.section.github
  div.container
    SectionHeading(
      eyebrow="GitHub"
      title="Open-source activity"
      subtitle="Top repositories, contribution history and language mix — pulled live from GitHub."
    )

    div.github__images(v-reveal)
      GlassCard.github__image-card(accent="blue")
        img(:src="statsImg" alt="GitHub statistics overview" loading="lazy" width="450" height="50")
      GlassCard.github__image-card(accent="blue")
        img(:src="langsImg" alt="Most used programming languages" loading="lazy" width="360" height="200")

    GlassCard.github__graph-card(accent="emerald" v-reveal)
      img.github__graph(:src="graphImg" :alt="`Contribution graph for ${username}`" loading="lazy")

    div.github__repos(v-if="state === 'ready'")
      GlassCard.repo-card(
        v-for="(repo, i) in repos"
        :key="repo.id"
        accent="silver"
        interactive
        v-reveal="i"
      )
        a.repo-card__name(:href="repo.html_url" target="_blank" rel="noopener noreferrer")
          AppIcon(name="github" :size="16")
          span.mono {{ repo.name }}
        p.repo-card__description {{ repo.description ?? 'No description yet.' }}
        div.repo-card__meta.mono
          span(v-if="repo.language") {{ repo.language }}
          span
            AppIcon(name="star" :size="13")
            |  {{ repo.stargazers_count }}
          span
            AppIcon(name="fork" :size="13")
            |  {{ repo.forks_count }}

    p.github__fallback(v-else-if="state === 'error'")
      | Couldn't reach the GitHub API right now —
      a.github__fallback-link(:href="`https://github.com/${username}`" target="_blank" rel="noopener noreferrer")  browse my repositories directly ↗
</template>

<style scoped lang="scss">
.github__images {
  display: grid;
  gap: t.$space-5;
  margin-bottom: t.$space-5;

  @include m.respond(md) {
    grid-template-columns: 3fr 2fr;
  }
}

.github__image-card {
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
  }
}

.github__graph-card {
  margin-bottom: t.$space-6;
  overflow-x: auto;
}

.github__graph {
  width: 100%;
  min-width: 600px;
}

.github__repos {
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

.repo-card {
  display: flex;
  flex-direction: column;
}

.repo-card__name {
  display: inline-flex;
  align-items: center;
  gap: t.$space-2;
  font-weight: 700;
  color: t.$color-blue-soft;
  font-size: 0.95rem;
  margin-bottom: t.$space-2;
  word-break: break-all;

  &:hover {
    color: t.$color-gold-soft;
  }
}

.repo-card__description {
  color: t.$color-muted;
  font-size: 0.9rem;
  flex-grow: 1;
  margin-bottom: t.$space-4;
}

.repo-card__meta {
  display: flex;
  gap: t.$space-4;
  font-size: 0.75rem;
  color: t.$color-muted-dim;

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
  }
}

.github__fallback {
  color: t.$color-muted;
}

.github__fallback-link {
  color: t.$color-gold-soft;
  font-weight: 600;
}
</style>
