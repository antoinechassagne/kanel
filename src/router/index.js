import Vue from 'vue';
import VueRouter from 'vue-router';
import ComponentsShowcase from '../views/ComponentsShowcase.vue';
import Home from '../views/Home.vue';
import Week from '../views/Week.vue';
import Meals from '../views/Meals.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/showcase',
    name: 'ComponentsShowcase',
    component: ComponentsShowcase
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/semaine',
    name: 'Week',
    component: Week
  },
  {
    path: '/jour/:day/repas',
    name: 'Meals',
    component: Meals
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
