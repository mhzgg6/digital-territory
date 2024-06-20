<template>
  <div class="diaital-apps">
    <div class="diaital-apps-warp">
      <ul class="app-container">
        <li v-for="(item, index) in appMenus" :key="index">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

type AppMenu = {
  name: string
  icon: string
  url: string
}

const appMenus: AppMenu = ref([
  {
    name: "微信",
    icon: "wechat",
    url: "https://www.baidu.com",
  },
  {
    name: "QQ",
    icon: "qq",
    url: "https://www.baidu.com",
  },
  {
    name: "百度",
    icon: "baidu",
    url: "https://www.baidu.com",
  },
])
</script>
