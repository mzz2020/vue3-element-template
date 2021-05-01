export default ({
  state: {
  },
  mutations: {
  },
  getters: {
  },
  actions: {
    async fetchgetSysRoles ({ commit, getters }, params) {
      const { getSysRoles } = getters.getHttps
      const { data } = await getSysRoles(params)
      if (data && data.code === 200) {
        return data
      } else {
        commit('setError', { status: true, message:  data.msg })
      }
    },
    async fetchaddSysRoles ({ commit, getters }, params) {
      const { addSysRoles } = getters.getHttps
      const { data } = await addSysRoles(params)
      if (data && data.code === 200) {
        return data
      } else {
        commit('setError', { status: true, message:  data.msg })
      }
    },
    async fetchupdateSysRole ({ commit, getters }, params) {
      const { updateSysRole } = getters.getHttps
      const { data } = await updateSysRole(params)
      if (data && data.code === 200) {
        return data
      } else {
        commit('setError', { status: true, message:  data.msg })
      }
    },
    async fetchgetmoduleAllTreeList ({ commit, getters }, params) {
      const { getmoduleAllTreeList } = getters.getHttps
      const { data } = await getmoduleAllTreeList(params)
      if (data && data.code === 200) {
        return data
      } else {
        commit('setError', { status: true, message:  data.msg })
      }
    },
    async fetchaddSysRole ({ commit, getters }, params) {
      const { getSysRole } = getters.getHttps
      const { data } = await getSysRole(false, false, {
        url: `/hmWeb/manage/sysRole/${params.roleId}`
      })
      if (data && data.code === 200) {
        return data
      } else {
        commit('setError', { status: true, message:  data.msg })
      }
    },
    async fetchremoveSysRole ({ commit, getters }, params) {
      const { removeSysRole } = getters.getHttps
      const { data } = await removeSysRole(false, false, {
        url: `/hmWeb/manage/sysRole/${params.roleId}`
      })
      if (data && data.code === 200) {
        return data
      } else {
        commit('setError', { status: true, message:  data.msg })
      }
    }
  }
})
