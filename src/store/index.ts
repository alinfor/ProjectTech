// src/store/movies.ts
import { defineStore } from 'pinia';
const apiKey = '4df52b94b523539d7321c081fe52b118';


// Modifiez cette URL pour correspondre à l'API que vous utilisez
const apiUrl = 'https://api.themoviedb.org/3';

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    movies: [] as Movie[], // Tableau pour stocker les films
    categories: [] as Category[], // Tableau pour stocker les catégories de films
  }),

  actions: {
    // Action pour récupérer les derniers films
    async fetchLatestMovies() {
      try {
        const response = await fetch(`${apiUrl}/trending/movie/day?api_key=${apiKey}`);
        if (!response.ok) {
          throw new Error('Failed to fetch latest movies');
        }
        const data = await response.json();
        this.movies = data.results;
      } catch (error) {
        console.error('Error fetching latest movies:', error);
      }
    },

    // Action pour récupérer les catégories de films
    async fetchMovieCategories() {
      try {
        const response = await fetch(`${apiUrl}/genre/movie/list?api_key=${apiKey}`);
        if (!response.ok) {
          throw new Error('Failed to fetch movie categories');
        }
        const data = await response.json();
        
        this.categories = data.genres;
      } catch (error) {
        console.error('Error fetching movie categories:', error);
      }
    },
  },
});

// Types pour les films et les catégories de films
interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  // Ajoutez d'autres propriétés de film si nécessaire
}

interface Category {
  id: number;
  name: string;
  // Ajoutez d'autres propriétés de catégorie si nécessaire
}
