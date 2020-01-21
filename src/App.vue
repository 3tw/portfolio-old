<template>
	<div id="app">
		<div id="nav">
			<NavBar />
		</div>
		<transition name="fade">
			<router-view />
		</transition>
	</div>
</template>

<script>
import NavBar from "./components/layout/NavBar.vue";

export default {
	name: "app",
	components: {
		NavBar
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
		line-height: 1.4em
		min-width: 320px
		font-size: 1.2em
	a
		color: $maroon

	h1, h2
		font-family: Helvetica Neue, sans-serif
	.grid
		padding: 1em
		text-align: left
</style>
