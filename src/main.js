import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// axios体验
import axios from 'axios'
axios.defaults.baseURL='https://m.maizuo.com/'
axios.interceptors.request.use(function(config){
  config.headers={
    "X-Client-Info" : '{"a":"3000","ch":"1002","v":"5.0.4","e":"1602226855365231133949961","bc":"310100"}',
    "X-Host" : 'mall.film-ticket.film.list'
  }
  return config
},function (err) {  })
axios.get('gateway?cityId=310100&pageNum=1&pageSize=10&type=2&k=9792380').then(ret=>{
  console.log(ret);
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
