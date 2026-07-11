<script setup lang="ts">
const education = timeline.filter((entry) => entry.kind === 'education')
</script>

<template lang="pug">
section#about.section.about
  div.container.about__grid
    div.about__portrait(v-reveal)
      div.about__portrait-frame
        span.about__portrait-initials {{ profile.initials }}
      GlassCard.about__location-card(accent="gold")
        AppIcon(name="location" :size="16")
        span {{ profile.location }}

      div.about__badges(v-reveal="1")
        a.about__badge(
          v-for="cert in certifications"
          :key="cert.id"
          :href="cert.credentialUrl"
          target="_blank"
          rel="noopener noreferrer"
          :title="cert.title"
        )
          img.about__badge-img(:src="cert.badgeImage" :alt="cert.title" loading="lazy")

    div.about__body
      SectionHeading(
        eyebrow="About"
        title="The engineer behind the code"
        subtitle="A quick look at who I am, where I studied, and what I care about when I build."
      )

      p.about__paragraph(v-for="(paragraph, i) in profile.bio" :key="i" v-reveal="i") {{ paragraph }}

      div.about__stats(v-reveal="1")
        StatCounter(v-for="stat in stats" :key="stat.id" :stat="stat")

      div.about__education(v-reveal="2")
        h3.about__education-title Education
        div.about__education-item(v-for="entry in education" :key="entry.id")
          span.about__education-range.mono {{ entry.range }}
          div
            p.about__education-degree {{ entry.title }}
            p.about__education-org {{ entry.org }}
            p.about__education-copy {{ entry.description }}
</template>

<style scoped lang="scss">
.about__grid {
  display: grid;
  gap: t.$space-8;

  @include m.respond(lg) {
    grid-template-columns: 0.8fr 1.2fr;
    align-items: start;
  }
}

.about__portrait {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: t.$space-5;

  @include m.respond(lg) {
    position: sticky;
    top: t.$space-9;
  }
}

// Photo placeholder: swap the initials for an <img>.
.about__portrait-frame {
  width: min(260px, 70%);
  aspect-ratio: 4 / 5;
  border-radius: t.$radius-lg;
  background: t.$color-bg-raised;
  border: 1px solid t.$color-border-strong;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: t.$shadow-soft;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 10px;
    border: 1px solid t.$color-gold-dim;
    border-radius: calc(#{t.$radius-lg} - 8px);
  }
}

.about__portrait-initials {
  font-family: t.$font-display;
  font-size: 3rem;
  @include m.gradient-text;
}

.about__location-card {
  display: flex;
  align-items: center;
  gap: t.$space-2;
  padding: t.$space-3 t.$space-4;
  font-size: 0.85rem;
  color: t.$color-muted;
}

.about__badges {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: t.$space-4;
}

.about__badge {
  display: inline-flex;
  transition: transform t.$duration-fast t.$ease-out, filter t.$duration-fast t.$ease-out;

  &:hover {
    transform: translateY(-3px);
    filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.45));
  }
}

.about__badge-img {
  width: 64px;
  height: 64px;
  object-fit: contain;
}

.about__paragraph {
  color: t.$color-muted;
  margin-bottom: t.$space-4;
  max-width: 68ch;
}

.about__stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: t.$space-5;
  margin-block: t.$space-6;
  padding-block: t.$space-5;
  border-block: 1px solid t.$color-border;

  @include m.respond(md) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.about__education-title {
  font-size: 1.1rem;
  margin-bottom: t.$space-4;
  color: t.$color-text;
}

.about__education-item {
  display: flex;
  flex-direction: column;
  gap: t.$space-1;
  margin-bottom: t.$space-4;

  @include m.respond(md) {
    flex-direction: row;
    gap: t.$space-5;
  }
}

.about__education-range {
  color: t.$color-gold-soft;
  font-size: 0.8rem;
  white-space: nowrap;
  padding-top: 0.2rem;
}

.about__education-degree {
  font-weight: 700;
  color: t.$color-text;
}

.about__education-org {
  color: t.$color-blue-soft;
  font-size: 0.9rem;
  font-weight: 600;
}

.about__education-copy {
  color: t.$color-muted;
  font-size: 0.925rem;
  max-width: 58ch;
}
</style>
