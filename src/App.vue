<script setup lang="ts">
import { onMounted } from "vue"
import { getTheme, setTheme } from "@/utils/themeGlobalSetting"
import request from "@/api"

onMounted(() => {
  const theme = getTheme()
  setTheme(theme)
  request.get("/api/test").then(() => {})
})
</script>

<template>
  <router-view></router-view>
</template>
