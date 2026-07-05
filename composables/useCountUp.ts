// Animated count-up for the About statistics. Starts when the element
// scrolls into view, respects reduced motion, and uses rAF (no library).
export function useCountUp(target: Ref<HTMLElement | null>, end: number, durationMs = 1400) {
  const current = ref(0)

  onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      current.value = end
      return
    }

    const { stop } = useIntersectionObserver(
      target,
      ([entry]) => {
        if (!entry?.isIntersecting) return
        stop()

        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / durationMs, 1)
          // easeOutCubic — fast start, gentle landing.
          const eased = 1 - Math.pow(1 - progress, 3)
          current.value = Math.round(end * eased)
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
  })

  return { current }
}
