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
    cinemaYou,
    cityListUrl,
    loginUrl,
    centerUrl,
    cinemaUrl,
    cinemaFUrl
} from '@/config/url'

// 请求正在热映
export const nowPlayingListData = (page, cityid) => {
    http.defaults.headers.authorization = ""
    http.defaults.headers.info = ""
    return http.get(nowPlayingListUrl + page + '&cityId=' + cityid)
}
export const comingSoonListData = (page, cityid) => {
    http.defaults.headers.authorization = ""
    http.defaults.headers.info = ""
    return http.get(comingSoonListUrl + page + '&cityId=' + cityid)
}

export const detailData = (filmId) => {
    http.defaults.headers.authorization = ""
    http.defaults.headers.info = "info"
    return http.get(detailUrl + filmId)
}

// 电影院列表
export const cinemaListData = (ID) => {
    http.defaults.headers.authorization = ""
    http.defaults.headers.info = "cinema"
    return http.get(cinemaListUrl + ID)
}
export const cinemaTopData = (ID) => {
    http.defaults.headers.authorization = ""
    http.defaults.headers.info = "banners"
    return http.get(cinemaYou + ID)
}


export const cityListData = async() => {
    http.defaults.headers.authorization = ""
        // 给axios 设置请求头
    http.defaults.headers.info = "city"
    let ret = await http.get(cityListUrl)
        // 定义基本的数据
    let cities = ret.data.data.cities;
    let codeList = []; // "A","B","C"   完整的26个字母
    let dataList = []; //城市信息
    let indexList = []; // "A","B","C"    筛选完的字母
    // for循环生成26个字母
    for (let i = 65; i <= 90; i++) {
        codeList.push(String.fromCharCode(i))
    }

    //开始处理最终数据
    codeList.forEach((ele) => {
        // 与城市信息的拼音字段的首字母进行对比，如果符合留下字母
        // 拿全部的数据过滤一下剩下的字母代表有相应的数据
        let tempArr = cities.filter((item) => ele.toLocaleLowerCase() == item.pinyin.substr(0, 1))
        if (tempArr.length > 0) {
            indexList.push(ele)
            dataList.push({
                index: ele,
                data: tempArr
            })
        }
    })

    console.log(ret.data);

    return Promise.resolve([dataList, indexList])
};

// 登录
export const userLogin = (data) => {
    return http.post(loginUrl, data)
}

// 获取用户信息
export const userInfo = (_token) => {
    http.defaults.headers.authorization = _token;

    // http.interceptors.response.use(function(response) {
    //     response.data.user_info.gender = response.data.user_info.gender ? '女' : '男'
    //     return response
    // }, function(error) {
    //     // 错误处理
    // })
    return http.get(centerUrl)
}

//影院详情

// 电影院详情
export const cinemaXP = (id) => {
    http.defaults.headers.info = "cinemaxp"
    http.defaults.headers.authorization = ""
    return http.get(cinemaUrl + id)
}

// 电影院电影详情
export const cinemaListXp = (id) => {
    http.defaults.headers.info = "cinemaListXp"
    http.defaults.headers.authorization = ""
    return http.get(cinemaUrl + id)
}

export const cinemaFData = () => {
    http.defaults.headers.info = "cinemaFData"
    http.defaults.headers.authorization = ""
    return http.get(cinemaFUrl)
}