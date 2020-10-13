// 封装axios，添加请求的拦截器（添加俩个请求头）


import Vue from "vue";
import axios from "axios";

// 设置基础域名（请求地址）
axios.defaults.baseURL = "https://m.maizuo.com/"

// 添加请求拦截器
axios.interceptors.request.use(
    function(config) {
        let host = '';
        let info = config.headers.info;
        if ("banners" == info) {
            host = 'mall.cfg.cinema.banners'
        } else if ("cinema" == info) {
            // 影院列表的头
            host = 'mall.film-ticket.cinema.list'
        } else if ("info" == info) {
            host = 'mall.film-ticket.film.info'
        } else {
            host = 'mall.film-ticket.film.list'
        }
        config.headers = {
            "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"1602226855365231133949961","bc":"310100"}',
            "X-Host": host,
        }
        return config
    },
    function(error) {

        // 请求错误执行操作
        return Promise.reject(error)
    }
)


// 到处封装好的axios 供后续使用
export default axios;