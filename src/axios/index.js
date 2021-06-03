/*
  使用方法
  在 API文件夹中，定义模块API文件，并将其注入, index.js中，将其激活
  模块文件格式：
    export default [{ name: 'getXxx', url: 'xxx', method: 'get' }]
    name: 为 vuex https 的 key
    url: 为后端接口地址
    method: 为请求类型
  如何调用
  在 Stroe 的 actions 方法中，getter https 返回 name，直接执行 name
  例如:
    const { getXxx } = getter.https
    const { data } = await getXxx()
    data: 为响回调数据
  注意：actios 是异步方法，必须使用 async await 来规避执行请求先后
*/
import axios from 'axios'
import { ElLoading } from 'element-plus'
// 引入APIS集合， 后端请求地址
import { APIS, BASEURL } from '@/API'
// 创建 Axios 类实例
export default class CreateAxios {
  // 类的构造方法
  constructor(store) {
    this.store = store
    this.time = new Date()
    this.init()
    this.interceptorsRequest()
    this.interceptorsResponse()
  }
  // 创建 Axios 全局 实例
  instance = axios.create()
  // https 全局对象， 存储 所有 API 集合所属的 方法
  https = {}
  // 加载loading
  isLoading = null
  // 定义 https 的发现入口方法
  initHttpFn = async (params = {}, isFromData = false, config = { headers: {} }, url, method) => {
    // 获取属性，是否为 FromData, 返回对应属性对象
    const nParams = this.initParams(params, isFromData)
    // 配置默认请求 baseUrl 为 config 所带的 baseURL 或是 API 文件所配置的 baseURL
    this.instance.defaults.baseURL = config.baseURL || BASEURL
    // 配置默认请求 timeout 为 config 所带的 timeout 或是 默认 10000
    this.instance.defaults.timeout = config.timeout || 10000
    // 配置默认请求 headers 为 config 所带的 headers 并配置 token 为缓存 tokne
    this.instance.defaults.headers = {
      ...config.headers,
      authToken: this.store.getters.getToken
    }
    // 返回对应配置过的请求方式
    return await this.initResponse(config, nParams, url, method)
  }
  // 定义所属配置方法， 返回对应的新属性
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
  // 返回对应的 Axios 语法方式, 不周的请求类型，参数放置相对应的位置，例如：get 参数放在地址后面
  initResponse = async (config, nParams, url, method) => {
    let response = {}
    if (['post', 'put', 'patch'].includes(method)) {
      try {
        response = await this.instance({ method, url, data: nParams, ...config })
      } catch (error) {
        response = Promise.reject(error)
      }
    } else if (['get', 'delete'].includes(method)) {
      try {
        config.params = nParams
        response = await this.instance({ method, url, ...config })
      } catch (error) {
        response = Promise.reject(error)
      }
    }
    return response
  }
  // 发送请求拦截器，请求前需要做的事，例如，加载前显示Loading
  interceptorsRequest() {
    this.instance.interceptors.request.use(
      config => {
        this.instance.defaults.headers.login_token = this.store.getters.token
        // 这里可放Loading方法
        if (!this.isLoading) {
          this.isLoading = ElLoading.service()
        }
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )
  }
  // 响应拦截器，请求响应时需要做的事，例如，处理公共错误提示框
  interceptorsResponse() {
    this.instance.interceptors.response.use(
      config => {
        this.isLoading.close()
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
  // 初始化 API 所对应的入口方法，并交其注入 vuex 的 https 中
  init() {
    if (APIS.length > 0) {
      APIS.map(item => {
        this.https[item.name] = (params = {}, isFromData = false, config = {}) =>
          this.initHttpFn(params, isFromData, config, item.url, item.method)
      })
      // 注入 vuex
      this.store.commit('setHttps', this.https)
    }
  }
}
