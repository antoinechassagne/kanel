/*eslint max-len: ["error", { "ignoreStrings": true }]*/

<template>
  <fragment>
    <h3 class="list__label">{{ label }}</h3>
    <ul class="list">
      <li v-for="item in items" :key="generateUniqueComponentKey()">
        <slot v-bind:item="item"></slot>
      </li>
    </ul>
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';
import generateUniqueComponentKey from '@/helpers/functions/generateUniqueComponentKey';

export default {
  name: 'List',
  components: {
    Fragment
  },
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
