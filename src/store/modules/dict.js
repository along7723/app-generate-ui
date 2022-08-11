const state = {
  dicts: {},
  dicts_state: {},
  dicts_expire: {}
}

const mutations = {
  SET_DICT: (state, obj) => {
    state.dicts = {
      ...state.dicts,
      ...obj
    }
  },
  SET_DICT_STATE: (state, obj) => {
    state.dicts_state = {
      ...state.dicts_state,
      ...obj
    }
  },
  SET_DICT_EXPIRE: (state, obj) => {
    state.dicts_expire = {
      ...state.dicts_expire,
      ...obj
    }
  }
}

const actions = {
  setDict({
            commit
          }, obj) {
    commit('SET_DICT', obj)
  },
  setDictState({
                 commit
               }, obj) {
    commit('SET_DICT_STATE', obj)
  },
  setDictExpire({
                  commit
                }, obj) {
    commit('SET_DICT_EXPIRE', obj)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
