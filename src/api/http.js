import Vue from "vue";
import axios from "axios";
axios.defaults.baseURL = "https://m.maizuo.com"

// 添加请求拦截器
axios.interceptors.request.use(
    function(config){
        let host = '';
        let info = config.headers.info;
        if("info" == info){

            // 详情页面的头
            host = 'mall.report.event'
        }else if("cinema" == info){

            // 影院列表的头
            host = 'mall.film-ticket.cinema.list'
        }else if("city" == info){
            
            
            host = 'mall.film-ticket.film.list'
        }else{
            host = 'mall.film-ticket.film.list'
        }
        config.headers = {
            "X-Client-Info":'{"a":"3000","ch":"1002","v":"5.0.4","e":"1602226855365231133949961","bc":"310100"}'
            ,"X-host":host,
        }
        return config
    },
    function(error){

        // 请求错误执行操作
        return Promise.reject(error)
    }
)

export default axios;