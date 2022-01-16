import { http } from '@/plugins'

export interface UserType {
  username: string
  password: string
  code?: number | string
}
interface RegistrySuccess {
  user: {
    username: string
    password: string
  }
  message: string
}
// 注册
export const registryApi = (data: UserType) => {
  return http.request<RegistrySuccess>({
    method: 'post',
    url: '/user/registry',
    data,
  })
}
// 获取验证码
export const getCodeApi = () => {
  return http.request<{ code: number }>({
    url: '/user/getcode',
  })
}
// 登录
export const loginApi = (data: UserType) => {
  return http.request({
    url: '/user/login',
    method: 'post',
    data,
  })
}
