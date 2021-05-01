export default ({
  state: {
  },
  mutations: {
  },
  getters: {
  },
  actions: {
    async fetchsiteInfos ({ commit, getters }, params) {
      const { siteInfos } = getters.getHttps
      const { data } = await siteInfos(params)
      if (data && data.code === 200) {
        return data
      } else {
        commit('setError', { status: true, message:  data.msg })
      }
    },
    async fetchsiteInfosOne ({ commit, getters }, siteId) {
      const { siteInfos } = getters.getHttps
      const { data } = await siteInfos(false, false, {
        url: `/hmWeb/manage/siteInfo/${siteId}`
      })
      if (data && data.code === 200) {
        return data
      } else {
        commit('setError', { status: true, message:  data.msg })
      }
    },
    async fetchAddSiteInfo ({ commit, getters }, params) {
      const { addSiteInfo } = getters.getHttps
      const { data } = await addSiteInfo(params)
      if (data && data.code === 200) {
        return data
      } else {
        commit('setError', { status: true, message:  data.msg })
      }
    },
    async fetchupdateSiteInfo ({ commit, getters }, params) {
      const { updateSiteInfo } = getters.getHttps
      const { data } = await updateSiteInfo(params)
      if (data && data.code === 200) {
        return data
      } else {
        commit('setError', { status: true, message:  data.msg })
      }
    },
    async fetchremoveSiteInfo ({ commit, getters }, siteId) {
      const { removeSiteInfo } = getters.getHttps
      const { data } = await removeSiteInfo(false, false, {
        url: `/hmWeb/manage/siteInfo/${siteId}`
      })
      if (data && data.code === 200) {
        return data
      } else {
        commit('setError', { status: true, message:  data.msg })
      }
    }
  }
})
