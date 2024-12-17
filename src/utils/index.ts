//如果window对象存在则表示在客户端运行，否则使用node的global对象作为全局对象
// const global = window || global
const globalEnv: any = typeof window !== "undefined" ? window : global
const mhz = {
  test: "test",
}

globalEnv.mhz = mhz

export default mhz
