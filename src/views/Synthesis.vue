<template>
  <div class="page-meals">
    <base-header />
    <heading level="1">Synthèse</heading>
    <div v-for="(day, dayKey) in results" :key="generateUniqueComponentKey()">
      {{ getDayName(dayKey) }}
      <div v-for="(period, periodKey) in day" :key="generateUniqueComponentKey()">
        {{ getPeriodName(periodKey) }}
        <div
          v-for="meal in period"
          :key="generateUniqueComponentKey()"
        >{{ meal.name }} : {{ meal.portions }}</div>
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
