<template>
  <button @click="click">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonRemove',
  methods: {
    click(event) {
      this.$emit('remove', event);
    }
  }
};
</script>
