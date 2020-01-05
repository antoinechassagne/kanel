<template>
  <div class="card card--action">
    <h4>{{ foodGroup.name }}</h4>
    <span class="card__number mb--30" :class="{ 'text-grey': hasPortions }">{{ portions }}</span>
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
    },
    portions: {
      type: Number,
      default() {
        return 0;
      }
    }
  },
  computed: {
    foodGroups() {
      return foodGroups;
    },
    hasPortions() {
      return !this.portions > 0;
    }
  },
  methods: {
    changePortion(value) {
      this.$emit('changePortion', value);
    }
  }
};
</script>
