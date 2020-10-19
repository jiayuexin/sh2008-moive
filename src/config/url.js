import { Container } from "element-ui"

// 电影列表
export const nowPlayingListUrl = "gateway?pageSize=10&type=1&k=5155219&pageNum="

// 即将上映
export const comingSoonListUrl = "gateway?pageSize=10&type=2&k=5269427&pageNum="

// 详情页面请求地址

export const detailUrl = "gateway?k=3768245&&filmId="

// 电影院页面
export const cinemaListUrl = 'gateway?ticketFlag=1&k=6599323&cityId='

export const cinemaYou = 'gateway?k=7471974&cityId='


// 城市列表数据
export const cityListUrl = 'gateway?&k=7471974'

// 影院详情
export const cinemaUrl = 'gateway/?k=9363061&cinemaId='



// 个人中心相关的接口
export const loginUrl = "http://39.104.79.96:3000/api/v1/login";
export const centerUrl = "http://39.104.79.96:3000/api/v1/user_info"