<template>
  <div class="diaital-header">
    <div class="diaital-header-warp">
      <div @click="handleToggleTheme">主题切换</div>
      <div @click="handleRegister">注册</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import request from "@/api/index"
import { getTheme, toggleTheme } from "@/utils/themeGlobalSetting"

const handleToggleTheme = () => {
  const theme = getTheme()
  toggleTheme(theme, "blue-theme")
}
const handleRegister = () => {
  request.post("/api/register", { username: "mhz", password: "123456" }).then(() => {})
}
</script>
