import { each } from "lodash"
import themesConfig from "@/assets/styles/common"

const bodyClass = document.body.classList
let styleEl: HTMLElement | null = null
const initThemeVar = (theme: string) => {
  const currentThemeConfig = themesConfig[theme]
  const arr: string[] = []

  each(currentThemeConfig, (val, key) => {
    arr.push(`--t--${key}:${val};`)
  })
  return arr
}
export const getTheme = (): string => {
  const theme: string = localStorage.getItem("theme") || "red-theme"
  return theme
}
export const setTheme = (theme: string) => {
  const arr: string[] = initThemeVar(theme)

  styleEl = document.createElement("style")
  bodyClass.add(theme)
  styleEl.innerHTML = `:root{${arr.join("")}}`
  document.head.appendChild(styleEl)
}

export const toggleTheme = (to: string, from: string) => {
  if (to === from) return

  const arr: string[] = initThemeVar(from)
  if (!styleEl) {
    styleEl = document.createElement("style")
    document.head.appendChild(styleEl)
  }
  styleEl.innerHTML = `:root{${arr.join("")}}`
  bodyClass.remove(to)
  bodyClass.add(from)
}
