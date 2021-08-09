<template>
	<div class="home">
		<Cards scale="Temperature" path="temperature.svg" alt="termometer" />
		<Cards scale="Length" path="length.svg" alt="ruler" />
		<Cards scale="Time" path="time.svg" alt="clock" />
	</div>
</template>

<script>
import Cards from '@/components/Cards.vue'

export default {
	name: "Home",
	components: {
		Cards
	}
};
</script>

<style scoped>
.home {
	display: flex;
	justify-content: center;
	flex-flow: row wrap;
}
</style>