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
	line-height: 1.4em
	min-width: 320px
	font-size: 1.2em
a
	color: $maroon

h1, h2
	font-family: Helvetica Neue, sans-serif

.title
	font-size: 1.3em
	font-weight: 200
.proj-title
	font-size: 1.3em
.btn
	border-radius: 3px
	border-width: 2px
	border-style: solid
	display: inline-block
	text-decoration: none
	padding-right: 1.2em
	padding-left: 1.2em
	padding-top: 0.2em
	padding-bottom: 0.2em
	margin-bottom: 0.5em
	border-color: $maroon
.btn:hover
	opacity: 0.3
	transition: 0.15s ease-out


//media queries
@media screen and ( min-width: 500px )
	.grid
		display: grid
		grid-template-columns: minmax(2em, auto) repeat(2, minmax(auto, 21em)) minmax(2em, auto)
	.content-wrap
		grid-column: 2/4
	.content-wrap
		padding-top: 0.5em
		padding-bottom: 0.5em

@media screen and ( min-width: 700px )
	.title
		font-size: 1.6em
	.proj-title
		font-size: 1.6em
</style>
