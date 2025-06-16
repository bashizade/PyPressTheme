import { createWebHistory, createRouter } from 'vue-router';
import HomeView from '../views/HomeView.vue'; // Changed to default import
import ProductView from '../views/ProductView.vue';
import ProductsView from '../views/ProductsView.vue';

const routes = [
  {
    path: '/',
    component: HomeView,
    name: 'home',
  },
  {
    path: '/products',
    children: [
      {
        path: '',
        component: ProductsView,
        name: 'products',
      },
      {
        path: ':id',
        component: ProductView,
        name: 'product'
      },
    ]
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;