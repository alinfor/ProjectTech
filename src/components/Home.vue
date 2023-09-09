<template>
    <div class="bg-cover bg-center min-h-screen">
    <!-- Afficher une image de film au hasard en arrière-plan -->
    <div  class="w-full h-screen bg-cover bg-center mb-8">

      <!-- Contenu de la page d'accueil -->
      <div class="container mx-auto pt-20 text-black text-center">
        <h1 class="text-4xl font-semibold mb-4">Bienvenue sur notre site de films</h1>
        <p class="text-lg mb-8">Découvrez les derniers films du moment</p>
        <!-- Liste des 4 films du moment -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <BaseCard
            v-for="movie in latestMovies"
            :key="movie.id"
            :title="movie.title"
            :description="movie.overview"
            :imageUrl="getMoviePosterUrl(movie)"
          />
        </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useMoviesStore } from '@/store/index';
  import BaseCard from '@/components/BaseCard.vue';
  import { computed } from 'vue';
  
  const MovieStore = useMoviesStore();
  MovieStore.fetchLatestMovies();
  
  const getMoviePosterUrl = (movie) => {
  if (movie && movie.backdrop_path) {
    console.log(movie.backdrop_path);
    return `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
  } else {
    return ''; // ou une URL par défaut si backdrop_path n'est pas défini
  }
};
  
  const latestMovies = computed(() => {
    // Vous pouvez trier les films comme vous le souhaitez, par exemple, par date de sortie.
    return MovieStore.movies.slice(0, 4); // Prenez les 4 premiers films (ou triez-les selon vos besoins)
  });
  
  // Fonction pour obtenir une image de film au hasard à partir du store
  const getRandomMovieImageUrl = () => {
    const randomIndex = Math.floor(Math.random() * MovieStore.movies.length);
    const randomMovie = MovieStore.movies[randomIndex];
    return getMoviePosterUrl(randomMovie);
  };
  </script>
  