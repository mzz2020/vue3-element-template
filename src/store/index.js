import { createStore } from 'vuex'
import commonModules from './commonModule'

export default createStore({
  state: {
    user: { isLogin: false },
    https: {},
    token: localStorage.getItem('authToken') || '',
    error: { status: false }
  },
  mutations: {
    // 修改https值
    setHttps(state, https) {
      state.https = { ...https }
    },
    // 更新token
    setToken(state, token) {
      state.token = token
      localStorage.setItem('authToken', token)
    },
    setLoginOut(state) {
      state.token = ''
      state.user = { isLogin: false }
      localStorage.removeItem('authToken')
    },
    // 设置error
    setError(state, params) {
      state.error = { ...params }
    }
  },
  getters: {
    getHttps: state => state.https,
    getToken: state => state.token,
    getError: state => state.error
  },
  actions: {},
  modules: {
    commonModules
  }
})
