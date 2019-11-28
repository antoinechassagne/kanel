
<template>
  <router-link :to="route">
    <slot />
  </router-link>
</template>

<script>
export default {
  name: 'ButtonRouter',
  props: {
    path: {
      type: String,
      required: true
    },
    params: {
      type: Object | Array
    }
  },
  computed: {
    route() {
      return {
        path: this.path,
        params: this.params
      };
    }
  }
};
</script>
