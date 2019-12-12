<template>
  <div class="page-week">
    <base-header />
    <heading level="1">Les menus de vos enfants pour toute la semaine</heading>
    <tabs :tabs="tabs">
      <template v-slot:tab-navigation="{ tab }">{{ tab.title }}</template>
      <template v-slot:tab-content="{ currentTab }">
        Contenu du tab {{ currentTab.id }}
        <button-router name="Meals" :params="{ day: currentTab.id }"
          >Ajouter des repas
        </button-router>
      </template>
    </tabs>
    <base-footer />
  </div>
</template>

<script>
import BaseHeader from '@/components/base/BaseHeader';
import BaseFooter from '@/components/base/BaseFooter';
import Heading from '@/components/texts/Heading';
import Tabs from '@/components/tabs/Tabs';
import ButtonRouter from '@/components/buttons/ButtonRouter';

export default {
  name: 'Week',
  components: {
    BaseHeader,
    BaseFooter,
    Heading,
    Tabs,
    ButtonRouter
  },
  data() {
    return {
      tabs: [
        { id: 1, title: 'Lundi' },
        { id: 2, title: 'Mardi' },
        { id: 3, title: 'Mercredi' },
        { id: 4, title: 'Jeudi' },
        { id: 5, title: 'Vendredi' },
        { id: 6, title: 'Samedi' },
        { id: 7, title: 'Dimanche' }
      ]
    };
  }
};
</script>
