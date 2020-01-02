<template>
  <ul class="card-list">
    <li v-for="foodGroup in foodGroups" :key="foodGroup.id">
      <food-group-card :foodGroup="foodGroup" @changePortion="changePortion" />
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
  computed: {
    foodGroups() {
      return foodGroups;
    }
  },
  methods: {
    changePortion(value) {
      this.$emit('changePortion', value);
    }
  }
};
</script>
