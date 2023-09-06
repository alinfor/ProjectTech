<template>
    <div>
      <h2>Liste des films</h2>
      <ul>
        <li v-for="movie in movies" :key="movie.id">
          {{ movie.title }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { onMounted } from 'vue';
  import { useMoviesStore } from '../store/index';
  
  export default {
    setup() {
      const { movies, fetchMovies } = useMoviesStore();
  
      // Appeler fetchMovies lors de l'initialisation du composant
      onMounted(fetchMovies);
  
      return {
        movies,
      };
    },
  };
  </script>
  