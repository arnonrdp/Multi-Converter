<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/temperature">Temperature</RouterLink>
      <RouterLink to="/length">Length</RouterLink>
      <RouterLink to="/time">Time</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  margin-bottom: 5vh;
  padding: 30px;
  text-align: center;
  width: 100%;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid rgba(60, 60, 60, 0.66);
}

nav a:first-of-type {
  border: 0;
}

nav a:hover {
  text-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2), 2px -4px 35px rgba(255, 255, 255, 0.3);
}
</style>
