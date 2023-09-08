<template>
    <div>
      <h2 class="text-2xl font-semibold mb-4">Favoris</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <BaseCard
          v-for="movie in favoriteMovies"
          :key="movie.id"
          :title="movie.title"
          :description="movie.overview"
          :imageUrl="getMoviePosterUrl(movie)"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import BaseCard from '@/components/BaseCard.vue';
  import { useMoviesStore } from '@/store/index';
import { ref } from 'vue';
  
  const MovieStore = useMoviesStore();
  const favoriteMovies = ref([]); // Mettez ici la liste des films favoris
  
  const getMoviePosterUrl = (movie) => {
    return `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  };
  </script>
  