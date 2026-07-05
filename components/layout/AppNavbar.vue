<script setup lang="ts">
const ui = useUiStore()
const { y } = useWindowScroll()
const isScrolled = computed(() => y.value > 24)

useActiveSection(navLinks.map((link) => link.href.replace('#', '')))

const githubSocial = socialLinks.find((link) => link.icon === 'github')
</script>

<template lang="pug">
header.navbar(:class="{ 'navbar--shrunk': isScrolled }")
  div.navbar__inner.container
    a.navbar__brand(href="#hero" @click="ui.closeDrawer()")
      svg.navbar__crest(width="30" height="30" viewBox="0 0 28 28" fill="none" aria-hidden="true")
        path(d="M14 3 L24 8 V16 C24 21 19.5 24.5 14 26 C8.5 24.5 4 21 4 16 V8 Z" stroke="currentColor" stroke-width="1.6")
        circle(cx="14" cy="14.5" r="2.2" fill="currentColor")
      span {{ profile.name }}

    nav.navbar__links(aria-label="Primary")
      a.navbar__link(
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        :class="{ 'navbar__link--active': ui.activeSection === link.href.replace('#', '') }"
      ) {{ link.label }}

    div.navbar__actions
      a.navbar__github(
        v-if="githubSocial"
        :href="githubSocial.url"
        target="_blank"
        rel="noopener noreferrer"
      )
        AppIcon(name="github" :size="18")
        span GitHub
      button.navbar__toggle(
        type="button"
        :aria-expanded="ui.drawerOpen"
        aria-label="Toggle navigation menu"
        @click="ui.toggleDrawer()"
      )
        AppIcon(:name="ui.drawerOpen ? 'close' : 'menu'" :size="22")

  //- Vuetify drawer for mobile — themed to match the glass surfaces.
  v-navigation-drawer.navbar__drawer(
    v-model="ui.drawerOpen"
    temporary
    location="right"
    width="290"
  )
    nav.navbar__drawer-nav(aria-label="Mobile")
      a.navbar__drawer-link(
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        @click="ui.closeDrawer()"
      ) {{ link.label }}
      a.navbar__drawer-link(
        v-if="githubSocial"
        :href="githubSocial.url"
        target="_blank"
        rel="noopener noreferrer"
      ) GitHub ↗
</template>

<style scoped lang="scss">
.navbar {
  position: fixed;
  inset-inline: 0;
  top: 0;
  z-index: 100;
  background: rgba(11, 17, 32, 0.5);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid transparent;
  transition: border-color t.$duration-base ease, background t.$duration-base ease;
}

.navbar--shrunk {
  background: rgba(11, 17, 32, 0.85);
  border-bottom-color: t.$color-border;
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: t.$nav-height;
  transition: height t.$duration-base ease;
}

.navbar--shrunk .navbar__inner {
  height: t.$nav-height-shrunk;
}

.navbar__brand {
  display: inline-flex;
  align-items: center;
  gap: t.$space-2;
  font-family: t.$font-display;
  font-weight: 600;
  font-size: 1.05rem;
  color: t.$color-text;
  white-space: nowrap;
}

.navbar__crest {
  color: t.$color-gold;
  flex-shrink: 0;
}

.navbar__links {
  display: none;
  align-items: center;
  gap: t.$space-5;

  @include m.respond(lg) {
    display: flex;
  }
}

.navbar__link {
  position: relative;
  font-size: 0.9rem;
  font-weight: 600;
  color: t.$color-muted;
  padding-block: t.$space-2;
  transition: color t.$duration-fast ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 100%;
    bottom: 0;
    height: 2px;
    background: t.$color-gold;
    transition: right t.$duration-base t.$ease-out;
  }

  &:hover {
    color: t.$color-text;
  }
}

.navbar__link--active {
  color: t.$color-gold-soft;

  &::after {
    right: 0;
  }
}

.navbar__actions {
  display: flex;
  align-items: center;
  gap: t.$space-4;
}

.navbar__github {
  display: none;
  align-items: center;
  gap: t.$space-2;
  font-size: 0.85rem;
  font-weight: 700;
  padding: t.$space-2 t.$space-4;
  border-radius: t.$radius-pill;
  border: 1px solid t.$color-border-strong;
  color: t.$color-text;
  transition: border-color t.$duration-fast ease, box-shadow t.$duration-fast ease;

  &:hover {
    border-color: t.$color-gold-dim;
    box-shadow: t.$shadow-gold;
  }

  @include m.respond(md) {
    display: inline-flex;
  }
}

.navbar__toggle {
  display: inline-flex;
  background: none;
  border: none;
  color: t.$color-text;
  padding: t.$space-2;
  cursor: pointer;

  @include m.respond(lg) {
    display: none;
  }
}

.navbar__drawer {
  :deep(.v-navigation-drawer__content) {
    background: t.$color-bg-raised;
    border-left: 1px solid t.$color-border;
  }
}

.navbar__drawer-nav {
  display: flex;
  flex-direction: column;
  padding: t.$space-6 t.$space-5;
}

.navbar__drawer-link {
  padding: t.$space-3 0;
  font-weight: 600;
  color: t.$color-text;
  border-bottom: 1px solid t.$color-border;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: t.$color-gold-soft;
  }
}
</style>
