<script setup lang="ts">
import type { Accent } from '~/types'

interface Props {
  accent?: Accent | 'none'
  interactive?: boolean
}

withDefaults(defineProps<Props>(), { accent: 'none', interactive: false })
</script>

<template lang="pug">
div.glass-card(:class="[`glass-card--${accent}`, { 'glass-card--interactive': interactive }]")
  slot
</template>

<style scoped lang="scss">
.glass-card {
  @include m.glass;
  border-radius: t.$radius-lg;
  padding: t.$space-6;
  position: relative;
  transition: transform t.$duration-base t.$ease-out, box-shadow t.$duration-base t.$ease-out,
    border-color t.$duration-base t.$ease-out;
}

.glass-card--interactive:hover {
  transform: translateY(-6px);
}

.glass-card--gold.glass-card--interactive:hover {
  border-color: t.$color-gold-dim;
  box-shadow: t.$shadow-gold;
}

.glass-card--blue.glass-card--interactive:hover,
.glass-card--silver.glass-card--interactive:hover {
  border-color: t.$color-blue-dim;
  box-shadow: t.$shadow-blue;
}

.glass-card--emerald.glass-card--interactive:hover {
  border-color: rgba(47, 217, 138, 0.35);
  box-shadow: 0 0 0 1px rgba(47, 217, 138, 0.3), 0 12px 40px -12px rgba(47, 217, 138, 0.3);
}
</style>
