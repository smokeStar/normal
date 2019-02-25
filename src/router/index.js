import Vue from 'vue'
import Router from 'vue-router'
import render from '@/components/render/render'
import demo from '@/pages/demo'
import scrolldemo from '@/pages/scroll-demo'
import timerdemo from '@/pages/timer-demo'
import table from '@/pages/table'
import test from '@/pages/test'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      component: demo
    },
    {
    	path : '/render',
    	component : render,

    },
    {
      path : '/scrolldemo',
      name : 'scrolldemo',
      component : scrolldemo
    },
    {
      path : '/timerdemo',
      name : 'timerdemo',
      component : timerdemo
    },
    {
      path : '/table',
      name : 'table',
      component : table
    },
    {
      path : '/test',
      name : 'test',
      component : test
    }
  ]
})
