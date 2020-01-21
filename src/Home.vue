<template>
	<div id="home">
		<div class="top">
			<Showcase />
		</div>
		<div class="bottom">
			<ContactMe />
		</div>
	</div>
</template>

<script>
import Showcase from "./components/Showcase.vue";
import ContactMe from "./components/ContactMe.vue";

export default {
	name: "home",
	components: {
		Showcase,
		ContactMe
	}
};
</script>

<style lang="sass">
	#home
		height: 100vh
		background-color: $yellow
		color: $maroon
		display: flex
		flex-direction: column
		height: calc(100vh - 70px)
	.top
		flex-basis: 62%
	.bottom
		flex-basis: 38%

	.core-font
		font-size: 1.2em
	a
		color: $maroon

	h1
		font-family: Helvetica Neue, sans-serif
</style>