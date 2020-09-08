import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 1
}

const getters = {
    count100: (state) => {
        return state.count += 100
    }
}

const actions = {   // 提交mutations中的方法
    addAction(context) {
        context.commit('add')
    }

}

const mutations = {
    add(state) {
        state.count ++
    },
    reduce(state) {
        state.count--
    }
}

const moduleB = {
    state: {}
}

const moduleA = {
    state,
    mutations,
    getters,
    actions
}

export default new Vuex.Store({
    modules: {
        a: moduleA,
        b: moduleB
    }
})