<template>
  <div>
    <BaseHeader />
    <Heading level="1">Kanel</Heading>
    <ButtonRouter path="/menus">Commencer</ButtonRouter>
    <ButtonMain @clicked="alert">click</ButtonMain>
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from '@/components/base/BaseHeader';
import BaseFooter from '@/components/base/BaseFooter';
import Heading from '@/components/texts/Heading';
import ButtonRouter from '@/components/buttons/ButtonRouter';
import ButtonMain from '@/components/buttons/ButtonMain';

export default {
  name: 'Home',
  components: {
    BaseHeader,
    BaseFooter,
    Heading,
    ButtonRouter,
    ButtonMain
  },
  methods: {
    alert() {
      window.alert('Button clicked');
    }
  }
};
</script>
