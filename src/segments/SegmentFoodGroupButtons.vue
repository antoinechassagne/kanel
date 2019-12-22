<template>
  <ul>
    <li>
      <ButtonAdd
        v-for="foodGroup in foodGroups"
        :key="foodGroup.id"
        @click="incrementPortion(foodGroup)"
      >
        {{ foodGroup.name }}
      </ButtonAdd>
    </li>
  </ul>
</template>

<script>
import foodGroups from '@/settings/recommandations.js';
import ButtonAdd from '@/components/buttons/ButtonAdd';

export default {
  name: 'SegmentFoodGroupButtons',
  components: {
    ButtonAdd
  },
  computed: {
    foodGroups() {
      return foodGroups;
    }
  },
  methods: {
    incrementPortion(foodGroup) {
      this.$emit('incrementPortion', foodGroup);
    }
  }
};
</script>
