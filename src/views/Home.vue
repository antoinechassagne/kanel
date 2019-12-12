<template>
  <div class="page-home">
    <h1>Kanel</h1>
    <button-router name="Week">Commencer</button-router>
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
