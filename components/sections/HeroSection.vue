<script setup lang="ts">
import { gsap } from 'gsap'

const heroEl = ref<HTMLElement | null>(null)
useMouseSpotlight(heroEl)

// Rotating role title under the name.
const roleIndex = ref(0)
let roleTimer: ReturnType<typeof setInterval> | undefined

// Lightweight "ember" particles — pure CSS animation; positions and
// timings are randomized once on the client (v-if guarded so SSR and
// hydration markup match).
interface Ember {
  left: string
  size: string
  delay: string
  duration: string
  hue: 'gold' | 'blue'
}
const embers = ref<Ember[]>([])
const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
  embers.value = Array.from({ length: 18 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    size: `${2 + Math.random() * 3}px`,
    delay: `${Math.random() * 12}s`,
    duration: `${9 + Math.random() * 10}s`,
    hue: i % 3 === 0 ? 'blue' : 'gold',
  }))

  roleTimer = setInterval(() => {
    roleIndex.value = (roleIndex.value + 1) % profile.roles.length
  }, 2600)

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap
      .timeline({ defaults: { ease: 'power3.out' } })
      .from('.js-hero-eyebrow', { opacity: 0, y: 16, duration: 0.6 })
      .from('.js-hero-name', { opacity: 0, y: 24, duration: 0.7 }, '-=0.35')
      .from('.js-hero-role', { opacity: 0, y: 16, duration: 0.6 }, '-=0.4')
      .from('.js-hero-copy', { opacity: 0, y: 16, duration: 0.6 }, '-=0.35')
      .from('.js-hero-cta', { opacity: 0, y: 16, duration: 0.6, stagger: 0.08 }, '-=0.3')
      .from('.js-hero-portrait', { opacity: 0, scale: 0.92, duration: 0.8 }, '-=0.8')
  }
})

onBeforeUnmount(() => clearInterval(roleTimer))
</script>

<template lang="pug">
section#hero.hero(ref="heroEl")
  div.hero__spotlight(aria-hidden="true")
  div.hero__embers(v-if="isMounted" aria-hidden="true")
    span.hero__ember(
      v-for="(ember, i) in embers"
      :key="i"
      :class="`hero__ember--${ember.hue}`"
      :style="{ left: ember.left, width: ember.size, height: ember.size, animationDelay: ember.delay, animationDuration: ember.duration }"
    )

  div.hero__grid.container
    div.hero__content
      span.eyebrow.js-hero-eyebrow Welcome to my portfolio
      h1.hero__name.js-hero-name
        | Hi, I'm&nbsp;
        span.gradient-text {{ profile.name }}

      div.hero__role.js-hero-role(aria-live="polite")
        Transition(name="role" mode="out-in")
          span.mono(:key="roleIndex") {{ profile.roles[roleIndex] }}

      p.hero__copy.js-hero-copy {{ profile.tagline }}

      div.hero__actions
        BaseButton.js-hero-cta(
          variant="primary" :href="profile.resumeFile" target="_blank" icon="download" magnetic
        ) Download Resume
        BaseButton.js-hero-cta(
          variant="secondary" href="#projects" icon="arrow-right" icon-position="right" magnetic
        ) View Projects
        BaseButton.js-hero-cta(variant="ghost" href="#contact") Contact Me

    div.hero__portrait.js-hero-portrait
      div.hero__portrait-ring
        img.hero__portrait-photo(src="/photo.jpeg" :alt="profile.name")

  a.hero__scroll-cue(href="#about" aria-label="Scroll to About section")
    span.hero__scroll-line
</template>

<style scoped lang="scss">
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding-top: t.$nav-height;
  overflow: hidden;
  --spot-x: 50%;
  --spot-y: 40%;
}

// Mouse spotlight — a torch held up to castle stone.
.hero__spotlight {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    500px circle at var(--spot-x) var(--spot-y),
    rgba(212, 175, 55, 0.14),
    transparent 60%
  );
}

.hero__embers {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.hero__ember {
  position: absolute;
  bottom: -8px;
  border-radius: 50%;
  opacity: 0;
  animation-name: rise;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.hero__ember--gold {
  background: t.$color-gold-soft;
  box-shadow: 0 0 8px rgba(212, 175, 55, 0.8);
}

.hero__ember--blue {
  background: t.$color-blue-soft;
  box-shadow: 0 0 8px rgba(62, 142, 247, 0.8);
}

@keyframes rise {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  8% {
    opacity: 0.7;
  }
  90% {
    opacity: 0.15;
  }
  100% {
    transform: translateY(-105vh);
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__ember {
    display: none;
  }
}

.hero__grid {
  position: relative;
  display: grid;
  gap: t.$space-8;
  align-items: center;
  padding-block: t.$space-8;

  @include m.respond(lg) {
    grid-template-columns: 1.15fr 0.85fr;
  }
}

.hero__content {
  order: 2;

  @include m.respond(lg) {
    order: 1;
  }
}

.hero__name {
  font-size: clamp(2.25rem, 1.7rem + 3vw, 3.75rem);
  margin-bottom: t.$space-3;
}

.hero__role {
  height: 1.9rem;
  font-weight: 600;
  font-size: 1.05rem;
  color: t.$color-blue-soft;
  margin-bottom: t.$space-5;
}

.role-enter-active,
.role-leave-active {
  transition: opacity t.$duration-base ease, transform t.$duration-base ease;
}

.role-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.role-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.hero__copy {
  max-width: 52ch;
  color: t.$color-muted;
  font-size: 1.0625rem;
  margin-bottom: t.$space-7;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: t.$space-3;
}

.hero__portrait {
  order: 1;
  display: flex;
  justify-content: center;

  @include m.respond(lg) {
    order: 2;
  }
}

.hero__portrait-ring {
  position: relative;
  width: clamp(200px, 34vw, 320px);
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: t.$color-bg-raised;
  border: 1px solid t.$color-border-strong;
  box-shadow: 0 0 0 1px rgba(212, 175, 55, 0.25), 0 0 80px -10px rgba(212, 175, 55, 0.25),
    0 0 120px -20px rgba(62, 142, 247, 0.25);

  &::before {
    content: '';
    position: absolute;
    inset: -10px;
    border-radius: 50%;
    border: 1px dashed t.$color-gold-dim;
    animation: spin 40s linear infinite;
    z-index: 1;
    pointer-events: none;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__portrait-ring::before {
    animation: none;
  }
}

.hero__portrait-photo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.hero__scroll-cue {
  position: absolute;
  left: 50%;
  bottom: t.$space-6;
  transform: translateX(-50%);
  display: none;

  @include m.respond(md) {
    display: block;
  }
}

.hero__scroll-line {
  display: block;
  width: 1px;
  height: 46px;
  background: linear-gradient(t.$color-gold, transparent);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: -46px;
    width: 100%;
    height: 46px;
    background: t.$color-gold-soft;
    animation: drip 2.2s ease-in-out infinite;
  }
}

@keyframes drip {
  to {
    top: 46px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__scroll-line::after {
    animation: none;
  }
}
</style>
