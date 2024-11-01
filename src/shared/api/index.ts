import axios from 'axios'

const BASE_URL = 'http://188.120.231.198:4000'
export const apiInstance = axios.create({
  baseURL: BASE_URL,
})
