import { ref, onMounted, onUnmounted } from "vue"

export default function useContextMenu(containerRef) {
  const showMenu = ref(false)
  const x = ref(0)
  const y = ref(0)

  const handleContextMenu = (e) => {
    e.preventDefault()
    e.stopPropagation()
    showMenu.value = true
    x.value = e.clientX
    y.value = e.clientY
  }

  onMounted(() => {
    const el = containerRef.value
    el.addEventListener("contextmenu", handleContextMenu)
  })

  onUnmounted(() => {
    const el = containerRef.value
    el.removeEventListener("contextmenu", handleContextMenu)
  })

  return {
    showMenu,
    x,
    y,
  }
}
