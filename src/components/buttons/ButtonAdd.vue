<template>
  <button @click="click">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonAdd',
  props: {
    actionButton: {
      type: Boolean,
      required: false,
      default() {
        return false;
      }
    }
  },
  methods: {
    click(event) {
      this.$emit('click', event);
    }
  }
};
</script>
