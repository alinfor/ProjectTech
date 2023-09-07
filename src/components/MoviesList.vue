<template>
    <div>
      <h2 class="text-2xl font-semibold mb-4">Liste des films</h2>
      <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <li v-for="movie in MovieStore.movies" :key="movie.id">
          <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <img :src="getMoviePosterUrl(movie)" alt="Movie Poster" class="w-full h-40 object-cover">
            <div class="p-4">
              <h3 class="text-xl font-semibold mb-2 truncate">{{ movie.title }}</h3>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  
<script setup>
    import { useMoviesStore } from '@/store/index';
    const MovieStore = useMoviesStore();
    const getMoviePosterUrl = (movie) => {
      return `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    };
    MovieStore.fetchMovies()
</script>
  