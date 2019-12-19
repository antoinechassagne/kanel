import Vue from 'vue';
import Vuex from 'vuex';

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
    const weekMeaks = state.weekMeals;
    weekMeaks[content.day] = content.meals;
    context.commit('SET_WEEK_MEALS', weekMeaks);
  }
};

export default new Vuex.Store({ state, getters, mutations, actions });
