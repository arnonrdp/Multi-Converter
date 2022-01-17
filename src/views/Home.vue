<template>
  <div class="home">
    <Cards scale="Temperature" alt="termometer" />
    <Cards scale="Length" alt="ruler" />
    <Cards scale="Time" alt="clock" />
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";

export default {
  name: "Home",
  components: {
    Cards,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
</style>
