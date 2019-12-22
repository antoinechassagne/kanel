<template>
  <div class="page-meals">
    <base-header />
    <heading level="1">Synthèse</heading>
    <div v-for="(day, dayName) in results" :key="dayName">
      {{ getDayName(dayName) }}
      <div v-for="(period, periodIndex) in day" :key="periodIndex">
        {{ getPeriodName(periodIndex) }}
        <div v-for="meal in period" :key="meal.id">{{ meal.name }} : {{ meal.portions }}</div>
      </div>
    </div>
    <base-footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import generateUniqueComponentKey from '../helpers/functions/generateUniqueComponentKey';
import getDayName from '../helpers/functions/getDayName';
import getPeriodName from '../helpers/functions/getPeriodName';
import BaseHeader from '@/components/base/BaseHeader';
import BaseFooter from '@/components/base/BaseFooter';
import Heading from '@/components/texts/Heading';

export default {
  name: 'Synthesis',
  components: {
    BaseHeader,
    BaseFooter,
    Heading
  },
  computed: {
    ...mapGetters({
      results: 'results'
    })
  },
  methods: {
    generateUniqueComponentKey,
    getDayName,
    getPeriodName
  },
  created() {
    console.log(this.results);
  }
};
</script>
