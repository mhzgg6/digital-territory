<script setup lang="ts">
import { onMounted } from "vue"
import { getTheme, setThemeVar } from "@/utils/themeGlobalSetting"

onMounted(() => {
  const theme = getTheme()
  setThemeVar(theme)
})
</script>

<template>
  <router-view></router-view>
</template>
