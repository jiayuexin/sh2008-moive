import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import centerRouter from './routes/center'
import cinemaRouter from './routes/cinema'
import filmRouter from './routes/film'
const routes = [
  {
    path: '/',
    redirect:'/film'
  },
  centerRouter,
  cinemaRouter,
  filmRouter
]

const router = new VueRouter({
  routes
})

export default router
