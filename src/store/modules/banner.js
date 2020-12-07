const state = () => ({
    text: null,
    link: '#',
    style: {
        width: 240,
        height: 320,
        'background-color': '#EEEEEE',
        'background-image': null
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
        const propsArr = property.split('.')

        propsArr.reduce((k, key, index) => {
            if (index < propsArr.length - 1) {
                return k[key]
            } else {
                k[key] = value
            }
        }, state)

        console.log(property, value)
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
