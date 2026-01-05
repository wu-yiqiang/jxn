import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

let envBaseConfig = {}
if (import.meta.env) {
  // env = process.env.parsed.NODE_ENV;
  envBaseConfig = import.meta.env
}

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: () => import('@/views/home/index.vue') },
  { path: '/login', name: 'Login', component: () => import('@/views/login/index.vue') },
  { path: '/about', name: 'About', component: () => import('@/views/about/index.vue') },
  { path: '/course_details', name: 'CourseDetails', component: () => import('@/views/course/course_detail.vue') },
  { path: '/ai', name: 'Ai', component: () => import('@/views/ai/index.vue') },
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(envBaseConfig.VITE_APP_STATE),
  routes,
})

export default router
