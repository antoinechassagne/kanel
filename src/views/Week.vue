<template>
  <div class="page-week">
    <BaseHeader />
    <heading level="1">Les menus de la semaine</heading>
    <button v-on:click="generation">Générer</button>
    <Tabs :tabs="tabs">
      <template v-slot:tab-navigation="{ tab }">{{ tab.title }}</template>
      <template v-slot:tab-content="{ currentTab }">
        <div>
          <SegmentDayMeals :day="weekMeals[currentTab.value]" />
          <ButtonRouter name="Meals" :params="{ day: currentTab.value }">
            Ajouter des repas
          </ButtonRouter>
        </div>
      </template>
    </Tabs>
    <BaseFooter />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BaseHeader from '@/components/base/BaseHeader';
import BaseFooter from '@/components/base/BaseFooter';
import Heading from '@/components/texts/Heading';
import Tabs from '@/components/tabs/Tabs';
import ButtonRouter from '@/components/buttons/ButtonRouter';
import SegmentDayMeals from '@/segments/SegmentDayMeals';

export default {
  name: 'Week',
  components: {
    BaseHeader,
    BaseFooter,
    Heading,
    Tabs,
    ButtonRouter,
    SegmentDayMeals
  },
  data() {
    return {
      tabs: [
        { id: 1, title: 'Lundi', value: 'monday' },
        { id: 2, title: 'Mardi', value: 'thuesday' },
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
    generation() {
      this.generateResults();
      this.$router.push('/synthesis');
    }
  }
};
</script>
