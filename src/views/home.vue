<template>
  <div class="app-main">
    <Menu :menu-list="menuList" class="context-menu-container">
      <div class="app-main-container">
        <div class="diaital-avater" @click="openSetting">
          <img src="../assets/images/default_avater.png" alt="degault avater" />
        </div>
        <diaital-header :menu-list="menuList"></diaital-header>
        <diaital-date></diaital-date>
        <diaital-apps></diaital-apps>
      </div>
    </Menu>
  </div>

  <!-- <el-drawer v-model="drawer" :with-header="false" :modal="false" :direction="direction" :before-close="handleClose">
    <diaital-setting></diaital-setting>
  </el-drawer> -->
  <el-overlay v-show="drawer" overlay-class="overlay-warp" :z-index="999" :mask="true" @click="onModalClick">
    <diaital-setting></diaital-setting>
  </el-overlay>
</template>

<script setup lang="ts">
import { ref } from "vue"
import type { DrawerProps } from "element-plus"

interface MenuItem {
  label: string
  value: string
}

const menuList = ref<MenuItem[]>([
  { label: "设置", value: "setting" },
  { label: "壁纸", value: "img" },
])

const drawer = ref(false)
const direction = ref<DrawerProps["direction"]>("rtl")
const handleClose = () => {
  drawer.value = false
  console.log("close")
}
const openSetting = () => {
  drawer.value = true
  console.log("openSetting")
}

const onModalClick = () => {
  drawer.value = false
}
</script>
