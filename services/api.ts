import axios from 'axios'

export const apiInstance = axios.create({
  baseURL: 'http://localhost:1337/api',
})

apiInstance.interceptors.request.use(
  (config) => {
    const token =
      '829972fe0dc5ab7f0d6f2d22a9938782dc5b706eae9e05df3af17928e02b07092dd508ec51e98e669e2670c9af79f37d7423cb854cd7d706ac0b88eaaa273d118d6477de69284f6e8bd2c93d43765e80e8a0cfc37a837adc8e64124c4ad2e7aa9a3dee5afbbd60f344c1610deb04ac7ae8e5888850cd6caa23a7c930b1577f44'
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
