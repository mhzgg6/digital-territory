import { each } from "lodash"
import themesConfig from "@/assets/styles/common"
export const getTheme = (): string => {
  const theme: string = localStorage.getItem("theme") || "red-theme"
  return theme
}
export const setThemeVar = () => {
  const styleEl: HTMLElement = document.createElement("style")
  const theme: string = getTheme()
  const currentThemeConfig = themesConfig[theme]
  const arr: string[] = []

  each(currentThemeConfig, (val, key) => {
    arr.push(`--t--${key}:${val};`)
  })
  styleEl.innerHTML = `:root{${arr.join("")}}`
  document.head.appendChild(styleEl)
}
