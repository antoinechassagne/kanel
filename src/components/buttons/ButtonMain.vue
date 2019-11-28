
<template>
  <button @click="click">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonMain',
  methods: {
    click(event) {
      this.$emit('clicked', event);
    }
  }
};
</script>
