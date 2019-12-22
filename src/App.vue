<template>
  <div id="app">
    <BaseHeader />
    <router-view />
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from '@/components/base/BaseHeader';
import BaseFooter from '@/components/base/BaseFooter';

export default {
  name: 'App',
  components: {
    BaseHeader,
    BaseFooter
  }
};
</script>

<style lang="scss">
@import '@/scss/main.scss';
</style>
