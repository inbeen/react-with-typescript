import axios from 'axios'

// export const baseUrl = 'http://localhost:8888'
// axios.defaults.baseURL = baseUrl

export default {
  get: (url: string, options = {}) => {
    return axios.get(`${url}`, options)
  },
  post: (url: string, data?: any, options = {}) => {
    return axios.post(`${url}`, data, options)
  },
  delete: (url: string, options = {}) => {
    return axios.delete(`${url}`, options)
  },
  put: (url: string, data?: any, options = {}) => {
    return axios.put(`${url}`, data, options)
  },
  patch: (url: string, data?: any, options = {}) => {
    return axios.patch(`${url}`, data, options)
  }
}
