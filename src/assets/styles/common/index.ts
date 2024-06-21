/**
 * 导出scss主题变量到js中
 */
import themes from "./index.module.scss"

type Themes = {
  [key: string]: object
}

const $themes: Themes = {}

for (const key in themes) {
  const keys = key.split("___")
  let temp: any = $themes
  for (let i = 0, l = keys.length; i < l; i++) {
    if (i == l - 1) {
      temp[keys[i]] = themes[key]
      continue
    }
    if (!temp[keys[i]]) {
      temp[keys[i]] = {}
    }
    temp = temp[keys[i]] as object
  }
}

export default $themes
