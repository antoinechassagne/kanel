<template>
  <ul v-if="Object.keys(cleanDay).length" class="card-list">
    <li v-for="(period, periodKey) in cleanDay" :key="generateUniqueComponentKey()" class="card">
      <list v-if="period.length" :label="getPeriodName(periodKey)" :items="period">
        <template v-slot:default="{ item }">
          <template v-if="item.portions !== 0">
            <span>{{ item.name }}</span> <span class="font-medium">{{ item.portions }}</span>
          </template>
        </template>
      </list>
    </li>
  </ul>
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
  computed: {
    cleanDay() {
      return Object.keys(this.day).reduce((acc, period) => {
        if (this.day[period].length > 0) {
          acc[period] = this.day[period];
        }
        return acc;
      }, {});
    }
  },
  methods: {
    generateUniqueComponentKey,
    getPeriodName
  }
};
</script>
