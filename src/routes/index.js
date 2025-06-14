import { createWebHistory, createRouter } from 'vue-router';
import HomeView from '../views/HomeView.vue'; // Changed to default import
import ProductView from '../views/ProductView.vue';

const routes = [
  {
    path: '/',
    component: HomeView,
    name: 'home',
  },
  {
    path: '/product/:id',
    component: ProductView,
    name: 'product'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;