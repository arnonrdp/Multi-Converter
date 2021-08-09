<template>
	<router-link :to="scale">
		<div class="card">
			<img :src="path" :alt="alt" />
			<h2>{{ scale }}</h2>
		</div>
	</router-link>
</template>

<script>
export default {
	name: "Cards",
	props: ["scale", "path", "alt"],
};
</script>

<style scoped>
.card {
	width: 12rem;
	height: 12rem;
	margin: 10px;
	padding: 16px;
	border-radius: 12px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card:hover {
	box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
	padding: 2px 16px;
}

img {
	width: 6rem;
	height: auto;
}

h2 {
  margin-bottom: 0;
}
</style>