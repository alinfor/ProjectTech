<template>
    <div class="border-b border-gray-200">
      <nav class="flex" v-if="tabs.length">
        <div v-for="(tab, index) in tabs">
          <button
            :key="index"
            @click="setActiveTab(tab)"
            :class="{
              'border-b-2 border-blue-500': activeTab === tab,
              'text-gray-500 hover:text-gray-700': activeTab !== tab,
              'px-4 py-2': true
            }"
          >
            {{ tab }}
          </button>
        </div>
      </nav>
      <slot></slot>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const tabs = ref<string[]>([]);
  const activeTab = ref<string>('');
  
  const setActiveTab = (tab: string) => {
    activeTab.value = tab;
  };
  </script>
  