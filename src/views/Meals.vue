<template>
  <div class="page">
    <heading level="1">Ajoutez vos repas</heading>
    <tabs :tabs="tabs" @tabClicked="changeCurrentPeriod">
      <template v-slot:tab-navigation="{ tab }">{{ tab.title }}</template>
      <template v-slot:tab-content="{ currentTab }">
        <section>
          <segment-food-group-buttons @incrementPortion="updateFoodGroupPortions" />
          <heading level="2">Repas du jour</heading>
          <segment-day-meals :day="meals" />
        </section>
      </template>
    </tabs>
    <button-add :actionButton="true" @click="storeDayMeals">Valider</button-add>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import getDayName from '@/helpers/functions/getDayName';
import Heading from '@/components/texts/Heading';
import Tabs from '@/components/tabs/Tabs';
import SegmentFoodGroupButtons from '@/segments/SegmentFoodGroupButtons';
import SegmentDayMeals from '@/segments/SegmentDayMeals';
import ButtonAdd from '@/components/buttons/ButtonAdd';

export default {
  name: 'Meals',
  components: {
    Heading,
    Tabs,
    ButtonAdd,
    SegmentFoodGroupButtons,
    SegmentDayMeals
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
      },
      currentPeriod: 0
    };
  },
  computed: {
    ...mapGetters({
      weekMeals: 'weekMeals'
    }),
    dayName() {
      return getDayName(this.$route.params.day);
    }
  },
  methods: {
    ...mapActions({
      updateDayMeals: 'updateDayMeals'
    }),
    changeCurrentPeriod(currentTab) {
      this.currentPeriod = currentTab.value;
    },
    storeDayMeals() {
      this.updateDayMeals({
        day: this.$route.params.day,
        meals: this.meals
      });
      this.$router.push('/week');
    },
    updateFoodGroupPortions(foodGroup) {
      const period = this.currentPeriod;
      const index = this.meals[period].findIndex(meal => meal.id === foodGroup.id);
      if (index !== -1) {
        this.meals[period][index].portions++;
        return;
      }
      this.meals[period].push({
        id: foodGroup.id,
        name: foodGroup.name,
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
