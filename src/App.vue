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
.title
  font-size: 1.3em
  font-weight: 200

//media queries
@media screen and ( min-width: 500px )
	.grid
		display: grid
		grid-template-columns: minmax(2em, auto) repeat(2, minmax(auto, 20em)) minmax(2em, auto)
	.content-wrap
		grid-column: 2/4

@media screen and ( min-width: 700px )
	.title
		font-size: 1.6em
</style>
