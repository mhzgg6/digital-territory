<template>
  <div ref="containerRef">
    <slot></slot>
    <Teleport to="body">
      <Transition @before-enter="handleBeforeEnter" @enter="handleEnter" @after-enter="handleAfterEnter">
        <div v-if="showMenu" ref="contextMenu" class="context-menu" :style="{ left: x + 'px', top: y + 'px' }">
          <div class="menu-list">
            <div v-for="(item, index) in menuList" :key="index" class="menu-item" @click="handleIemClick(item)">
              {{ item.label }}
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType } from "vue"
import useContextMenu from "./useContextMenu"

interface MenuItem {
  label: string
  value: string
}

defineProps({
  menuList: {
    type: Array as PropType<MenuItem[]>,
    default: () => [],
  },
})

const emit = defineEmits(["select"])

const containerRef = ref(null)
const { x, y, showMenu } = useContextMenu(containerRef)

const handleIemClick = (item) => {
  showMenu.value = false
  emit("select", item)
}

function handleBeforeEnter(el: HTMLElement) {
  el.style.height = 0 + "px"
}

function handleEnter(el: HTMLElement) {
  el.style.height = "auto"
  const h = el.clientHeight
  el.style.height = 0 + "px"
  requestAnimationFrame(() => {
    el.style.height = h + "px"
    el.style.transition = ".5s"
  })
}

function handleAfterEnter(el: HTMLElement) {
  el.style.transition = "none"
}
</script>
