<template>
  <div>
    <h3>{{ label }}</h3>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <slot v-bind:item="item"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    label: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
};
</script>
