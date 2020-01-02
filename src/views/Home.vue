<template>
  <div class="page container">
    <heading level="1" class="mb--40">Kanel</heading>
    <ButtonRouter name="Week">Commencer</ButtonRouter>
  </div>
</template>

<script>
import Heading from '@/components/texts/Heading';
import ButtonRouter from '@/components/buttons/ButtonRouter';

export default {
  name: 'Home',
  components: {
    Heading,
    ButtonRouter
  }
};
</script>
