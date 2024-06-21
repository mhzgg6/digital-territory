<template>
  <div class="diaital-apps">
    <div class="diaital-apps-warp">
      <ul class="app-container">
        <li v-for="(item, index) in appMenus" :key="index" :class="'icon-size-' + item.size" class="app-item">
          <div class="app-item-icon" :style="{ backgroundColor: item.color }">
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
  size: string
  color: string
}

const getImg = (imgName: string): string => {
  return new URL(`/src/assets/icons/${imgName}.svg`, import.meta.url).href
}

const appMenus: AppMenu[] = reactive([
  {
    name: "微博",
    icon: getImg("weibo"),
    url: "https://www.baidu.com",
    size: "1x1",
    color: "#ffd850",
  },
  {
    name: "抖音",
    icon: getImg("douyu"),
    url: "https://www.baidu.com",
    size: "1x1",
    color: "#fe6a2d",
  },
  {
    name: "抖音",
    icon: getImg("douyu"),
    url: "https://www.baidu.com",
    size: "2x2",
  },
  {
    name: "抖音",
    icon: getImg("douyu"),
    url: "https://www.baidu.com",
    size: "1x1",
  },
  {
    name: "微博",
    icon: getImg("weibo"),
    url: "https://www.baidu.com",
    size: "1x2",
  },
  {
    name: "微博",
    icon: getImg("weibo"),
    url: "https://www.baidu.com",
    size: "2x1",
  },
  {
    name: "微博",
    icon: getImg("weibo"),
    url: "https://www.baidu.com",
    size: "1x1",
  },
  {
    name: "微博",
    icon: getImg("weibo"),
    url: "https://www.baidu.com",
    size: "2x4",
  },
  {
    name: "微博",
    icon: getImg("weibo"),
    url: "https://www.baidu.com",
    size: "1x1",
  },

  {
    name: "微博",
    icon: getImg("weibo"),
    url: "https://www.baidu.com",
    size: "1x1",
  },
  {
    name: "抖音",
    icon: getImg("douyu"),
    url: "https://www.baidu.com",
    size: "1x1",
  },
  {
    name: "抖音",
    icon: getImg("douyu"),
    url: "https://www.baidu.com",
    size: "2x2",
  },
  {
    name: "抖音",
    icon: getImg("douyu"),
    url: "https://www.baidu.com",
    size: "1x1",
  },
  {
    name: "微博",
    icon: getImg("weibo"),
    url: "https://www.baidu.com",
    size: "1x2",
  },
  {
    name: "微博",
    icon: getImg("weibo"),
    url: "https://www.baidu.com",
    size: "2x1",
  },
  {
    name: "微博",
    icon: getImg("weibo"),
    url: "https://www.baidu.com",
    size: "1x1",
  },
  {
    name: "微博",
    icon: getImg("weibo"),
    url: "https://www.baidu.com",
    size: "2x4",
  },
  {
    name: "微博",
    icon: getImg("weibo"),
    url: "https://www.baidu.com",
    size: "1x1",
  },
])
</script>
