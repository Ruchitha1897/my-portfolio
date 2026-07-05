<script setup lang="ts">
const year = new Date().getFullYear()

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template lang="pug">
footer.footer
  div.container.footer__inner
    p.footer__copy © {{ year }} {{ profile.name }}. Built with Nuxt 3 &amp; TypeScript.

    div.footer__socials
      IconLink(
        v-for="link in socialLinks.filter((s) => s.icon !== 'location')"
        :key="link.id"
        :href="link.url"
        :icon="link.icon"
        :label="link.label"
      )

    button.footer__top(type="button" aria-label="Back to top" @click="scrollToTop")
      AppIcon(name="arrow-up" :size="16")
      span Top
</template>

<style scoped lang="scss">
.footer {
  border-top: 1px solid t.$color-border;
  padding-block: t.$space-6;
}

.footer__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: t.$space-4;
  text-align: center;

  @include m.respond(md) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

.footer__copy {
  color: t.$color-muted-dim;
  font-size: 0.85rem;
}

.footer__socials {
  display: flex;
  gap: t.$space-3;
}

.footer__top {
  display: inline-flex;
  align-items: center;
  gap: t.$space-2;
  background: none;
  border: 1px solid t.$color-border-strong;
  color: t.$color-muted;
  padding: t.$space-2 t.$space-4;
  border-radius: t.$radius-pill;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: color t.$duration-fast ease, border-color t.$duration-fast ease;

  &:hover {
    color: t.$color-gold-soft;
    border-color: t.$color-gold-dim;
  }
}
</style>
