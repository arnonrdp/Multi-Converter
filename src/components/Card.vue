<template>
  <router-link :to="scale">
    <div class="card">
      <img :src="scale + '.svg'" :alt="alt" />
      <h2>{{ scale }}</h2>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  scale: { type: String, required: true },
  alt: { type: String, required: true }
})
</script>

<style scoped>
.card {
  align-items: center;
  border-radius: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  height: 12rem;
  justify-content: center;
  margin: 10px;
  padding: 16px;
  transition: 0.3s;
  width: 12rem;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

img {
  height: auto;
  width: 6rem;
}

h2 {
  margin-bottom: 0;
}
</style>
