<script setup lang="ts">
// The site's signature: a small heraldic shield-sigil flanked by
// tapered hairlines, echoing the crest in the navbar and favicon.
// Used exactly once per section boundary so it stays a signature,
// not wallpaper.
</script>

<template lang="pug">
div.sigil-divider(aria-hidden="true")
  span.sigil-divider__line.sigil-divider__line--in
  svg.sigil-divider__mark(width="28" height="28" viewBox="0 0 28 28" fill="none")
    path(d="M14 3 L24 8 V16 C24 21 19.5 24.5 14 26 C8.5 24.5 4 21 4 16 V8 Z" stroke="currentColor" stroke-width="1.4")
    circle(cx="14" cy="14.5" r="2.2" fill="currentColor")
  span.sigil-divider__line.sigil-divider__line--out
</template>

<style scoped lang="scss">
.sigil-divider {
  display: flex;
  align-items: center;
  gap: t.$space-4;
  color: t.$color-gold;
  opacity: 0.75;
  max-width: 420px;
  margin-inline: auto;
}

.sigil-divider__line {
  flex: 1;
  height: 1px;
}

.sigil-divider__line--in {
  background: linear-gradient(90deg, transparent, currentColor);
}

.sigil-divider__line--out {
  background: linear-gradient(90deg, currentColor, transparent);
}
</style>
