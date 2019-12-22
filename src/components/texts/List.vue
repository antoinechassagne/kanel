<template>
  <div>
    <h3>{{ label }}</h3>
    <ul>
      <li v-for="item in items" :key="generateUniqueComponentKey()">
        <slot v-bind:item="item"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
import generateUniqueComponentKey from '@/helpers/functions/generateUniqueComponentKey';

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
  },
  methods: {
    generateUniqueComponentKey
  }
};
</script>
