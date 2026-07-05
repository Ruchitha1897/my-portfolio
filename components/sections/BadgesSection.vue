<script setup lang="ts"></script>

<template lang="pug">
section#badges.section.badges
  div.container
    SectionHeading(
      eyebrow="Badges"
      title="Where else to find me"
      subtitle="Profiles I keep active for coding practice, problem solving and open-source work."
    )

    div.badges__grid
      a.badge-card(
        v-for="(badge, i) in badges"
        :key="badge.id"
        :href="badge.url"
        target="_blank"
        rel="noopener noreferrer"
        v-reveal="i"
      )
        GlassCard.badge-card__inner(accent="blue" interactive)
          span.badge-card__icon
            AppIcon(name="shield" :size="20")
          span.badge-card__name {{ badge.name }}
          span.badge-card__handle.mono {{ badge.handle }}
</template>

<style scoped lang="scss">
.badges__grid {
  display: grid;
  gap: t.$space-4;
  grid-template-columns: repeat(2, 1fr);

  @include m.respond(md) {
    grid-template-columns: repeat(3, 1fr);
  }

  @include m.respond(lg) {
    grid-template-columns: repeat(6, 1fr);
  }
}

.badge-card {
  display: block;
}

.badge-card__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: t.$space-2;
  padding: t.$space-5 t.$space-3;
  height: 100%;
}

.badge-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(62, 142, 247, 0.12);
  color: t.$color-blue-soft;
  margin-bottom: t.$space-1;
}

.badge-card__name {
  font-weight: 700;
  color: t.$color-text;
  font-size: 0.9rem;
}

.badge-card__handle {
  color: t.$color-muted-dim;
  font-size: 0.68rem;
  word-break: break-all;
}
</style>
