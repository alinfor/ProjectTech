<template>
  <header class="bg-blue-500 p-4 flex justify-between items-center">
    <img src="@/assets/logo.jpg" alt="Logo" class="w-16 h-16">
    <nav class="space-x-4">
      <router-link to="/">Accueil</router-link>
      <router-link to="/liste">Liste</router-link>
      <router-link to="/favoris">Favoris</router-link>
    </nav>
  </header>
</template>
