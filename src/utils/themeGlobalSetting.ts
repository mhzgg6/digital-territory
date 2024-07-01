import { each } from "lodash"
import themesConfig from "@/assets/styles/common"

const bodyClass = document.body.classList
let styleEl: HTMLElement | null = null
export const getTheme = (): string => {
  const theme: string = localStorage.getItem("theme") || "red-theme"
  return theme
}
export const setThemeVar = (theme: string) => {
  const currentThemeConfig = themesConfig[theme]
  const arr: string[] = []
  if (!styleEl) {
    styleEl = document.createElement("style")
  }
  each(currentThemeConfig, (val, key) => {
    arr.push(`--t--${key}:${val};`)
  })

  bodyClass.add(theme)
  styleEl.innerHTML = `:root{${arr.join("")}}`
  document.head.appendChild(styleEl)
}
