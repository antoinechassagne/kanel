<template>
  <div class="page page--horizontal-center page--vertical-center container">
    <heading level="1" class="mb--40">Kanel</heading>
    <p class="mb--30">
      Kanel permet de générer une recommandation de groupes d’aliments dont vous avez besoin pour
      maintenir une alimentation équilibrée sur toute une semaine.
    </p>
    <button-router name="Week">Commencer</button-router>
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
