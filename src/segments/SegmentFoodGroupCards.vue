<template>
  <ul class="card-list">
    <li v-for="foodGroup in foodGroups" :key="foodGroup.id">
      <food-group-card
        :foodGroup="foodGroup"
        :portions="getCurrentPortions(foodGroup)"
        @changePortion="changePortion"
      />
    </li>
  </ul>
</template>

<script>
import foodGroups from '@/settings/recommandations.js';
import FoodGroupCard from '@/components/cards/FoodGroupCard';

export default {
  name: 'SegmentFoodGroupCards',
  components: {
    FoodGroupCard
  },
  props: {
    day: {
      type: Array,
      required: true
    }
  },
  computed: {
    foodGroups() {
      return foodGroups;
    }
  },
  methods: {
    changePortion(value) {
      this.$emit('changePortion', value);
    },
    getCurrentPortions(foodGroup) {
      const meal = this.day.find(meal => meal.id === foodGroup.id);
      if (meal) return meal.portions;
      return 0;
    }
  }
};
</script>
