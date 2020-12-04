const state = () => ({
    text: null,
    img: null,
    link: '#',
    size: {
      width: 240,
      height: 320,
    },
    style: {
        bgColor: null,
        bgGradient: null
    }
})

const actions = {
    setBannerProp ({ commit }, payload) {
        return new Promise( resolve => {
            commit('SET_BANNER_PROP', payload)
            resolve()
        })
    },
}

const mutations = {
    SET_BANNER_PROP: (state, payload) => {
        const { property, value } = payload
        state[property] = value
    }
}



export default {
    namespaced: true,
    state,
    actions,
    mutations
}
