// 发送具体的请求


// 引入封装头信息和请求域名的axios对象
import http from './http'

// 引入请求的url地址

import {
    // 正在热映列表请求url地址
    nowPlayingListUrl,
    comingSoonListUrl,
    detailUrl
} from '@/config/url'

// 请求正在热映
export const nowPlayingListData = (page) => {
    http.defaults.headers.info = ""
    return http.get(nowPlayingListUrl + page)
}
export const comingSoonListData = (page) => {
    return http.get(comingSoonListUrl + page)
}

export const detailData = (filmId) => {
    http.defaults.headers.info = "info"
    return http.get(detailUrl + filmId)
}
 