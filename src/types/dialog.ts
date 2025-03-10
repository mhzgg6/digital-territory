export interface DialogButton {
  text: string
  type?: "primary" | "success" | "warning" | "danger" | "info"
  loading?: boolean
  handler?: () => Promise<boolean | void> | boolean | void
}

export interface DialogOptions {
  title?: string
  width?: string | number
  top?: string
  content: string | object
  componentProps?: Record<string, any>
  buttons?: DialogButton
  showFooter?: boolean
  showClose?: boolean
  closeOnClickModal?: boolean
  customClass?: string
}
