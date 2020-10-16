import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import centerRouter from './routes/center'
import cinemaRouter from './routes/cinema'
import filmRouter from './routes/film'
import detailRouter from "./routes/detail";
import cityRouter from "./routes/city";
import vuexRouter from "./routes/vuex";
import loginRouter from "./routes/login";

const routes = [{
        path: '/',
        redirect: '/film'
    },
    centerRouter,
    cinemaRouter,
    filmRouter,
    detailRouter,
    cityRouter,
    vuexRouter,
    loginRouter
]

const router = new VueRouter({
    routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
    let arr = [
        // 存需要登录的页面地址
        "/cinema",
    ];
    if (arr.includes(to.path)) {
        // 返回真则在(需要登录判断)
        if (localStorage.getItem("_token")) {
            next()
        } else {
            next({ path: '/login', query: { 'refer': to.fullPath } })
                // encodeURI可以做兼容地址处理
        }
    } else {
        // 不在（不许要登录判断）
        next()
    }

})

export default router