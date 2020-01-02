<template>
  <div class="page">
    <heading level="1">Les menus de la semaine</heading>
    <button-action type="action" @action="generateSynthesis">Générer</button-action>
    <tabs :tabs="tabs">
      <template v-slot:tab-navigation="{ tab }">{{ tab.title }}</template>
      <template v-slot:tab-content="{ currentTab }">
        <section>
          <segment-day-meals :day="weekMeals[currentTab.value]" />
          <button-router name="Meals" :params="{ day: currentTab.value }">
            Ajouter des repas
          </button-router>
        </section>
      </template>
    </tabs>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Heading from '@/components/texts/Heading';
import ButtonAction from '@/components/buttons/ButtonAction';
import ButtonRouter from '@/components/buttons/ButtonRouter';
import Tabs from '@/components/tabs/Tabs';
import SegmentDayMeals from '@/segments/SegmentDayMeals';

export default {
  name: 'Week',
  components: {
    Heading,
    ButtonAction,
    Tabs,
    ButtonRouter,
    SegmentDayMeals
  },
  data() {
    return {
      tabs: [
        { id: 1, title: 'Lundi', value: 'monday' },
        { id: 2, title: 'Mardi', value: 'tuesday' },
        { id: 3, title: 'Mercredi', value: 'wednesday' },
        { id: 4, title: 'Jeudi', value: 'thursday' },
        { id: 5, title: 'Vendredi', value: 'friday' },
        { id: 6, title: 'Samedi', value: 'saturday' },
        { id: 7, title: 'Dimanche', value: 'sunday' }
      ]
    };
  },
  computed: {
    ...mapGetters({
      weekMeals: 'weekMeals'
    })
  },
  methods: {
    ...mapActions({
      updateDayMeals: 'updateDayMeals',
      generateResults: 'generateResults'
    }),
    generateSynthesis() {
      this.generateResults();
      this.$router.push('/synthesis');
    }
  }
};
</script>
