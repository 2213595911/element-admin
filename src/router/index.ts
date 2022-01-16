import { createRouter, createWebHashHistory } from 'vue-router'
import setupGuard from './guard'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/layouts/auth.vue'),
      children: [
        { path: '/login', name: 'login', component: () => import('@/views/auth/login.vue') },
        { path: '/registry', name: 'registry', component: () => import('@/views/auth/registry.vue') },
      ],
    },
    {
      path: '/admin',
      name: 'admin',
      redirect: '/admin/article',
      component: () => import('@/layouts/admin.vue'),
      children: [
        { path: 'article', name: 'article', component: () => import('@/views/admin/article.vue') },
        { path: 'article/add', name: 'article.add', component: () => import('@/views/admin/createArticle.vue') },
        { path: 'article/edit/:id', name: 'article.edit', component: () => import('@/views/admin/editArticle.vue') },
      ],
    },
  ],
})
setupGuard(router)
export default router
