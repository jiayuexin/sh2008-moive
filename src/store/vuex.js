// 引入vue和vuex
import Vue from 'vue';
import Vuex from 'vuex';

// 在vue中使用vuex
Vue.use(Vuex);

// 创建Store对象，用于存储数据
export default new Vuex.Store({
    state: {
        count: 0,
        city: '全国',
        positionCity: '定位失败',
        // 如果有更多的数据需要存储，接着写就行
        _token: '',
        ID: ''
    },
    // 修改数据（监听），同步程序放这里
    mutations: {
        add: function(state, step) {
            state.count += step;
        },
        setCity: function(state, cityName) {
            localStorage.setItem('clickName', cityName);
            state.city = cityName;
        },
        updateToken: function(state, _token) {
            localStorage.setItem('_token', _token);
            state._token = _token;
        },
        getCityName: function(state, positionName) {
            state.positionCity = positionName;
        },
        getCityId: function(state, cityId) {
            localStorage.setItem('cityId', cityId);
        },
        clickCityId: function(state, cityId) {
            localStorage.setItem('clickId', cityId);
        },
        // 电影详情    电影院的
        filmID: function(state, ID) {
            state.ID = ID
        }



        // ......
    },
    // 异步程序放这里
    actions: {
        addAsync: function(context, step) {
            setTimeout(() => {
                context.commit('add', step);
            }, 3000);
        },
    },
    getters: {
        getCount: function(state) {
            return state.count;
        },
    },
});