<template>
    <div>
      <h2 class="text-2xl font-semibold mb-4">Favoris</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <BaseCard
          v-for="favorie in favoriteMovies"
          :key="favorie.id"
          :title="favorie.title"
          :description="favorie.overview"
          :imageUrl="favorie.imageUrl"
          :isFavorite="favorie.isFavorite"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import BaseCard from '@/components/BaseCard.vue';
  import { useMoviesStore } from '@/store/index';
import { computed } from 'vue';

  const MovieStore = useMoviesStore();
  const favoriteMovies = computed(() => {
  return MovieStore.favorites;
});
  
  const getMoviePosterUrl = (favoris) => {
    return `https://image.tmdb.org/t/p/w500${movi.poster_path}`;
  };
  </script>
  