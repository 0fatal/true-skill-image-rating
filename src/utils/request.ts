import axios, { Axios, AxiosRequestConfig, AxiosResponse } from 'axios'

export const baseUrl = import.meta.env.DEV
  ? 'https://www.cloudsurvey.club'
  : 'https://www.cloudsurvey.club'

const req = axios.create({
  baseURL: baseUrl + '/api'
})

interface RespDefine<T> {
  code: number
  data?: T
  msg: string
}

export function getPicUrl(path: string) {
  const url = baseUrl + '/static'
  return `${url}/${path}`
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
