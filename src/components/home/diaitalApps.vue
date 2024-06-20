<template>
  <div class="diaital-apps">
    <div class="diaital-apps-warp">
      <ul class="app-container">
        <li v-for="(item, index) in appMenus" :key="index" class="app-item">
          <div class="app-item-icon">
            <img :src="item.icon" />
          </div>
          <div class="app-item-title">
            {{ item.name }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"

type AppMenu = {
  name: string
  icon: string
  url: string
}

const getImg = (imgName: string): string => {
  return new URL(`/src/assets/icons/${imgName}.svg`, import.meta.url).href
}

const appMenus: AppMenu[] = reactive([
  {
    name: "微博",
    icon: getImg("weibo"),
    url: "https://www.baidu.com",
  },
  {
    name: "抖音",
    icon: getImg("douyin"),
    url: "https://www.baidu.com",
  },
])
</script>
