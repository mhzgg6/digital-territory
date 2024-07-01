<template>
  <div class="diaital-header">
    <div class="diaital-header-warp">
      <div @click="toggleTheme">主题切换</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { setThemeVar } from "@/utils/themeGlobalSetting"

const toggleTheme = () => {
  const theme = "blue-theme"
  setThemeVar(theme)
}
</script>
