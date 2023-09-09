import { createRouter, createWebHistory } from 'vue-router';

// Importez vos composants pour les différentes routes
import Home from './components/Home.vue';
import Favoris from './components/Favorites.vue';
import Listing from './components/Listing.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/liste',
    component: Listing,
    },
  {
    path: '/favoris',
    component: Favoris,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
