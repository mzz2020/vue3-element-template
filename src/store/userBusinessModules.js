export default ({
  state: {
  },
  mutations: {
  },
  getters: {
  },
  actions: {
    async fetchmerchantInfos ({ commit, getters }, params) {
      const { merchantInfos } = getters.getHttps
      const { data } = await merchantInfos(params)
      if (data && data.code === 200) {
        return data
      } else {
        commit('setError', { status: true, message:  data.msg })
      }
    },
    async fetchupdataMerchantInfo ({ commit, getters }, params) {
      const { updataMerchantInfo } = getters.getHttps
      const { data } = await updataMerchantInfo(params)
      if (data && data.code === 200) {
        return data
      } else {
        commit('setError', { status: true, message:  data.msg })
      }
    }
  }
})
