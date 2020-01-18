<template>
	<div id="app">
		<NavBar />
		<Showcase />
		<ContactMe />
	</div>
</template>

<script>
import NavBar from './components/layout/NavBar.vue';
import Showcase from './components/layout/Showcase.vue';
import ContactMe from './components/ContactMe.vue';

export default {
	name: "app",
	components: {
		NavBar,
		Showcase,
		ContactMe,
	}
};
</script>

<style lang="sass">
	*
		box-sizing: border-box
		margin: 0
		padding: 0

	body
		font-family: Arial, Helvetica, sans-serif
		line-height: 1.4em
		background-color: $yellow
		color: $maroon

</style>