import axios from 'axios'
import { APIS, BASEURL } from '@/API'

export default class CreateAxios {
  constructor(store) {
    this.store = store
    this.time = new Date()
    this.init()
  }

  instance = axios.create()

  https = {}

  initHttpFn = async (params = {}, isFromData = false, config = { headers: {} }, url, method) => {
    const instance = this.instance
    const nParams = this.initParams(params, isFromData)
    instance.defaults.baseURL = config.baseURL || BASEURL
    instance.defaults.timeout = config.timeout || 10000
    instance.defaults.headers = {
      ...config.headers,
      authToken: this.store.getters.getToken
    }
    this.interceptorsRequest(instance)
    this.interceptorsResponse(instance)
    return await this.initResponse(instance, config, nParams, url, method)
  }

  initParams(params, isFromData) {
    if (Object.keys(params).length > 0 && isFromData) {
      const nFromData = new FormData()
      Object.keys(params).forEach(results => {
        if (Array.isArray(params[results])) {
          params[results].map(item => {
            if (item.file && item.content) {
              nFromData.append(results, item.file)
            } else {
              nFromData.append(results, item)
            }
          })
        } else {
          if (params[results].file && params[results].content) {
            nFromData.append(results, params[results].file)
          } else {
            nFromData.append(results, params[results])
          }
        }
      })
      return nFromData
    } else {
      return params
    }
  }

  initResponse = async (instance, config, nParams, url, method) => {
    let response = {}
    if (['post', 'put', 'patch'].includes(method)) {
      try {
        response = await instance({ method, url, data: nParams, ...config })
      } catch (error) {
        response = Promise.reject(error)
      }
    } else if (['get', 'delete'].includes(method)) {
      try {
        config.params = nParams
        response = await instance({ method, url, ...config })
      } catch (error) {
        response = Promise.reject(error)
      }
    }
    return response
  }

  interceptorsRequest(instance) {
    instance.interceptors.request.use(
      config => {
        instance.defaults.headers.login_token = this.store.getters.token
        // this.store.commit('setError', { status: true, message: '', type: 'loading', duration: 0 })
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )
  }

  interceptorsResponse(instance) {
    instance.interceptors.response.use(
      config => {
        this.store.commit('setError', { status: false, message: '' })
        return config
      },
      error => {
        this.store.commit('setError', { status: false, message: '' })
        if (error && error.response) {
          const eMsg = error.response.data
          this.store.commit('setError', { status: true, message: eMsg })
        } else {
          this.store.commit('setError', { status: true, message: '系统错误' })
        }
        return Promise.reject(error)
      }
    )
  }

  init() {
    if (APIS.length > 0) {
      APIS.map(item => {
        this.https[item.name] = (params = {}, isFromData = false, config = {}) =>
          this.initHttpFn(params, isFromData, config, item.url, item.method)
      })
      this.store.commit('setHttps', this.https)
    }
  }
}
