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
	//height: calc(100vh - 3.125rem - 4.5rem)
	align-items: center

.content-wrap
	position: relative
	top: 25%
</style>