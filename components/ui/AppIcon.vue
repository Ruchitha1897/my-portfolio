<script setup lang="ts">
import type { IconName } from '~/types'

// One hand-drawn line icon set (single stroke weight, no brand marks)
// stored as inner-SVG strings. Static, author-controlled markup only.
interface Props {
  name: IconName
  size?: number
}

const props = withDefaults(defineProps<Props>(), { size: 20 })

const icons: Record<IconName, string> = {
  github:
    '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.4c0-.9.3-1.5.7-1.8-2.5-.3-5.2-1.3-5.2-5.6 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 1.1a10 10 0 0 1 5.4 0c2.1-1.4 3-1.1 3-1.1.6 1.6.2 2.8.1 3.1.7.8 1.1 1.8 1.1 3 0 4.3-2.7 5.3-5.2 5.6.4.4.8 1.1.8 2.2V21"/>',
  linkedin:
    '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10.5V17M8 7.5v.01M12.5 17v-4a2 2 0 0 1 4 0v4M12.5 10.5V17"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/>',
  location:
    '<path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/>',
  download:
    '<path d="M12 3v12m0 0 4.5-4.5M12 15 7.5 10.5"/><path d="M4.5 17v2A2.5 2.5 0 0 0 7 21.5h10a2.5 2.5 0 0 0 2.5-2.5v-2"/>',
  external: '<path d="M9 6h9v9M17.5 6.5 7 17"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="m5 5 14 14M19 5 5 19"/>',
  'arrow-up': '<path d="M12 19V5m0 0-6 6m6-6 6 6"/>',
  'arrow-right': '<path d="M4 12h16m0 0-6-6m6 6-6 6"/>',
  send: '<path d="m3 11 18-8-8 18-2.5-7.5L3 11Z"/>',
  code: '<path d="m9 8-4 4 4 4M15 8l4 4-4 4"/>',
  stack: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/>',
  cloud:
    '<path d="M7 18a4.5 4.5 0 0 1-.5-8.97A5.5 5.5 0 0 1 17.3 8.05 4 4 0 0 1 17 16H7Z"/>',
  database:
    '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"/>',
  tools:
    '<path d="M14.5 6.5a4 4 0 0 0-5.6 4.7L4 16.1a2 2 0 1 0 2.8 2.8l4.9-4.9a4 4 0 0 0 4.7-5.6l-2.6 2.6-2.2-.6-.6-2.2 2.5-2.7Z"/>',
  medal:
    '<circle cx="12" cy="14.5" r="5.5"/><path d="M9 4h6l-1.6 6.3M9 4l1.6 6.3M9 4 6 9.5m9-5.5 3 5.5"/>',
  shield:
    '<path d="M12 3.5 19 6v5.5c0 5-3 8-7 9.5-4-1.5-7-4.5-7-9.5V6l7-2.5Z"/><path d="m9 12 2 2 4-4"/>',
  check: '<path d="m5 13 4 4 10-10"/>',
  star: '<path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9L12 3.5Z"/>',
  fork: '<circle cx="6" cy="5" r="2.2"/><circle cx="18" cy="5" r="2.2"/><circle cx="12" cy="19" r="2.2"/><path d="M6 7.2V9a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V7.2M12 12v4.8"/>',
}
</script>

<template lang="pug">
svg(
  :width="props.size"
  :height="props.size"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
  focusable="false"
  v-html="icons[props.name]"
)
</template>
