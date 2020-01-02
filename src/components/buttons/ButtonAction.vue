<template>
  <button @click="click" :class="type">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonAction',
  props: {
    type: {
      type: String,
      required: true,
      validator: value => ['action', 'add', 'remove'].includes(value)
    }
  },
  methods: {
    click(event) {
      this.$emit('action', event);
    }
  }
};
</script>
