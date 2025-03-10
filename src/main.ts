import { createApp } from "vue"
import { router } from "@/router"
import App from "./App.vue"
import VueDOMPurifyHTML from "vue-dompurify-html"
import "@/utils/index" // 引入全局变量

import "normalize.css/normalize.css"
import "@/assets/styles/pc/index.scss"

import * as ElementPlusIconsVue from "@element-plus/icons-vue" //引入图标
import "element-plus/dist/index.css" //引入样式

import Wallpapersetting from "@/components/settings/wallpaperSetting.vue"

// 初始化主题
import { initTheme } from "@/utils/theme"
initTheme()

const app = createApp(App)

// 全局注册组件（名称必须与使用时完全一致）
app.component("Wallpapersetting", Wallpapersetting)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router).use(VueDOMPurifyHTML).mount("#app")
