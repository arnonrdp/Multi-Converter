<template>
  <div class="home">
    <Card scale="Temperature" alt="termometer" />
    <Card scale="Length" alt="ruler" />
    <Card scale="Time" alt="clock" />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: { Card },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
</style>
