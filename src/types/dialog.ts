import { Component } from "vue"

export interface DialogButton {
  text: string
  type?: "primary" | "success" | "warning" | "danger" | "info"
  handler?: () => void | Promise<void>
}

export interface DialogOptions {
  dialogVisible: boolean
  title?: string
  width?: string
  height?: string
  modal?: boolean
  showClose?: boolean
  fullscreen?: boolean
  dialogClass?: string
  appendToBody?: boolean
  destroyOnClose?: boolean
  closeOnClickModal?: boolean
  closeOnPressEscape?: boolean
  content?: string | Component
  btns?: DialogButton[]
  // 传递给内容组件的参数
  params?: Record<string, any>
}
