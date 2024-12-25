export interface ThemeBase {
  currentTheme: string
}

export interface ThemeMethods {
  setTheme(themeName: string): void
  getTheme(): string
}

// 合并为完整的主题接口
export type Theme = ThemeBase & ThemeMethods

// 从已有的接口/类型中提取出某个属性的类型
// export type currentTheme = Theme["currentTheme"]
