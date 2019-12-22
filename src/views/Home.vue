<template>
  <div class="page-home">
    <h1>Kanel</h1>
    <ButtonRouter name="Week">Commencer</ButtonRouter>
  </div>
</template>

<script>
import ButtonRouter from '@/components/buttons/ButtonRouter';

export default {
  name: 'Home',
  components: {
    ButtonRouter
  }
};
</script>
