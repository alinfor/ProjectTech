<script setup lang="ts">
import MoviesCategory from './MoviesCategory.vue';


</script>

<template>
  <header className="bg-[#003141] py-4">
    <div className="container mx-auto flex justify-between items-center">
      <div>
        <img src="../assets/logo.jpg" class="h-13 w-20">
      </div>
    </div>
    <MoviesCategory/>
  </header>
</template>