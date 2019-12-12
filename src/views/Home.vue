<template>
  <div>
    <base-header />
    <heading level="1">Kanel</heading>
    <button-router path="/menus">Commencer</button-router>
    <button-add @add="alert">Produit laitier</button-add>
    <button-remove @remove="alert">Remove</button-remove>
    <list label="Demo liste" :items="items">
      <template v-slot:default="{ item }">
        <p>{{ item.label }}</p>
        <p>{{ item.value }}</p>
      </template>
    </list>
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

export default {
  name: 'Home',
  components: {
    BaseHeader,
    BaseFooter,
    Heading,
    ButtonRouter,
    ButtonAdd,
    ButtonRemove,
    List
  },
  data() {
    return {
      items: [
        { label: 'Produit laitier', value: 3 },
        { label: 'Proteine animale', value: 1 },
        { label: 'Légumes', value: 4 }
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
