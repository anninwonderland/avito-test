import Vue from 'vue'
import Vuex from 'vuex'
import banner from './modules/banner'

Vue.use(Vuex)

const store =  new Vuex.Store({
    modules: {
        banner
    }
})

export default store
