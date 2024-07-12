<script setup lang="ts">
import { onMounted, onUnmounted } from "vue"
import { getTheme, setTheme } from "@/utils/themeGlobalSetting"
// import Menu from "@/components/menu/menu"
import request from "@/api"

onMounted(() => {
  const theme = getTheme()
  setTheme(theme)
  // 禁止右键
  document.addEventListener("contextmenu", handleRightClick)
  request.get("/api/test").then(() => {})
})

onUnmounted(() => {
  document.removeEventListener("contextmenu", handleRightClick)
})

const handleRightClick = (e: MouseEvent) => {
  // 阻止默认鼠标右键事件
  e.preventDefault()
}
</script>

<template>
  <router-view></router-view>
  <!-- <Menu></Menu> -->
</template>
