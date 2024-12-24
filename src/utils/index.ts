import type { Theme } from "@/types"
import theme from "./theme"

//如果window对象存在则表示在客户端运行，否则使用node的global对象作为全局对象
const globalEnv: any = typeof window !== "undefined" ? window : global

// 定义全局配置的类型
interface GlobalConfig {
  theme: Theme
  // 可以继续扩展其他全局属性
}

// 初始化默认配置
const _mhz: GlobalConfig = {
  theme,
}

// 创建代理对象，用于监听和拦截属性的修改
const mhz = new Proxy(_mhz, {
  get(target, prop) {
    return target[prop as keyof GlobalConfig]
  },
  set(target, prop, value) {
    target[prop as keyof GlobalConfig] = value
    // 这里可以添加属性变更后的回调，比如触发UI更新
    console.log(`Global config updated: ${String(prop)}`)
    return true
  },
})

globalEnv.mhz = mhz

export default mhz
