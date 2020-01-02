<template>
  <div class="card">
    <p>{{ foodGroup.name }}</p>
    <button-action type="add" @action="changePortion({ foodGroup, type: 'add' })">
      +
    </button-action>
    <button-action type="remove" @action="changePortion({ foodGroup, type: 'remove' })">
      -
    </button-action>
  </div>
</template>

<script>
import foodGroups from '@/settings/recommandations.js';
import ButtonAction from '@/components/buttons/ButtonAction';

export default {
  name: 'FoodGroupCard',
  components: {
    ButtonAction
  },
  props: {
    foodGroup: {
      type: Object,
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
    }
  }
};
</script>
