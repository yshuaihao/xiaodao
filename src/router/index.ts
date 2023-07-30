import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/login-view/index.vue'
import Home from '@/pages/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/back',
    component: Home,
    redirect: '/back/board',
    children: [
      {
        path: '/back/board',
        component: () => import('@/views/dash-board/index.vue'),
        meta: {
          title: '仪表盘'
        }
      },
      {
        path: '/back/visual',
        component: () => import('@/views/data-visual/index.vue'),
        meta: {
          title: '数据可视化'
        }
      },
      {
        path: '/back/list',
        component: () => import('@/views/list-page/index.vue'),
        meta: {
          title: '列表页'
        }
      },
      {
        path: '/back/form',
        component: () => import('@/views/form-page/index.vue'),
        meta: {
          title: '表单页'
        }
      },
      {
        path: '/back/detail',
        component: () => import('@/views/detail-page/index.vue'),
        meta: {
          title: '详情页'
        }
      },
      {
        path: '/back/result',
        component: () => import('@/views/result-page/index.vue'),
        meta: {
          title: '结果页'
        }
      },
      {
        path: '/back/exception',
        component: () => import('@/views/exception-page/index.vue'),
        meta: {
          title: '异常页'
        }
      },
      {
        path: '/back/person',
        component: () => import('@/views/person-center/index.vue'),
        meta: {
          title: '个人中心'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
