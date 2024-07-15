<template>
  <div ref="containerRef">
    <slot></slot>
    <Teleport v-if="showMenu" to="body">
      <div class="context-menu" :style="{ left: x + 'px', top: y + 'px' }">
        <div class="menu-list">
          <div v-for="(item, index) in menuList" :key="index" class="menu-item" @click="handleIemClick(item)">
            {{ item.label }}
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import useContextMenu from "./useContextMenu"
defineProps({
  menuList: {
    type: Array,
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
</script>
