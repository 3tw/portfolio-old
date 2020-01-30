<template>
	<div id="home">
		<div>
			<Showcase />
		</div>
	</div>
</template>

<script>
import Showcase from "./components/Showcase.vue";

export default {
	name: "home",
	components: {
		Showcase
	},
};
</script>

<style lang="sass">
#home
	background-color: $white
	display: flex
	flex-direction: column
	align-items: center
</style>