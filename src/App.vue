<template>
  <div id="app">
    <BaseHeader />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
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
