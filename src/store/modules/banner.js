import cloneDeep from 'lodash.clonedeep'

const state = () => ({
    text: 'hello, world!',
    link: '#',
    style: {
        width: 240,
        height: 320,
        'background-color': '#EEEEEE',
        'background-image': ''
    }
})

const basicBanner = cloneDeep(state)

const actions = {
    setBannerProp ({ commit }, payload) {
        return new Promise( resolve => {
            commit('SET_BANNER_PROP', payload)
            resolve()
        })
    },
    resetBanner({ commit }) {
        return new Promise( resolve => {
            commit('RESET_BANNER')
            resolve()
        })
    },
}

const mutations = {
    SET_BANNER_PROP: (state, payload) => {
        const { property, value } = payload
        const propsArr = property.split('.')

        propsArr.reduce((k, key, index) => {
            if (index < propsArr.length - 1) {
                return k[key]
            } else {
                k[key] = value
            }
        }, state)
    },

    RESET_BANNER_PROP: (state) => {
        state.banner = basicBanner
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
