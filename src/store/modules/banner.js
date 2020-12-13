
const state = {
    text: 'hello, world!',
    link: '',
    style: {
        width: 240,
        height: 320,
        color: '#FFFFFF',
        'background-color': '#EEEEEE',
        'background-image': ''
    }
}

const actions = {
    setBannerProp ({ commit }, payload) {
        return new Promise( resolve => {
            commit('SET_BANNER_PROP', payload)
            resolve()
        })
    }
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
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
