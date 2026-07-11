import { defineStore } from 'pinia'

// The only global state the site needs: the mobile drawer.
export const useUiStore = defineStore('ui', () => {
  const drawerOpen = ref(false)

  function toggleDrawer() {
    drawerOpen.value = !drawerOpen.value
  }

  function closeDrawer() {
    drawerOpen.value = false
  }

  return { drawerOpen, toggleDrawer, closeDrawer }
})
