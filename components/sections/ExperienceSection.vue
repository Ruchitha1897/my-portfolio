<script setup lang="ts">
const experience = timeline.filter((entry) => entry.kind === 'experience')
const education = timeline.filter((entry) => entry.kind === 'education')
</script>

<template lang="pug">
section#experience.section.experience
  div.container
    SectionHeading(
      eyebrow="Experience"
      title="Where I've served"
      subtitle="Roles and responsibilities, most recent first."
    )

    div.experience__columns
      ol.timeline(v-reveal)
        li.timeline__item(v-for="entry in experience" :key="entry.id")
          div.timeline__marker
          div.timeline__content
            div.timeline__meta
              span.timeline__range.mono {{ entry.range }}
            h3.timeline__title {{ entry.title }}
            p.timeline__org {{ entry.org }}
            p.timeline__description {{ entry.description }}

      div.experience__education
        h3.experience__education-title Education
        ol.timeline
          li.timeline__item(v-for="entry in education" :key="entry.id")
            div.timeline__marker
            div.timeline__content
              div.timeline__meta
                span.timeline__range.mono {{ entry.range }}
              h3.timeline__title {{ entry.title }}
              p.timeline__org {{ entry.org }}
              p.timeline__description(v-if="entry.description") {{ entry.description }}
</template>

<style scoped lang="scss">
.experience__columns {
  display: grid;
  gap: t.$space-8;

  @include m.respond(lg) {
    grid-template-columns: 1.4fr 1fr;
    align-items: start;
  }
}

.experience__education-title {
  font-size: 1.1rem;
  margin-bottom: t.$space-5;
  color: t.$color-text;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: t.$space-6;
  position: relative;
  padding-left: t.$space-5;
  border-left: 1px solid t.$color-border;
  max-width: 720px;
}

.timeline__item {
  position: relative;
}

.timeline__marker {
  position: absolute;
  left: calc(-1 * #{t.$space-5} - 5px);
  top: 6px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid t.$color-bg;
  background: t.$color-gold;
}

.timeline__meta {
  margin-bottom: t.$space-1;
}

.timeline__range {
  font-size: 0.8rem;
  color: t.$color-gold-soft;
}

.timeline__title {
  font-size: 1.1rem;
  color: t.$color-text;
  margin-bottom: t.$space-1;
}

.timeline__org {
  font-size: 0.9rem;
  color: t.$color-blue-soft;
  font-weight: 600;
  margin-bottom: t.$space-2;
}

.timeline__description {
  color: t.$color-muted;
  max-width: 60ch;
}
</style>
