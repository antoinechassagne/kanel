import Vue from 'vue';
import Vuex from 'vuex';
import recommandations from '../settings/recommandations';

Vue.use(Vuex);

const state = {
  recommandations,
  weekMeals: {}
};

const getters = {
  recommandations: state => state.recommandations,
  weekMeals: state => state.weekMeals
};

const mutations = {};
const actions = {};

export default new Vuex.Store({ state, getters, mutations, actions });
