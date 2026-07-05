<script setup lang="ts">
import type { Stat } from '~/types'

const props = defineProps<{ stat: Stat }>()

const rootEl = ref<HTMLElement | null>(null)
const { current } = useCountUp(rootEl, props.stat.value)
</script>

<template lang="pug">
div.stat(ref="rootEl")
  span.stat__value.mono {{ current }}{{ stat.suffix ?? '' }}
  span.stat__label {{ stat.label }}
</template>

<style scoped lang="scss">
.stat {
  display: flex;
  flex-direction: column;
  gap: t.$space-1;
}

.stat__value {
  font-size: clamp(1.75rem, 1.4rem + 1.5vw, 2.4rem);
  font-weight: 600;
  color: t.$color-gold-soft;
  line-height: 1.1;
}

.stat__label {
  color: t.$color-muted;
  font-size: 0.85rem;
}
</style>
