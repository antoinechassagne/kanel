<template>
  <div class="page-meals">
    <base-header />
    <heading level="1">Entrez vos repas</heading>
    <button-add
      v-for="foodGroup in foodGroups"
      :key="foodGroup.id"
      @click="addFoodGroup(foodGroup)"
    >
      {{ foodGroup.name }}
    </button-add>
    <button-add :actionButton="true" @click="storeDayMeals">
      Valider
    </button-add>
    <base-footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import foodGroups from '@/settings/recommandations.js';
import BaseHeader from '@/components/base/BaseHeader';
import BaseFooter from '@/components/base/BaseFooter';
import Heading from '@/components/texts/Heading';
import ButtonAdd from '@/components/buttons/ButtonAdd';

export default {
  name: 'Meals',
  components: {
    BaseHeader,
    BaseFooter,
    Heading,
    ButtonAdd
  },
  data() {
    return {
      meals: {
        0: [],
        1: [],
        3: [],
        4: []
      }
    };
  },
  computed: {
    ...mapGetters({
      weekMeals: 'weekMeals'
    }),
    foodGroups() {
      return foodGroups;
    }
  },
  methods: {
    ...mapActions({
      updateDayMeals: 'updateDayMeals'
    }),
    storeDayMeals() {
      this.updateDayMeals({
        day: this.$route.params.day,
        meals: this.meals
      });
    },
    addFoodGroup(item) {
      const index = this.meals[0].findIndex(meal => meal.id === item.id);
      if (index !== -1) {
        this.meals[0][index].portions++;
        return;
      }
      this.meals[0].push({
        id: item.id,
        name: item.name,
        portions: 1
      });
    }
  },
  created() {
    if (this.weekMeals[this.$route.params.day]) {
      this.meals = this.weekMeals[this.$route.params.day];
    }
  }
};
</script>
