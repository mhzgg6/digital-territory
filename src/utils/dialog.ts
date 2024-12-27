import { createVNode, render, VNode, resolveComponent } from "vue"
import type { DialogOptions } from "@/types"
import BaseDialog from "@/components/dialogs/baseDialog.vue"

// 自动导入dialogs目录下的所有组件
const dialogComponents = import.meta.glob("@/components/dialogs/*.vue")

class DialogService {
  // private container: HTMLDivElement | null = null

  constructor() {
    // this.container = document.createElement("div")
    // document.body.appendChild(this.container)
  }

  open(options: DialogOptions) {
    const { title = "", width = "65%", height = "60%", content, btns = [], params = {}, modal = true } = options
    console.log(options, 'options');

    return new Promise<boolean>((resolve) => {
      const createDialog = async () => {
        let contentVNode = null

        if (typeof content === "string") {
          // 构建组件路径
          const componentPath = `/src/components/dialogs/${content}.vue`
          const loader = dialogComponents[componentPath]
          console.log(loader, 'loader');

          if (loader) {
            try {
              // 动态导入组件
              const component = (await loader()).default
              console.log(component, 'component');
              
              contentVNode = createVNode(component, params)
            } catch (error) {
              console.error(`Error loading component "${content}":`, error)
              contentVNode = createVNode("div", {}, "加载组件失败")
            }
          } else {
            console.error(`Component "${content}" not found`)
            contentVNode = createVNode("div", {}, "组件不存在")
          }
        } else if (content) {
          contentVNode = createVNode(content, params)
        }

        const vNode = createVNode(
          BaseDialog,
          {
            modelValue: true,
            title,
            width,
            height,
            modal,
            "onUpdate:modelValue": (val: boolean) => {
              if (!val) {
                this.close()
                resolve(false)
              }
            },
          },
          {
            default: () => contentVNode,
            footer: () =>
              btns.map((btn) =>
                createVNode(
                  "el-button",
                  {
                    type: btn.type || "primary",
                    onClick: async () => {
                      if (btn.handler) {
                        await btn.handler()
                      }
                      this.close()
                      resolve(true)
                    },
                  },
                  { default: () => btn.text },
                ),
              ),
          },
        )

        // if (this.container) {
        //   render(vNode, this.container)
        // }
        render(vNode, document.body)
      }

      createDialog()
    })
  }

  private close() {
    render(null, document.body)
  }
}

export const dialogService = new DialogService()
