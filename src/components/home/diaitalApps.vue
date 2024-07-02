<template>
  <div class="diaital-apps">
    <div class="diaital-apps-warp">
      <VueDraggable
        ref="el"
        v-model="appMenus"
        :animation="300"
        target=".app-container"
        @start="onStart"
        @update="onUpdate"
      >
        <ul class="app-container">
          <li v-for="item in appMenus" :key="item.id" :class="'icon-size-' + item.size" class="app-item">
            <div class="app-item-icon" :style="{ backgroundColor: item.color }">
              <img :src="item.icon" />
            </div>
            <div class="app-item-title">
              {{ item.name }}
            </div>
          </li>
        </ul>
      </VueDraggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { type UseDraggableReturn, VueDraggable } from "vue-draggable-plus"

interface AppMenu {
  id: number
  name: string
  icon: string
  url: string
  size: string
  color: string
}

const el = ref<UseDraggableReturn>()

const onStart = () => {}

const onUpdate = () => {}

const getImg = (imgName: string): string => {
  return new URL(`/src/assets/icons/${imgName}.svg`, import.meta.url).href
}

const appMenus = ref<AppMenu[]>([
  {
    id: 0,
    name: "微博",
    icon: getImg("weibo"),
    url: "https://www.baidu.com",
    size: "1x1",
    color: "#ffd850",
  },
  {
    id: 1,
    name: "抖音",
    icon: getImg("douyu"),
    url: "https://www.baidu.com",
    size: "1x1",
    color: "#fe6a2d",
  },
  {
    id: 2,
    name: "测试",
    icon: getImg("douyu"),
    url: "https://www.baidu.com",
    size: "2x2",
    color: "#fe6a2d",
  },
  // {
  //   name: "抖音",
  //   icon: getImg("douyu"),
  //   url: "https://www.baidu.com",
  //   size: "1x1",
  // },
  // {
  //   name: "微博",
  //   icon: getImg("weibo"),
  //   url: "https://www.baidu.com",
  //   size: "1x2",
  // },
  // {
  //   name: "微博",
  //   icon: getImg("weibo"),
  //   url: "https://www.baidu.com",
  //   size: "2x1",
  // },
  // {
  //   name: "微博",
  //   icon: getImg("weibo"),
  //   url: "https://www.baidu.com",
  //   size: "1x1",
  // },
  // {
  //   name: "微博",
  //   icon: getImg("weibo"),
  //   url: "https://www.baidu.com",
  //   size: "2x4",
  // },
  // {
  //   name: "微博",
  //   icon: getImg("weibo"),
  //   url: "https://www.baidu.com",
  //   size: "1x1",
  // },

  // {
  //   name: "微博",
  //   icon: getImg("weibo"),
  //   url: "https://www.baidu.com",
  //   size: "1x1",
  // },
  // {
  //   name: "抖音",
  //   icon: getImg("douyu"),
  //   url: "https://www.baidu.com",
  //   size: "1x1",
  // },
  // {
  //   name: "抖音",
  //   icon: getImg("douyu"),
  //   url: "https://www.baidu.com",
  //   size: "2x2",
  // },
  // {
  //   name: "抖音",
  //   icon: getImg("douyu"),
  //   url: "https://www.baidu.com",
  //   size: "1x1",
  // },
  // {
  //   name: "微博",
  //   icon: getImg("weibo"),
  //   url: "https://www.baidu.com",
  //   size: "1x2",
  // },
  // {
  //   name: "微博",
  //   icon: getImg("weibo"),
  //   url: "https://www.baidu.com",
  //   size: "2x1",
  // },
  // {
  //   name: "微博",
  //   icon: getImg("weibo"),
  //   url: "https://www.baidu.com",
  //   size: "1x1",
  // },
  // {
  //   name: "微博",
  //   icon: getImg("weibo"),
  //   url: "https://www.baidu.com",
  //   size: "2x4",
  // },
  // {
  //   name: "微博",
  //   icon: getImg("weibo"),
  //   url: "https://www.baidu.com",
  //   size: "1x1",
  // },
])
</script>
