
<template>
  <router-link :to="route">
    <slot />
  </router-link>
</template>

<script>
export default {
  name: 'ButtonRouter',
  props: {
    name: {
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
        name: this.name,
        params: this.params
      };
    }
  }
};
</script>
