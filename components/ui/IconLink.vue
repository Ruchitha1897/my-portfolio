<script setup lang="ts">
import type { IconName } from '~/types'

interface Props {
  href: string
  icon: IconName
  label: string
}

const props = defineProps<Props>()
const isExternal = computed(() => props.href.startsWith('http'))
</script>

<template lang="pug">
a.icon-link(
  :href="href"
  :target="isExternal ? '_blank' : undefined"
  :rel="isExternal ? 'noopener noreferrer' : undefined"
  :aria-label="label"
  :title="label"
)
  AppIcon(:name="icon" :size="18")
</template>

<style scoped lang="scss">
.icon-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid t.$color-border-strong;
  background: t.$color-surface;
  color: t.$color-muted;
  transition: color t.$duration-fast t.$ease-out, border-color t.$duration-fast t.$ease-out,
    box-shadow t.$duration-fast t.$ease-out, transform t.$duration-fast t.$ease-out;

  &:hover {
    color: t.$color-gold-soft;
    border-color: t.$color-gold-dim;
    box-shadow: t.$shadow-gold;
    transform: translateY(-2px);
  }
}
</style>
