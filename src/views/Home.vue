<script setup>
import Card from '@/components/Card.vue'
</script>

<template>
  <main>
    <Card scale="Temperature" alt="termometer" />
    <Card scale="Length" alt="ruler" />
    <Card scale="Time" alt="clock" />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
</style>
