// Watches the page's sections and keeps the UI store's activeSection
// in sync, so the navbar can highlight the link for whatever the
// visitor is currently reading.
export function useActiveSection(sectionIds: string[]) {
  const ui = useUiStore()

  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) ui.setActiveSection(visible.target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    onBeforeUnmount(() => observer.disconnect())
  })
}
