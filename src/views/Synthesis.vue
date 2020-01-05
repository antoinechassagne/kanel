<template>
  <div class="page container">
    <heading level="1" class="mb--40">Recommandation</heading>
    <ul v-if="Object.keys(results).length">
      <li v-for="(day, dayKey) in results" :key="dayKey" class="mb--30">
        <h2 class="mb--10">{{ getDayName(dayKey) }}</h2>
        <segment-day-meals :day="day" />
      </li>
    </ul>
    <template v-else>
      <p class="mb--30">
        Vous n'avez pas encore généré de recommandation. Saisissez vos repas de la semaine puis
        cliquez sur "Générer une recommandation".
      </p>
      <button-router name="Week">Ajouter des repas</button-router>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import getDayName from '../helpers/functions/getDayName';
import Heading from '@/components/texts/Heading';
import ButtonRouter from '@/components/buttons/ButtonRouter';
import SegmentDayMeals from '@/segments/SegmentDayMeals';

export default {
  name: 'Synthesis',
  components: {
    Heading,
    ButtonRouter,
    SegmentDayMeals
  },
  computed: {
    ...mapGetters({
      results: 'results'
    })
  },
  methods: {
    getDayName
  }
};
</script>
