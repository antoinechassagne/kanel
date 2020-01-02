<template>
  <div class="tabs">
    <nav class="tabs__navigation mb--20">
      <ul>
        <li
          v-for="tab in tabs"
          :key="tab.id"
          :class="getActiveClass(tab.id)"
          class="tab"
          @click="
            goToTab(tab.id);
            emitCurrentTab();
          "
        >
          <slot name="tab-navigation" :tab="tab" />
        </li>
      </ul>
    </nav>
    <main class="tab__content">
      <keep-alive>
        <slot name="tab-content" :currentTab="currentTab" />
      </keep-alive>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data() {
    return {
      currentTab: {}
    };
  },
  props: {
    tabs: {
      type: Array,
      required: true
    }
  },
  methods: {
    goToTab(tabId) {
      this.currentTab = this.tabs.find(tab => tab.id === tabId);
    },
    getActiveClass(tabId) {
      return this.currentTab.id === tabId ? 'tab--active' : '';
    },
    emitCurrentTab() {
      this.$emit('tabClicked', this.currentTab);
    }
  },
  created() {
    this.goToTab(this.tabs[0].id);
  }
};
</script>
