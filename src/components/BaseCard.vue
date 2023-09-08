<template>
    <div class="bg-white shadow-md rounded-md overflow-hidden">
      <img :src="imageUrl" :alt="altText" class="w-full h-40 object-cover">
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2 text-black truncate">{{ title }}</h3>
        <p class="text-gray-900 truncate">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  interface BaseCardProps {
    imageUrl?: string;
    altText?: string;
    title?: string;
    description?: string;
  }
  
  const props: BaseCardProps = defineProps({
    imageUrl: String,
    altText: String,
    title: String,
    description: String,
  });
  </script>
  