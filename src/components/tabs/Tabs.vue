<template>
  <div class="tabs">
    <nav class="tabs__navigation">
      <ul>
        <li
          v-for="tab in tabs"
          :key="tab.id"
          :class="getActiveClass(tab.id)"
          class="tab"
          @click="goToTab(tab.id)"
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
      currentTab: this.tabs[0]
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
    }
  },
  created() {
    this.goToTab(this.tabs[0].id);
  }
};
</script>
