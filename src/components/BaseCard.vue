<template>
    <div class="bg-white shadow-md rounded-md overflow-hidden">
      <img :src="imageUrl" :alt="altText" class="w-full h-40 object-cover">
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2 text-black truncate">{{ title }}</h3>
        <p class="text-gray-900 truncate">{{ description }}</p>
        <button @click="newFav">
        {{ Moviefav.isFavorite ? 'Remove from favorites' : 'Add to favorites' }}
      </button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
import { useMoviesStore } from '../store/index';
  const MovieStore = useMoviesStore();
  
  
  interface BaseCardProps {
      imageUrl?: string;
    altText?: string;
    title?: string;
    description?: string;
    isFavorite?:Boolean;
  }
  
  const props: BaseCardProps = defineProps({
      imageUrl: String,
      altText: String,
    title: String,
    description: String,
    isFavorite:Boolean
});
const Moviefav ={
    description:props.description|| undefined,
    imageUrl:props.imageUrl ||undefined,
    title: props.title || undefined,
    isFavorite:props.isFavorite ,
}
  const newFav = () => {
    if (Moviefav.isFavorite) {
    MovieStore.removeFavorites(Moviefav); // Utilisez la fonction de suppression
    Moviefav.isFavorite =false
  } else {
    Moviefav.isFavorite =true
    MovieStore.addToFavorites(Moviefav);
  }

};
</script>
  