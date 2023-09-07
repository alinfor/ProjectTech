// src/store/movies.ts
import { defineStore } from 'pinia';
const apiKey = '4df52b94b523539d7321c081fe52b118';

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    movies: [],
    category: []
  }),

  actions: {
    async fetchMovies() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        this.movies = data.results;
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    },
    async fetchMoviesCategories() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        };

        const data = await response.json();
        this.category = data.genres;
        console.log(this.category);
        
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    },
},
});
