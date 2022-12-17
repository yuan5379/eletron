import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
// import ImageGallery from '@/views/ImageGallery.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/imageGallery',
    name: 'imageGallery',
    // component: ImageGallery
    component: () => import('@/views/ImageGallery.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router