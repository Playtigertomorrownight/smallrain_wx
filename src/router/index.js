import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'

//使用路由并进行配置
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
   {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
