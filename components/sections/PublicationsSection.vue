<script setup lang="ts">
// Live citation counts from the free Semantic Scholar API, keyed by
// publication id. Fetched client-side; a paper simply shows no count
// if the lookup fails or it isn't indexed yet.
const citationCounts = ref<Record<string, number>>({})

onMounted(() => {
  publications.forEach(async (pub) => {
    if (!pub.doi) return
    try {
      const bareDoi = pub.doi.replace('https://doi.org/', '')
      const response = await fetch(
        `https://api.semanticscholar.org/graph/v1/paper/DOI:${bareDoi}?fields=citationCount`,
      )
      if (!response.ok) return
      const data = await response.json()
      if (typeof data.citationCount === 'number') citationCounts.value[pub.id] = data.citationCount
    } catch {
      // Leave uncounted — no fallback number, just an absent stat.
    }
  })
})
</script>

<template lang="pug">
section#publications.section.publications
  div.container
    SectionHeading(
      eyebrow="Publications"
      title="Published research"
      subtitle="Peer-reviewed IEEE papers on medical image segmentation, co-authored during my undergraduate research."
    )

    div.publications__list
      GlassCard.pub-card(
        v-for="(pub, i) in publications"
        :key="pub.id"
        accent="emerald"
        interactive
        v-reveal="i"
      )
        span.pub-card__icon
          AppIcon(name="medal" :size="22")
        h3.pub-card__title {{ pub.title }}
        p.pub-card__authors {{ pub.authors.join(', ') }}
        p.pub-card__venue {{ pub.venue }} · {{ pub.year }}
        p.pub-card__citations(v-if="citationCounts[pub.id] !== undefined")
          AppIcon(name="star" :size="13")
          |  {{ citationCounts[pub.id] }} citation{{ citationCounts[pub.id] === 1 ? '' : 's' }}
        BaseButton.pub-card__link(
          v-if="pub.doi"
          variant="secondary"
          :href="pub.doi"
          target="_blank"
          icon="external"
        ) View Paper
</template>

<style scoped lang="scss">
.publications__list {
  display: grid;
  gap: t.$space-5;
}

.pub-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.pub-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(47, 217, 138, 0.12);
  color: t.$color-emerald-soft;
  margin-bottom: t.$space-4;
}

.pub-card__title {
  font-size: 1.05rem;
  color: t.$color-text;
  margin-bottom: t.$space-2;
  max-width: 70ch;
}

.pub-card__authors {
  color: t.$color-blue-soft;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: t.$space-1;
}

.pub-card__venue {
  color: t.$color-muted;
  font-size: 0.85rem;
  margin-bottom: t.$space-2;
  max-width: 70ch;
}

.pub-card__citations {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: t.$color-gold-soft;
  font-size: 0.8rem;
  margin-bottom: t.$space-2;
}

.pub-card__link {
  font-size: 0.85rem;
  margin-top: t.$space-3;
}
</style>
