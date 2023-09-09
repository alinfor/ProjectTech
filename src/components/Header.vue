<template>
  <header class="bg-gray-800 p-4 flex justify-between items-center">
    <img src="@/assets/logo.jpg" alt="Logo" class="w-16 h-16">
    <nav class="space-x-4">
      <router-link to="/" class="text-white hover:text-blue-300">Accueil</router-link>
      <router-link to="/liste" class="text-white hover:text-blue-300">Liste</router-link>
      <router-link to="/favoris" class="text-white hover:text-blue-300">Favoris</router-link>
    </nav>
  </header>
</template>
