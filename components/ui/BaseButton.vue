<script setup lang="ts">
import type { IconName } from '~/types'

interface Props {
  variant?: 'primary' | 'secondary' | 'ghost'
  href?: string
  type?: 'button' | 'submit'
  icon?: IconName
  iconPosition?: 'left' | 'right'
  target?: string
  magnetic?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  type: 'button',
  iconPosition: 'left',
  magnetic: false,
})

const tag = computed(() => (props.href ? 'a' : 'button'))
const rel = computed(() => (props.target === '_blank' ? 'noopener noreferrer' : undefined))
</script>

<template lang="pug">
component(
  :is="tag"
  v-magnetic="magnetic || undefined"
  class="btn"
  :class="`btn--${variant}`"
  :href="href"
  :target="target"
  :rel="rel"
  :type="!href ? type : undefined"
)
  AppIcon(v-if="icon && iconPosition === 'left'" :name="icon" :size="18")
  span
    slot
  AppIcon(v-if="icon && iconPosition === 'right'" :name="icon" :size="18")
</template>

<style scoped lang="scss">
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: t.$space-2;
  padding: 0.85rem 1.5rem;
  border-radius: t.$radius-pill;
  font-family: t.$font-body;
  font-weight: 700;
  font-size: 0.9375rem;
  border: 1px solid transparent;
  cursor: pointer;
  white-space: nowrap;
  transition: box-shadow t.$duration-fast t.$ease-out, border-color t.$duration-fast t.$ease-out,
    background t.$duration-fast t.$ease-out, color t.$duration-fast t.$ease-out;
}

.btn--primary {
  background: linear-gradient(120deg, t.$color-gold-soft, t.$color-gold 70%);
  color: t.$color-bg-deep;

  &:hover {
    box-shadow: t.$shadow-gold;
  }
}

.btn--secondary {
  background: t.$color-surface;
  border-color: t.$color-border-strong;
  color: t.$color-text;

  &:hover {
    border-color: t.$color-gold-dim;
    box-shadow: t.$shadow-gold;
  }
}

.btn--ghost {
  background: transparent;
  color: t.$color-muted;
  padding-inline: t.$space-3;

  &:hover {
    color: t.$color-gold-soft;
  }
}
</style>
