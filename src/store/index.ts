// src/store/movies.ts
import { defineStore } from 'pinia';
const apiKey = '4df52b94b523539d7321c081fe52b118';


// Modifiez cette URL pour correspondre à l'API que vous utilisez
const apiUrl = 'https://api.themoviedb.org/3';

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    movies: [] as Movie[], // Tableau pour stocker les films
    categories: [] as Category[], // Tableau pour stocker les catégories de films
    favorites: [] as Movie[], // Tableau pour stocker les film favorie
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
    addToFavorites(favorie: MovieFav) {
      
      // Vérifiez si le film est déjà dans la liste des favoris
      const isAlreadyFavorite = this.favorites.some((fav) => fav.title === favorie.title);
      
      if (!isAlreadyFavorite) {
        // Ajoutez le film à la liste des favoris s'il n'est pas déjà présent
        this.favorites.push(favorie);
        
        // Mettez à jour l'état isFav du film correspondant dans la liste movies
        const movieIndex = this.movies.findIndex((movie) => movie.title === favorie.title);
        if (movieIndex !== -1) {
          this.movies[movieIndex].isFav = true;
        }
      }
    },
  
    removeFavorites(favorie: MovieFav) {
      // Vérifiez s'il y a un seul film favori à supprimer
      if (this.favorites.length === 1 && this.favorites[0].title === favorie.title) {
        this.favorites = [];
      } else {
        // Supprimez le film de la liste des favoris
        this.favorites = this.favorites.filter((fav) => fav.title !== favorie.title);
      }
    
      // Parcourez la liste des films et mettez à jour leur état isFav
      this.movies.forEach((movie) => {
        if (movie.title === favorie.title) {
          movie.isFav = false;
        }
      });
    },
    
  },
});

// Types pour les films et les catégories de films
interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  isFav: Boolean;
  // Ajoutez d'autres propriétés de film si nécessaire
}
interface MovieFav {
  altText?:string;
  description?:string;
  imageUrl?:string;
  title?: string;
  isFav?: Boolean;
  // Ajoutez d'autres propriétés de film si nécessaire
}
interface Category {
  id: number;
  name: string;
  // Ajoutez d'autres propriétés de catégorie si nécessaire
}