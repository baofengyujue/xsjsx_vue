import Vue from 'vue'
import VueRouter from 'vue-router'

import ShowView from '../components/ShowView'
import AddBlogView from '../components/AddBlogView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/show'
  },
  {
    path: '/show',
    component: ShowView
  },
  {
    path: '/add',
    component: AddBlogView
  }
]

const router = new VueRouter({
  //这里设置为hash，项目打包过后才能在静态文件中看到效果
  //当然还要有vue.config.js文件才行
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
