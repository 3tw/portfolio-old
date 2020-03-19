<template>
	<div id="home">
		<Showcase />
	</div>
</template>

<script>
import Showcase from "./Showcase.vue";

export default {
	name: "home",
	components: {
		Showcase
	}
};
</script>

<style lang="sass">
#home
	background-color: $white
	height: 100%
</style>