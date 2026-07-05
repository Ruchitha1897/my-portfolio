<script setup lang="ts">
import type { SkillItem } from '~/types'

const props = defineProps<{ skill: SkillItem }>()

const trackEl = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  const { stop } = useIntersectionObserver(
    trackEl,
    ([entry]) => {
      if (entry?.isIntersecting) {
        isVisible.value = true
        stop()
      }
    },
    { threshold: 0.4 },
  )
})
</script>

<template lang="pug">
div.skill-meter
  div.skill-meter__row
    span.skill-meter__name {{ skill.name }}
    span.skill-meter__level.mono {{ skill.level }}%
  div.skill-meter__track(ref="trackEl")
    div.skill-meter__fill(:style="{ width: isVisible ? `${props.skill.level}%` : '0%' }")
</template>

<style scoped lang="scss">
.skill-meter__row {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  margin-bottom: t.$space-2;
}

.skill-meter__name {
  color: t.$color-text;
  font-weight: 600;
}

.skill-meter__level {
  color: t.$color-muted;
  font-size: 0.75rem;
}

.skill-meter__track {
  height: 6px;
  border-radius: t.$radius-pill;
  background: t.$color-surface-strong;
  overflow: hidden;
}

.skill-meter__fill {
  height: 100%;
  border-radius: t.$radius-pill;
  background: linear-gradient(90deg, t.$color-gold, t.$color-blue-soft);
  transition: width 1s t.$ease-out;
}
</style>
