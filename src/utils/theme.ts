import { each } from "lodash"
import type { Theme, ThemeBase, ThemeMethods } from "@/types"
import themesConfig from "@/assets/styles/common"

// const THEME_STORAGE_KEY = "theme"
const bodyClass = document.body.classList
let styleEl: HTMLElement | null = null
// const defaultTheme = localStorage.getItem(THEME_STORAGE_KEY) || "red-theme"
const defaultTheme = "light-theme"
const theme: ThemeBase = {
  currentTheme: defaultTheme,
}

const initThemeVar = (theme: string) => {
  const currentThemeConfig = themesConfig[theme]
  const arr: string[] = []

  each(currentThemeConfig, (val, key) => {
    arr.push(`--t--${key}:${val};`)
  })
  return arr
}

const applyTheme = (themeName: string) => {
  const cssVars: string[] = initThemeVar(themeName)

  if (!styleEl) {
    styleEl = document.createElement("style")
    document.head.appendChild(styleEl)
  }
  styleEl.innerHTML = `:root{${cssVars.join("")}}`

  // 更新 body 类名
  document.body.classList.forEach((cls) => {
    if (cls.endsWith("-theme")) {
      bodyClass.remove(cls)
    }
  })
  bodyClass.add(themeName)
}

export const initTheme = () => {
  // 应用初始主题
  applyTheme(theme.currentTheme)
}

// 对外暴露方法合集
const exportMethods: ThemeMethods = {
  setTheme(this: Theme, themeName: string) {
    if (this.currentTheme === themeName) return
    this.currentTheme = themeName
    applyTheme(themeName)
  },
  getTheme(this: Theme): string {
    return this.currentTheme
  },
}

// 创建响应式主题对象
const createThemeProxy = (theme: ThemeBase) => {
  // 合并主题对象和方法
  const target: Theme = {
    ...theme,
    ...exportMethods,
  }
  return new Proxy(target, {
    get<K extends keyof Theme>(target: Theme, prop: K | symbol): Theme[K] | any {
      if (typeof prop === "symbol") {
        return Reflect.get(target, prop)
      }
      // 处理方法调用，确保 this 指向代理对象
      if (typeof target[prop] === "function") {
        return target[prop].bind(target)
      }
      return target[prop]
    },
    set(target: Theme, prop: string, value: any) {
      // 只允许修改已存在的属性
      if (!(prop in target)) {
        console.warn(`Cannot add new property '${String(prop)}' to theme object`)
        return false
      }

      // 当 currentTheme 改变时应用新主题
      const oldValue = target[prop as keyof Theme]
      target[prop as keyof Theme] = value
      console.log(target, prop, value, "更新主题")
      if (prop === "currentTheme" && oldValue !== value) {
        applyTheme(value)
      }
      return true
    },
    defineProperty() {
      console.warn("Cannot add new properties to theme object")
      return false
    },
    deleteProperty() {
      console.warn("Cannot delete properties from theme object")
      return false
    },
  })
}

const proxyTheme = createThemeProxy(theme)

export default proxyTheme
