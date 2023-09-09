<template>
    <div>
      <h2 class="text-xl font-semibold mb-2">Catégories de films</h2>
      <select id="category" v-model="selectedCategory" @change="filterMoviesByCategory">
        <option value="" disabled>Sélectionnez une catégorie</option>
        <option v-for="category in MovieStore.categories" :value="category.id" :key="category.id">{{ category.name }}</option>
      </select>
      <p class="mt-2 text-sm text-gray-500" v-if="selectedCategory">Catégorie sélectionnée : {{ selectedCategoryName }}</p>
  
      <!-- Liste des films filtrés -->
      <div v-if="filteredMovies.length > 0">
        <h2 class="text-xl font-semibold mb-2">Films de la catégorie {{ selectedCategoryName }}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <BaseCard
            v-for="movie in filteredMovies"
            :key="movie.id"
            :title="movie.title"
            :description="movie.overview"
            :imageUrl="getMoviePosterUrl(movie)"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useMoviesStore } from '@/store/index';
  import { ref, computed } from 'vue';
  import BaseCard from './BaseCard.vue';
  
  const MovieStore = useMoviesStore();
  MovieStore.fetchMovieCategories();
  MovieStore.fetchLatestMovies();
  
  const selectedCategory = ref('');
  const filteredMovies = computed(() => {

    if (!selectedCategory.value) {
      return MovieStore.movies;
    }
  
    const categoryId = parseInt(selectedCategory.value);
    return MovieStore.movies.filter((movie) => movie.genre_ids.includes(categoryId));
  });
  
  const selectedCategoryName = computed(() => {
    if (!selectedCategory.value) {
      return '';
    }
  
    const category = MovieStore.categories.find((cat) => cat.id === parseInt(selectedCategory.value));
    return category ? category.name : '';
  });
  
  const filterMoviesByCategory = () => {
    // La liste des films sera automatiquement mise à jour grâce à computed
  };
  
  const getMoviePosterUrl = (movie) => {
    return `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  };
  </script>
  