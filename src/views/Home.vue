<template>
  <div>
    <BaseHeader />
    <Heading level="1">Kanel</Heading>
    <ButtonRouter path="/menus">Commencer</ButtonRouter>
    <ButtonAdd @clicked="alert">Produit laitier</ButtonAdd>
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from '@/components/base/BaseHeader';
import BaseFooter from '@/components/base/BaseFooter';
import Heading from '@/components/texts/Heading';
import ButtonRouter from '@/components/buttons/ButtonRouter';
import ButtonAdd from '@/components/buttons/ButtonAdd';

export default {
  name: 'Home',
  components: {
    BaseHeader,
    BaseFooter,
    Heading,
    ButtonRouter,
    ButtonAdd
  },
  methods: {
    alert() {
      window.alert('Button clicked');
    }
  }
};
</script>
