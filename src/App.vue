<template>
  <div id="app">
    <BaseHeader :generation="generateSynthesis" />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <BaseFooter />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import BaseHeader from '@/components/base/BaseHeader';
import BaseFooter from '@/components/base/BaseFooter';

export default {
  name: 'App',
  components: {
    BaseHeader,
    BaseFooter
  },
  methods: {
    ...mapActions({
      generateResults: 'generateResults'
    }),
    generateSynthesis() {
      this.generateResults();
      this.$router.push('/synthesis');
    }
  }
};
</script>

<style lang="scss">
@import '@/scss/main.scss';
</style>
