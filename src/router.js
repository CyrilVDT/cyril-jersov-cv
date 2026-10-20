import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import ReviewPage from './pages/ReviewPage.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage },
    { path: '/review', component: ReviewPage },
  ],
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, top: 72 }
    return { top: 0 }
  },
})
