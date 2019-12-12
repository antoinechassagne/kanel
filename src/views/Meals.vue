<template>
  <div class="page-meals">
    <base-header />
    <heading level="1">Entrez vos repas</heading>
    <base-footer />
  </div>
</template>

<script>
import BaseHeader from '@/components/base/BaseHeader';
import BaseFooter from '@/components/base/BaseFooter';
import Heading from '@/components/texts/Heading';

export default {
  name: 'Week',
  components: {
    BaseHeader,
    BaseFooter,
    Heading
  }
};
</script>
