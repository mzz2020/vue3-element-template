export default ({
  state: {
  },
  mutations: {
  },
  getters: {
  },
  actions: {
    async fetchAddRiderInfo ({ commit, getters }, params) {
      const { addRiderInfo } = getters.getHttps
      const { data } = await addRiderInfo(params)
      if (data && data.code === 200) {
        return data
      } else {
        commit('setError', { status: true, message:  data.msg })
      }
    },
    async fetchUpdateRiderInfoo ({ commit, getters }, params) {
      const { updateRiderInfo } = getters.getHttps
      const { data } = await updateRiderInfo(params)
      if (data && data.code === 200) {
        return data
      } else {
        commit('setError', { status: true, message:  data.msg })
      }
    },
    async fetchGetRiderInfoOne ({ commit, getters }, riderId) {
      const { getRiderInfoOne } = getters.getHttps
      const { data } = await getRiderInfoOne(false, false, {
        url: `/hmWeb/manage/riderInfo/${riderId}`
      })
      if (data && data.code === 200) {
        return data
      } else {
        commit('setError', { status: true, message:  data.msg })
      }
    },
    async fetchGetRiderInfo ({ commit, getters }, params) {
      const { getRiderInfo } = getters.getHttps
      const { data } = await getRiderInfo(params)
      if (data && data.code === 200) {
        return data
      } else {
        commit('setError', { status: true, message:  data.msg })
      }
    },
    async fetchdeleteRiderInfo ({ commit, getters }, riderId) {
      const { deleteRiderInfo } = getters.getHttps
      const { data } = await deleteRiderInfo(false, false, {
        url: `/hmWeb/manage/riderInfo/${riderId}`
      })
      if (data && data.code === 200) {
        return data
      } else {
        commit('setError', { status: true, message:  data.msg })
      }
    }
  }
})
