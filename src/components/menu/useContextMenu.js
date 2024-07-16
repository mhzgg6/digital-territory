import { ref, onMounted, onUnmounted } from "vue"

export default function useContextMenu(containerRef) {
  const showMenu = ref(false)
  const x = ref(0)
  const y = ref(0)

  const handleContextMenu = (e) => {
    console.log(e.clientX, 'x')
    console.log(e.clientY, 'clientY')
    console.log(e.offsetWidth, 'clientY')
    console.log(e)
    e.preventDefault()
    e.stopPropagation()
    showMenu.value = true
    const menuEl = document.querySelector(".context-menu")
    console.log(menuEl)
    x.value = e.clientX
    y.value = e.clientY
  }

  function closeMenu() {
    showMenu.value = false
  }

  onMounted(() => {
    const el = containerRef.value
    el.addEventListener("contextmenu", handleContextMenu)
    window.addEventListener("click", closeMenu, true)
    window.addEventListener("contextmenu", closeMenu, true)
  })

  onUnmounted(() => {
    const el = containerRef.value
    el.removeEventListener("contextmenu", handleContextMenu)
    window.removeEventListener("click", closeMenu, true)
    window.removeEventListener("contextmenu", closeMenu, true)
  })

  return {
    showMenu,
    x,
    y,
  }
}
