<template>
  <div>
    <ul>
      <li v-for="movie in MovieStore.category" :key="movie">
        {{ movie.name }}
      </li>
    </ul>
  </div>
</template>

  
<script setup>
    import { useMoviesStore } from '@/store/index';
    const MovieStore = useMoviesStore();
    MovieStore.fetchMoviesCategories();
</script>
  