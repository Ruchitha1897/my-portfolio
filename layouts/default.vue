<script setup lang="ts">
// Global chrome: scroll progress, navbar, footer. Vuetify's v-app is
// required for the mobile navigation drawer's layout system.
</script>

<template lang="pug">
v-app
  a.skip-link(href="#main-content") Skip to content
  ScrollProgress
  AppNavbar
  v-main
    main#main-content
      slot
  AppFooter
</template>

<style scoped lang="scss">
// Vuetify paints its own theme background over the body; make it
// transparent so our cinematic gradient backdrop shows through.
:deep(.v-application) {
  background: transparent !important;
}

.skip-link {
  position: absolute;
  left: t.$space-4;
  top: -60px;
  background: t.$color-gold;
  color: t.$color-bg-deep;
  font-weight: 700;
  padding: t.$space-2 t.$space-4;
  border-radius: t.$radius-sm;
  z-index: 1000;
  transition: top t.$duration-base ease;

  &:focus-visible {
    top: t.$space-4;
  }
}
</style>
