<script setup lang="ts">
import { ref } from "vue"
// import { getTheme, setTheme } from "@/utils/themeGlobalSetting"

// onMounted(() => {
//   const theme = getTheme()
//   setTheme(theme)
// })
const curName = ref("Wallpapersetting")
</script>

<template>
  <router-view></router-view>
  <component :is="curName"></component>
</template>
