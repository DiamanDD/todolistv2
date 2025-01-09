import axios from 'axios'

const ACCESS_TOKEN = 'access_token'
const BASE_URL = 'http://188.120.231.198:4000'
export const apiInstance = axios.create({
  baseURL: BASE_URL,
})

export const setAuthTokenInLocalStorage = (token: string) => {
  if (token) {
    localStorage.setItem(ACCESS_TOKEN, token)
  }
}

export const removeAuthTokenInLocalStorage = () => {
  localStorage.removeItem(ACCESS_TOKEN)
}

export const getAuthToken = () => {
  const token = localStorage.getItem(ACCESS_TOKEN)
  if (token) {
    apiInstance.defaults.headers.common.Authorization = `Bearer ${token}`
    return token
  }
}
