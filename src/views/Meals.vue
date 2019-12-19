<template>
  <div class="page-meals">
    <base-header />
    <heading level="1">Entrez vos repas</heading>
    <tabs :tabs="tabs">
      <template v-slot:tab-navigation="{ tab }">{{ tab.title }}</template>
      <template v-slot:tab-content="{ currentTab }">
        <div>
          <button-add
            v-for="foodGroup in foodGroups"
            :key="foodGroup.id"
            @click="addFoodGroup(foodGroup, currentTab.value)"
          >
            {{ foodGroup.name }}
          </button-add>
        </div>
      </template>
    </tabs>
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
import Tabs from '@/components/tabs/Tabs';
import ButtonAdd from '@/components/buttons/ButtonAdd';

export default {
  name: 'Meals',
  components: {
    BaseHeader,
    BaseFooter,
    Heading,
    Tabs,
    ButtonAdd
  },
  data() {
    return {
      tabs: [
        { id: 1, title: 'Petit déjeuner', value: 0 },
        { id: 2, title: 'Déjeuner', value: 1 },
        { id: 3, title: 'Goûter', value: 2 },
        { id: 4, title: 'Dîner', value: 3 }
      ],
      meals: {
        0: [],
        1: [],
        2: [],
        3: []
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
    addFoodGroup(item, mealType) {
      console.log(mealType);
      const index = this.meals[mealType].findIndex(meal => meal.id === item.id);
      if (index !== -1) {
        this.meals[mealType][index].portions++;
        return;
      }
      this.meals[mealType].push({
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
