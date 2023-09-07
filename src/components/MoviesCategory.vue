<template>
  <div>
    <div class="mt-2 flex flex-col md:flex-row items-center">
      <select id="category" v-model="selectedCategory" class="block w-full md:w-64 p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300">
        <option value="" disabled>Sélectionnez une catégorie</option>
        <option v-for="category in MovieStore.category" :value="category" :key="category.id">{{ category.name }}</option>
      </select>
    </div>
    <p class="mt-2 text-sm text-gray-500" v-if="selectedCategory">Catégorie sélectionnée : {{ selectedCategory.name  }}</p>
  </div>
</template>

  
<script setup>
    import { useMoviesStore } from '@/store/index';
import { ref } from 'vue';
    const MovieStore = useMoviesStore();
    MovieStore.fetchMoviesCategories();
    const selectedCategory = ref('');
</script>
  