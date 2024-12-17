<template>
  <div class="diaital-apps">
    <div class="diaital-apps-warp">
      <el-carousel :autoplay="false">
        <el-carousel-item v-for="(item, index) in tabs" :key="index" style="height: 100%">
          <VueDraggable
            ref="el"
            v-model="item.apps"
            :animation="300"
            target=".app-container"
            @start="onStart"
            @update="onUpdate"
          >
            <ul class="app-container">
              <li v-for="app in item.apps" :key="app.id" :class="'icon-size-' + app.size" class="app-item">
                <div class="app-item-icon" :style="{ backgroundColor: app.color }">
                  <img :src="app.icon" />
                </div>
                <div class="app-item-title">
                  {{ app.name }}
                </div>
              </li>
            </ul>
          </VueDraggable>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { type UseDraggableReturn, VueDraggable } from "vue-draggable-plus"

interface App {
  id: number
  name: string
  icon: string
  url: string
  size: string
  color: string
}

interface Tab {
  name: string
  apps: App[]
}

const getImg = (imgName: string): string => {
  return new URL(`/src/assets/icons/${imgName}.svg`, import.meta.url).href
}

const tabs = ref<Tab[]>([
  {
    name: "第一",
    apps: [
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
      {
        id: 2,
        name: "测试",
        icon: getImg("douyu"),
        url: "https://www.baidu.com",
        size: "2x2",
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
      {
        id: 2,
        name: "测试",
        icon: getImg("douyu"),
        url: "https://www.baidu.com",
        size: "2x2",
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
      {
        id: 2,
        name: "测试",
        icon: getImg("douyu"),
        url: "https://www.baidu.com",
        size: "2x2",
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
      {
        id: 2,
        name: "测试",
        icon: getImg("douyu"),
        url: "https://www.baidu.com",
        size: "2x2",
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
      {
        id: 2,
        name: "测试",
        icon: getImg("douyu"),
        url: "https://www.baidu.com",
        size: "2x2",
        color: "#fe6a2d",
      },
    ],
  },
  { name: "第二", apps: [] },
  { name: "第三", apps: [] },
])

const el = ref<UseDraggableReturn>()
// const testTabs = tabs.value.map((item) => {
//   return item
// })
const onStart = () => {
  console.log(tabs, "tabs")
}

const onUpdate = () => {
  console.log(tabs, "tabs")
}
</script>
