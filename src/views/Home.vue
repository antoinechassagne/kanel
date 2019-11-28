<template>
  <div>
    <Heading level="1">Kanel</Heading>
    <ButtonRouter path="about">Welcome</ButtonRouter>
  </div>
</template>

<script>
// @ is an alias to /src
import Heading from '@/components/Heading';
import ButtonRouter from '@/components/ButtonRouter';

export default {
  name: 'Home',
  components: {
    Heading,
    ButtonRouter
  }
};
</script>
