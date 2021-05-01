export default ({
  state: {
    user: { isLogin: false }
  },
  mutations: {
    setUser (state, user) {
      state.user = { ...state.user, ...user }
    },
  },
  getters: {
    getLogin: state => state.user.isLogin,
    getUser: state => state.user
  },
  actions: {
    async fetchLogin ({ commit, getters }, params) {
      const { login } = getters.getHttps
      const { data } = await login(params, false, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      if (data && data.code === 200) {
        commit('setToken', data.result.authToken)
        return data
      } else {
        commit('setError', { status: true, message:  data.msg })
      }
    },
    async fetchLoginToken ({ commit, getters }) {
      const { LoginToken } = getters.getHttps
      const { data } = await LoginToken()
      if (data && data.code === 200) {
        return data
      } else {
        commit('setError', { status: true, message:  data.msg })
      }
    },
    async fetchLoginOut ({ commit, getters }) {
      const { LoginOut } = getters.getHttps
      const { data } = await LoginOut()
      if (data && data.code === 200) {
        return data
      } else {
        commit('setError', { status: true, message:  data.msg })
      }
    },
    async fetchManageSysUsers ({ commit, getters }, params) {
      const { manageSysUsers } = getters.getHttps
      const { data } = await manageSysUsers(params)
      if (data && data.code === 200) {
        return data
      } else {
        commit('setError', { status: true, message:  data.msg })
      }
    },
    async fetchmanageSysUsersUpdate ({ commit, getters }, params) {
      const { manageSysUsersUpdate } = getters.getHttps
      const { data } = await manageSysUsersUpdate(params )
      if (data && data.code === 200) {
        return data
      } else {
        commit('setError', { status: true, message:  data.msg })
      }
    },
    async fetchmanageSysUserss ({ commit, getters }, params) {
      const { manageSysUserss } = getters.getHttps
      const { data } = await manageSysUserss(params)
      if (data && data.code === 200) {
        return data
      } else {
        commit('setError', { status: true, message:  data.msg })
      }
    },
    async fetchmanageSysUserssOne ({ commit, getters }, userId) {
      const { manageSysUserssOne } = getters.getHttps
      const { data } = await manageSysUserssOne({ userId }, false, {
        url: `/hmWeb/manage/sysUsers/${userId}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      if (data && data.code === 200) {
        return data
      } else {
        commit('setError', { status: true, message:  data.msg })
      }
    },
    async fetchmanageResPaw ({ commit, getters }, userId) {
      const { manageResPaw } = getters.getHttps
      const { data } = await manageResPaw(false, false, {
        url: `/hmWeb/manage/resetUserPass/${userId}`,
      })
      if (data && data.code === 200) {
        return data
      } else {
        commit('setError', { status: true, message:  data.msg })
      }
    },
    async fetchmanageResRemove ({ commit, getters }, userId) {
      const { manageResRemove } = getters.getHttps
      const { data } = await manageResRemove(false, false, {
        url: `/hmWeb/manage/sysUsers/${userId}`,
      })
      if (data && data.code === 200) {
        return data
      } else {
        commit('setError', { status: true, message:  data.msg })
      }
    },
    async fetchupdateUserPass ({ commit, getters }, params) {
      const { updateUserPass } = getters.getHttps
      const { data } = await updateUserPass(params)
      if (data && data.code === 200) {
        return data
      } else {
        commit('setError', { status: true, message:  data.msg })
      }
    },
    async fetchgetsiteInfos ({ commit, getters }, params) {
      const { getsiteInfos } = getters.getHttps
      const { data } = await getsiteInfos(params)
      if (data && data.code === 200) {
        return data
      } else {
        commit('setError', { status: true, message:  data.msg })
      }
    },
    async fetchgetsysRoles ({ commit, getters }, params) {
      const { getsysRoles } = getters.getHttps
      const { data } = await getsysRoles(params)
      if (data && data.code === 200) {
        return data
      } else {
        commit('setError', { status: true, message:  data.msg })
      }
    }
  }
})
