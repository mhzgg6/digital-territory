import { ConfigEnv, UserConfig, defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"

import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  // 获取.env文件里定义的环境变量
  const env = loadEnv(mode, process.cwd())
  return {
    base: env.VITE_PUBLIC_PATH, // 开发公共基础路径
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
        "#": path.resolve("./types"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/styles/common/index.scss";
          `,
        },
      },
    },
    server: {
      port: 8818, //端口 自定义
      host: "0.0.0.0",
      cors: true, // 默认启用并允许任何源
      //代理
      proxy: {},
    },
  }
})
