// @ 是一个路径别名，表示 src 文件夹的路径
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'
import Detail from '@/pages/detail'
import Count from '@/pages/details/count'
import Analysis from '@/pages/details/analysis'
import Forecast from '@/pages/details/forecast'
import Publish from '@/pages/details/publish'
import OrderList from '@/pages/orderList'

Vue.use(Router) //注册使用vue-router

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
		},
		{
      path: '/orderList',
      name: 'OrderList',
      component: OrderList
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
      children: [
				{
					path: 'analysis',
					component: Analysis
				},
				{
					path: 'count',
					component: Count
				},
				{
					path: 'forecast',
					component: Forecast
				},
				{
					path: 'publish',
					component: Publish
				}
			]
    }
  ]
})
