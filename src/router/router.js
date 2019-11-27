import Vue from 'vue'
import Router from 'vue-router'
import dashBoard from '@/views/dashBoard/dashBoard.vue'
// 解决多次点击重复路由报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      name: 'dashBoard',
      path: '/dashBoard',
      component: dashBoard
    }
  ]
})
