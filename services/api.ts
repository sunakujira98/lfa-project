/* eslint-disable no-param-reassign */
import axios from 'axios'

export const apiInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_CMS_HOST}/api`,
})

apiInstance.interceptors.request.use(
  (config) => {
    const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
