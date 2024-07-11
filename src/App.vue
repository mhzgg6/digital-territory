<script setup lang="ts">
import { onMounted } from "vue"
import { getTheme, setTheme } from "@/utils/themeGlobalSetting"
import request from "@/api"

onMounted(() => {
  const theme = getTheme()
  setTheme(theme)
  console.log(request)
  request.get("/api/test").then((res) => {
    console.log(res)
  })
})
</script>

<template>
  <router-view></router-view>
</template>
