import { createVNode, render, VNode, defineAsyncComponent } from "vue"
import type { DialogOptions } from "@/types"
import BaseDialog from "@/components/dialogs/baseDialog.vue"

class DialogService {
  // private container: HTMLDivElement | null = null

  constructor() {
    // this.container = document.createElement("div")
    // document.body.appendChild(this.container)
  }

  open(options: DialogOptions) {
    const { title = "", width = "65%", height = "60%", content, btns = [], params = {} } = options
    console.log(options, 'options');

    return new Promise<boolean>((resolve) => {
      // 创建内容VNode
      let contentVNode: VNode | null = null
      // content 是字符串或组件名 解析组件
      if (typeof content === "string") {
        const AsyncComponent = defineAsyncComponent(() => import(`@/components/${content}.vue`))
        contentVNode = createVNode(AsyncComponent, params)
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
    })
  }

  private close() {
    render(null, document.body)
  }
}

export const dialogService = new DialogService()
