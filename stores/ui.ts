import { defineStore } from 'pinia'

// The only global state the site needs: the mobile drawer and which
// section is currently in view (drives the navbar highlight).
export const useUiStore = defineStore('ui', () => {
  const drawerOpen = ref(false)
  const activeSection = ref('hero')

  function toggleDrawer() {
    drawerOpen.value = !drawerOpen.value
  }

  function closeDrawer() {
    drawerOpen.value = false
  }

  function setActiveSection(id: string) {
    activeSection.value = id
  }

  return { drawerOpen, activeSection, toggleDrawer, closeDrawer, setActiveSection }
})
