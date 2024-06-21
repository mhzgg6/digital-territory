<script setup lang="ts">
import { onMounted } from "vue"
import { setThemeVar } from "@/utils/themeGlobalSetting"

onMounted(() => {
  setThemeVar()
})
</script>

<template>
  <router-view></router-view>
</template>
