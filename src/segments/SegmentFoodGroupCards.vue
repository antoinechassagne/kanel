<template>
  <ul>
    <li>
      <food-group-card
        v-for="foodGroup in foodGroups"
        :key="foodGroup.id"
        :foodGroup="foodGroup"
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
