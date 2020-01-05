<template>
  <div class="page container">
    <heading level="1" class="mb--40">Ajoutez vos repas du {{ dayName.toLowerCase() }}</heading>
    <tabs :tabs="tabs" @tabClicked="changeCurrentPeriod">
      <template v-slot:tab-navigation="{ tab }">{{ tab.title }}</template>
      <template v-slot:tab-content="{ currentTab }">
        <fragment>
          <segment-food-group-cards
            @changePortion="updateFoodGroupPortions"
            :day="meals[currentTab.value]"
            class="mb--40"
          />
          <button-action type="action" @action="storeDayMeals" class="mt--50"
            >Valider</button-action
          >
        </fragment>
      </template>
    </tabs>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { Fragment } from 'vue-fragment';
import getDayName from '@/helpers/functions/getDayName';
import Heading from '@/components/texts/Heading';
import Tabs from '@/components/tabs/Tabs';
import SegmentFoodGroupCards from '@/segments/SegmentFoodGroupCards';
import ButtonAction from '@/components/buttons/ButtonAction';

export default {
  name: 'Meals',
  components: {
    Fragment,
    Heading,
    Tabs,
    ButtonAction,
    SegmentFoodGroupCards
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
    updateFoodGroupPortions(mutation) {
      const period = this.currentPeriod;
      const index = this.meals[period].findIndex(meal => meal.id === mutation.foodGroup.id);

      // Food group is already in state
      if (index !== -1) {
        // Prevent decrementing a food group with 0 portion
        if (this.meals[period][index].portions === 0 && mutation.type === 'remove') return;

        // Increment/decrement
        mutation.type === 'add'
          ? this.meals[period][index].portions++
          : this.meals[period][index].portions--;
        return;
      }

      // Prevent decrementing a food group that isn't in the state yet
      if (mutation.type === 'remove') return;

      // Add food group for the first time with 1 portion
      this.meals[period].push({
        id: mutation.foodGroup.id,
        name: mutation.foodGroup.name,
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
