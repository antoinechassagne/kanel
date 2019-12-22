<template>
  <div>
    <ul v-for="(period, periodKey) in day" :key="generateUniqueComponentKey()">
      <li v-if="period.length">
        <List :label="getPeriodName(periodKey)" :items="period">
          <template v-slot:default="{ item }"> {{ item.name }} {{ item.portions }} </template>
        </List>
      </li>
    </ul>
  </div>
</template>

<script>
import generateUniqueComponentKey from '@/helpers/functions/generateUniqueComponentKey';
import getPeriodName from '@/helpers/functions/getPeriodName';
import List from '@/components/texts/List';

export default {
  name: 'SegmentDayMeals',
  components: {
    List
  },
  props: {
    day: {
      type: Object,
      required: true,
      default() {
        return {};
      }
    }
  },
  methods: {
    generateUniqueComponentKey,
    getPeriodName
  }
};
</script>
