<template>
  <div>
    <Heading level="1">Kanel</Heading>
    <ButtonRouter path="about">Welcome</ButtonRouter>
    <ButtonMain @clicked="alert">click</ButtonMain>
  </div>
</template>

<script>
import Heading from '@/components/Heading';
import ButtonRouter from '@/components/ButtonRouter';
import ButtonMain from '@/components/ButtonMain';

export default {
  name: 'Home',
  components: {
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
