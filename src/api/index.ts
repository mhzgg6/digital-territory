import axios, { AxiosInstance, AxiosError, AxiosResponse, AxiosRequestConfig } from "axios"
import { ElMessage, ElMessageBox } from "element-plus"

interface RESULT {
  code: number
  success: boolean
  msg: string
}

interface RESULT_DATA<T = any> extends RESULT {
  data?: T
}

enum RequestEnum {
  TIMEOUT = 1000 * 20,
  FAIL_CODE = 500,
  TIMEOUT_CODE = 401,
  SUCCESS_CODE = 200,
}

const baseConfig = {
  baseURL: import.meta.env.VITE_PUBLIC_PATH as string,
  timeout: RequestEnum.TIMEOUT as number,
  withCredentials: true, // 跨越的时候允许携带凭证
}

class Request {
  service: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    // 实例化 service
    this.service = axios.create(config)

    /**
     * 请求拦截器
     * request -> { 请求拦截器 } -> service
     */
    this.service.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // const token = localStorage.getItem("token") ?? ""
        // return {
        //   ...config
        // }

        return config
      },
      (err: AxiosError) => {
        Promise.reject(err)
      },
    )

    /**
     * 响应拦截器
     * response -> { 响应拦截器 } -> client
     */
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data } = response
        if (data.code === RequestEnum.TIMEOUT_CODE) {
          // 登录过期 重定向到登录页
          ElMessageBox.confirm("登录过期，请重新登录", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
          }).then(() => {
            // 跳转登录页
            // router.push("/login")
          })
        }
        if (data.code && data.code !== RequestEnum.SUCCESS_CODE) {
          ElMessage.error(data)
          return Promise.reject(data)
        }
        return data
      },
      (error: AxiosError) => {
        const { response } = error
        if (response) {
          this.handleCode(response.status)
        }
        if (!window.navigator.onLine) {
          ElMessage.error("网络连接失败，请检查网络")
          // 可以重定向至404页面
        }
      },
    )
  }

  public handleCode = (code: number): void => {
    switch (code) {
      case 401:
        ElMessage.error("登陆失败，请重新登录")
        break
      case 500:
        ElMessage.error("请求异常，请联系管理员")
        break
      default:
        ElMessage.error("请求失败")
        break
    }
  }

  // 通用请求
  get<T>(url: string, params?: object): Promise<RESULT_DATA<T>> {
    return this.service.get(url, { ...params })
  }

  post<T>(url: string, params?: object): Promise<RESULT_DATA<T>> {
    return this.service.post(url, { ...params })
  }

  put<T>(url: string, params?: object): Promise<RESULT_DATA<T>> {
    return this.service.put(url, { ...params })
  }

  delete<T>(url: string, params?: object): Promise<RESULT_DATA<T>> {
    return this.service.delete(url, { ...params })
  }
}

export default new Request(baseConfig)
