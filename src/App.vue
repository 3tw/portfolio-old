<template>
	<div id="app">
		<div class= "main">
			<div class="top">
				<NavBar />
				<Showcase />
			</div>
			<div class="bottom">
				<ContactMe />
			</div>
		</div>
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
		font-family: Muli, sans-serif
		line-height: 1.6em
		min-width: 320px

	.main
		display: flex
		flex-direction: column
		height: 100vh
	.top
		flex-basis: 60%
		background-color: $dark
		color: white
	.bottom
		flex-basis: 40%
		background-color: $dark
		color: white

	.core-font
		font-size: 1.2em
	a
		color: white

	h1
		font-family: Helvetica Neue, sans-serif
</style>