<script setup lang="ts">
import MoviesCategory from './MoviesCategory.vue';


</script>

<template>
  <header class="bg-[#003141] py-4">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <div class="flex items-center justify-center md:justify-start">
        <img src="../assets/logo.jpg" class="h-13 w-20" alt="Logo">
      </div>
      <div class="md:mt-0 mt-4">
        <MoviesCategory/>
      </div>
    </div>
  </header>
</template>