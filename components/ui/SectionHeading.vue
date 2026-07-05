<script setup lang="ts">
interface Props {
  eyebrow: string
  title: string
  subtitle?: string
}

defineProps<Props>()
</script>

<template lang="pug">
div.section__head(v-reveal)
  span.eyebrow {{ eyebrow }}
  h2.section__title {{ title }}
  p.section__subtitle(v-if="subtitle") {{ subtitle }}
</template>
