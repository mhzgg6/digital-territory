import { createVNode, render, VNode, type App } from "vue"
import type { DialogOptions } from "@/types"
import BaseDialog from "@/components/dialogs/baseDialog.vue"

class DialogService {
  private instance: VNode | null = null
  private container: HTMLElement | null = null
  private appContext: App | null = null

  init(app: App) {
    this.appContext = app._context
  }

  open(options: DialogOptions): Promise<boolean> {
    this.destroy()

    return new Promise((resolve) => {
      this.container = document.createElement("div")
      document.body.appendChild(this.container)

      // 创建弹框vNode
      this.instance = createVNode(BaseDialog, {
        ...options,
        visible: true,
        onClose: (result: boolean) => {
          resolve(result)
          this.destroy()
        },
      })

      // 继承上下文
      if (this.appContext) {
        this.instance.appContext = this.appContext
      }
      render(this.instance, this.container)
    })
  }

  // 销毁实例
  private destroy() {
    if (this.container) {
      render(null, this.container)
      document.body.removeChild(this.container)
      this.container = null
      this.instance = null
    }
  }
}

export const dialogService = new DialogService()
