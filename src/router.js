import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/dailyList',
      name: 'dailyList',
      component: () =>
        import(/* webpackChunkName: "dailyList" */ './views/DailyList.vue')
    },
    {
      path: '/dailyArticle',
      name: 'dailyArticle',
      component: () =>
        import(/* webpackChunkName: "dailyList" */ './views/daily'),
      children: [
        {
          path: '2019-08-28',
          name: 'Swiper页面懒滑动',
          component: () =>
            import(/* webpackChunkName: "dailyList" */ './views/daily/swiper'),
          meta: {
            date: '2019-08-28',
            title: 'Swiper页面懒滑动'
          }
        }
      ]
    }
  ]
})
