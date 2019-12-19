import Vue from 'vue';
import Vuex from 'vuex';
import HappyMeals from '../services/HappyMeals';
import recommandations from '../settings/recommandations';
import pattern from '../settings/pattern';

Vue.use(Vuex);

const state = {
  weekMeals: {},
  results: {}
};

const getters = {
  weekMeals: state => state.weekMeals,
  results: state => state.results
};

const mutations = {
  SET_WEEK_MEALS: (state, weekMeals) => {
    state.weekMeals = weekMeals;
  },
  SET_RESULTS: (state, results) => {
    state.results = results;
  }
};

const actions = {
  updateDayMeals(context, content) {
    const { weekMeals } = state;
    weekMeals[content.day] = content.meals;
    context.commit('SET_WEEK_MEALS', weekMeals);
  },
  generateResults(context) {
    const happyMeals = new HappyMeals(recommandations, pattern, state.weekMeals);
    happyMeals.provideMeals();
    context.commit('SET_RESULTS', happyMeals.weekMap);
  }
};

export default new Vuex.Store({ state, getters, mutations, actions });
