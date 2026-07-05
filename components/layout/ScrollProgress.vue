<script setup lang="ts">
// Thin gold progress bar pinned to the very top of the viewport,
// showing how far down the page the visitor has scrolled.
const { y } = useWindowScroll()
const progress = ref(0)

function update() {
  const max = document.documentElement.scrollHeight - window.innerHeight
  progress.value = max > 0 ? Math.min(y.value / max, 1) : 0
}

watch(y, update)
onMounted(update)
useEventListener('resize', update)
</script>

<template lang="pug">
div.scroll-progress(aria-hidden="true")
  div.scroll-progress__bar(:style="{ transform: `scaleX(${progress})` }")
</template>

<style scoped lang="scss">
.scroll-progress {
  position: fixed;
  inset-inline: 0;
  top: 0;
  height: 2px;
  z-index: 200;
  background: transparent;
  pointer-events: none;
}

.scroll-progress__bar {
  height: 100%;
  transform-origin: left;
  background: linear-gradient(90deg, t.$color-gold, t.$color-blue-soft);
  transition: transform 80ms linear;
}
</style>
