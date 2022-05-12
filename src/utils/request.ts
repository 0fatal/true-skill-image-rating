import axios, { Axios, AxiosRequestConfig, AxiosResponse } from 'axios'

const req = axios.create({
  baseURL: import.meta.env.DEV ? 'http://localhost:8899' : ''
})

interface RespDefine<T> {
  code: number
  data?: T
  msg: string
}

export function ApiGet<R>(url: string, config?: AxiosRequestConfig) {
  return new Promise<R | undefined>((resolve, reject) => {
    req
      .get<RespDefine<R>>(url, config)
      .then((res) => {
        resolve(res.data.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export function ApiPost<R, T>(url: string, data?: T, config?: AxiosRequestConfig) {
  return new Promise<R | undefined>((resolve, reject) => {
    req
      .post<RespDefine<R>, AxiosResponse<RespDefine<R>>, T>(url, data, config)
      .then((res) => {
        resolve(res.data.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}