import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/one-contact/:id',
      name: 'one-contact',
      component: () => import('../views/OneContactView.vue'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/contact-setting',
      name: 'contact-setting',
      component: () => import('@/views/AddEditContact.vue'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/views/AuthPage.vue')
    },
  ]
})
export default router
