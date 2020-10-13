// 发送具体的请求


// 引入封装头信息和请求域名的axios对象
import http from './http'

// 引入请求的url地址

import {
    // 正在热映列表请求url地址
    nowPlayingListUrl,
    comingSoonListUrl,
    detailUrl,
    cinemaListUrl,
    cinemaYou
} from '@/config/url'

// 请求正在热映
export const nowPlayingListData = (page) => {
    http.defaults.headers.info = ""
    return http.get(nowPlayingListUrl + page)
}
export const comingSoonListData = (page) => {
    http.defaults.headers.info = ""

    return http.get(comingSoonListUrl + page)
}

export const detailData = (filmId) => {
    http.defaults.headers.info = "info"
    return http.get(detailUrl + filmId)
}

// 电影院列表
export const cinemaListData = () => {
    http.defaults.headers.info = "cinema"
    return http.get(cinemaListUrl)
}
export const cinemaYouData = () => {
    http.defaults.headers.info = "banners"
    return http.get(cinemaYou)
}