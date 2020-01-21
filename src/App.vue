<template>
	<div id="app">
		<div id="nav">
			<NavBar />
		</div>
		<router-view />
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
		line-height: 1.6em
		min-width: 320px

	//fade transition
	.fade-enter
		opacity: 1
	.fade-enter-active
		transition: opacity 0.5s ease
	.fade-leave-active
		transition: opacity 0.2s ease-out
	.fade-leave-to
		opacity: 0

</style>
