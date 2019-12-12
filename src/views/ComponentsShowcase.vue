<template>
  <div class="page-components-showcase">
    <base-header />
    <heading level="1">Kanel</heading>
    <button-router name="Week">Commencer</button-router>
    <button-add @add="alert">Produit laitier</button-add>
    <button-remove @remove="alert">Remove</button-remove>
    <list label="Demo liste" :items="items">
      <template v-slot:default="{ item }">
        <p>{{ item.label }}</p>
        <p>{{ item.value }}</p>
      </template>
    </list>
    <tabs :tabs="tabs">
      <template v-slot:tab-navigation="{ tab }">{{ tab.title }}</template>
      <template v-slot:tab-content="{ currentTab }">Contenu du tab {{ currentTab.id }}</template>
    </tabs>
    <base-footer />
  </div>
</template>

<script>
import BaseHeader from '@/components/base/BaseHeader';
import BaseFooter from '@/components/base/BaseFooter';
import Heading from '@/components/texts/Heading';
import ButtonRouter from '@/components/buttons/ButtonRouter';
import ButtonAdd from '@/components/buttons/ButtonAdd';
import ButtonRemove from '@/components/buttons/ButtonRemove';
import List from '@/components/texts/List';
import Tabs from '@/components/tabs/Tabs';

export default {
  name: 'ComponentsShowcase',
  components: {
    BaseHeader,
    BaseFooter,
    Heading,
    ButtonRouter,
    ButtonAdd,
    ButtonRemove,
    List,
    Tabs
  },
  data() {
    return {
      items: [
        { label: 'Produit laitier', value: 3 },
        { label: 'Proteine animale', value: 1 },
        { label: 'Légumes', value: 4 }
      ],
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
  },
  methods: {
    alert() {
      window.alert('Button clicked');
    }
  }
};
</script>
