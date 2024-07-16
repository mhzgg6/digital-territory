<template>
  <div class="app-main">
    <Menu :menu-list="menuList" class="context-menu-container">
      <div class="app-main-container">
        <diaital-header :menu-list="menuList"></diaital-header>
        <diaital-date></diaital-date>
        <diaital-apps></diaital-apps>
      </div>
    </Menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

interface MenuItem {
  label: string
  value: string
}

const menuList = ref<MenuItem[]>([
  { label: "设置", value: "setting" },
  { label: "壁纸", value: "img" },
])
</script>
