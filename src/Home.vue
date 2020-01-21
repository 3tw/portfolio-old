<template>
	<div id="home" class="grid">
		<div class="top content-wrap">
			<Showcase />
		</div>
		<div class="bottom content-wrap">
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
	align-items: center
.top
	flex-basis: 62%
.bottom
	flex-basis: 38%
</style>