import { StoreEnum } from './../../enum/StoreEnum'
import store from '@/utils/store'
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElLoading } from 'element-plus'
export default class Axios {
  private instance: AxiosInstance
  private elInstance: any | null = null
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.setInterceptors()
  }
  private setInterceptors() {
    this.requestInterceptors()
    this.responsetInterceptors()
  }
  public async request<T>(config: AxiosRequestConfig) {
    return new Promise(async (resolve, reject) => {
      try {
        this.elInstance = ElLoading.service({ fullscreen: true })
        const result = await this.instance.request<T, T>(config)
        resolve(result)
      } catch (error: any) {
        reject(error.message)
      }
    }) as Promise<T>
  }
  private requestInterceptors() {
    this.instance.interceptors.request.use(
      config => {
        this.elInstance.close()
        config.headers!.Authorization = store.get(StoreEnum.token_key)!
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )
  }
  private responsetInterceptors() {
    this.instance.interceptors.response.use(
      response => {
        return response.data
      },
      error => {
        return Promise.reject(error)
      }
    )
  }
}
