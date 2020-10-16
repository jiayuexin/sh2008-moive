import { Container } from "element-ui"

// 电影列表
export const nowPlayingListUrl = "gateway?cityId=310100&pageSize=10&type=1&k=5155219&pageNum="

// 即将上映
export const comingSoonListUrl = "gateway?cityId=310100&pageSize=10&type=2&k=5269427&pageNum="

// 详情页面请求地址

export const detailUrl = "gateway?k=3768245&&filmId="

// 电影院页面
export const cinemaListUrl = 'gateway?cityId=310100&ticketFlag=1&k=6599323'

export const cinemaYou = 'gateway?cityId=310100&k=7471974'


// 城市列表数据
export const cityListUrl = 'gateway?&k=7471974'

// 个人中心相关的接口
export const loginUrl = "http://39.104.79.96:3000/api/v1/login";
export const centerUrl = "http://39.104.79.96:3000/api/v1/user_info"