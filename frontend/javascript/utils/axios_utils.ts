import axios from 'axios'

const tokenElement: any = document.querySelector('meta[name=csrf-token]')

const DEFAULT_API_CONFIG = {
  baseURL: 'http://localhost:3000',
  timeout: 5000,
  mode: 'cors',
  credentials: 'include',
  headers: {
    ContentType: 'application/json',
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': tokenElement ? tokenElement.content : null,
  },
}

export const newAxiosInstance = () => {
  const instance = axios.create(DEFAULT_API_CONFIG)

  instance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  return instance
}
