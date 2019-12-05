<template>
  <button @click="click">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonAdd',
  methods: {
    click(event) {
      this.$emit('add', event);
    }
  }
};
</script>
