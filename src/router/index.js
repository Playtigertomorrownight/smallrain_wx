import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Home from '../components/HelloFromVux'

//使用路由并进行配置
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
   {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
