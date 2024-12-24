export interface Theme {
  currentTheme: string
}

// 从已有的接口/类型中提取出某个属性的类型
export type currentTheme = Theme["currentTheme"]
