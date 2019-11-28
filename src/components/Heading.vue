<template>
  <component :is="`h${level}`">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    level: {
      type: Number | String,
      required: true,
      default: 1
    }
  }
};
</script>
