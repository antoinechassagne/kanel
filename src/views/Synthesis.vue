<template>
  <div class="page">
    <heading level="1" class="mb--40">Synthèse</heading>
    <ul>
      <li v-for="(day, dayKey) in results" :key="dayKey" class="mb--30">
        <h2 class="mb--10">{{ getDayName(dayKey) }}</h2>
        <segment-day-meals :day="day" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import getDayName from '../helpers/functions/getDayName';
import Heading from '@/components/texts/Heading';
import SegmentDayMeals from '@/segments/SegmentDayMeals';

export default {
  name: 'Synthesis',
  components: {
    Heading,
    SegmentDayMeals
  },
  computed: {
    ...mapGetters({
      results: 'results'
    })
  },
  methods: {
    getDayName
  },
  created() {
    console.log(this.results);
  }
};
</script>
