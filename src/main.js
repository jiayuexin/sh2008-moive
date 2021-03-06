import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui'
import ('element-ui/lib/theme-chalk/index.css')
Vue.use(ElementUI)

Vue.config.productionTip = false



// 引入懒加载包
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    loading: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3807623295,2569688265&fm=26&gp=0.jpg'
})

// axios体验
// import axios from 'axios'
// axios.defaults.baseURL='https://m.maizuo.com/'
// axios.interceptors.request.use(function(config){
//   config.headers={
//     "X-Client-Info" : '{"a":"3000","ch":"1002","v":"5.0.4","e":"1602226855365231133949961","bc":"310100"}',
//     "X-Host" : 'mall.film-ticket.film.list'
//   }
//   return config
// },function (err) {  })
// axios.get('gateway?cityId=310100&pageNum=1&pageSize=10&type=2&k=9792380').then(ret=>{
//   console.log(ret);
// })



// 定义事件总线
Vue.prototype.eventBus = new Vue();

// 导入vuex的store对象
import store from '@/store/vuex'

// 同步一下loaclStorage数据到Vuex
let _token = localStorage.getItem('_token')
if (_token) {
    store.commit('updateToken', _token)
}
//  else {
//     confirm('登录超时，请重新登录')
// }

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')