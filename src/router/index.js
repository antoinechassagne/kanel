import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Week from '../views/Week.vue';
import Meals from '../views/Meals.vue';
import Synthesis from '../views/Synthesis.vue';
import config from '../../vue.config';

Vue.use(VueRouter);

const routes = [
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
  },
  {
    path: '/synthesis',
    name: 'Synthesis',
    component: Synthesis
  }
];

const base = config.publicPath;

const router = new VueRouter({
  mode: 'history',
  base,
  routes
});

export default router;
