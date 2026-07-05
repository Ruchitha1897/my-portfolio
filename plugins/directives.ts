// Two small motion directives used across the site:
//
//   v-reveal="index"  — fade-up on first scroll into view (GSAP
//                       ScrollTrigger); index staggers card grids.
//   v-magnetic        — element leans a few px toward the cursor.
//
// Registered universally so SSR knows the directives exist; all the
// actual work happens in `mounted`, which only runs on the client.

const reducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive<HTMLElement, number | undefined>('reveal', {
    getSSRProps: () => ({}),
    async mounted(el, binding) {
      if (reducedMotion()) return
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ])
      gsap.registerPlugin(ScrollTrigger)
      gsap.fromTo(
        el,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: (binding.value ?? 0) * 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        },
      )
    },
  })

  nuxtApp.vueApp.directive<HTMLElement>('magnetic', {
    getSSRProps: () => ({}),
    mounted(el) {
      if (reducedMotion()) return
      const strength = 10

      const onMove = (event: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
      }
      const onLeave = () => {
        el.style.transform = 'translate(0, 0)'
      }

      el.style.transition = 'transform 200ms cubic-bezier(0.16, 1, 0.3, 1)'
      el.addEventListener('mousemove', onMove)
      el.addEventListener('mouseleave', onLeave)
    },
  })
})
