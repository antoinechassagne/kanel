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
    path: '/week',
    name: 'Week',
    component: Week
  },
  {
    path: '/:day/meals',
    name: 'Meals',
    component: Meals
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
