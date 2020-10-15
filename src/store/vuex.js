import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({

    // state中存放的就是全局共享的数据
    state: {
        count: 0,
        city: '火星',
        addr: '定位失败',
        cityOld: ''
    },
    // 存储修改的方法    （不能写异步代码）
    mutations: {
        add: function(state, step) {
            state.count += step
        },
        setCity: function(state, cityName) {
            state.city = cityName
        },
        getAddr: function(state, addrName) {
            state.addr = addrName
            state.cityOld = addrName
        }
    },
    // 存储修改的方法   （可以写异步）
    actions: {

    },
    // 用于加工处理数据
    getters: {

    }

    //写在methods中的是  mutations   和  actions
    // 写在computed中的是  state  和   getters
})