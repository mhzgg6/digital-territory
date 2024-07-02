<template>
  <div class="diaital-header">
    <div class="diaital-header-warp">
      <div @click="handleToggleTheme">主题切换</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getTheme, toggleTheme } from "@/utils/themeGlobalSetting"

const handleToggleTheme = () => {
  const theme = getTheme()
  toggleTheme(theme, "blue-theme")
}
</script>
