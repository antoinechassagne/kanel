<template>
  <div>
    <BaseHeader />
    <Heading level="1">Kanel</Heading>
    <ButtonRouter path="/menus">Commencer</ButtonRouter>
    <ButtonAdd @add="alert">Produit laitier</ButtonAdd>
    <ButtonRemove @remove="alert">Remove</ButtonRemove>
    <List label="Demo liste" :items="items">
      <template v-slot:default="{ item }">
        <p>{{ item.label }}</p>
        <p>{{ item.value }}</p>
      </template>
    </List>
    <BaseFooter />
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
