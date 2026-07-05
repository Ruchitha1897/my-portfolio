// Writes the pointer position into --spot-x / --spot-y CSS variables on
// the target element; the hero's spotlight gradient reads them. Pure
// CSS handles the rendering, so this costs almost nothing.
export function useMouseSpotlight(target: Ref<HTMLElement | null>) {
  useEventListener(target, 'pointermove', (event: PointerEvent) => {
    const el = target.value
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--spot-x', `${((event.clientX - rect.left) / rect.width) * 100}%`)
    el.style.setProperty('--spot-y', `${((event.clientY - rect.top) / rect.height) * 100}%`)
  })
}
