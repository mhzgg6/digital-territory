import { each } from "lodash"
import type { Theme } from "@/types"
import themesConfig from "@/assets/styles/common"

const THEME_STORAGE_KEY = "theme"
const bodyClass = document.body.classList
let styleEl: HTMLElement | null = null

const theme: Theme = {
  currentTheme: "red-theme",
}

const initThemeVar = (theme: string) => {
  const currentThemeConfig = themesConfig[theme]
  const arr: string[] = []

  each(currentThemeConfig, (val, key) => {
    arr.push(`--t--${key}:${val};`)
  })
  return arr
}

export default theme
