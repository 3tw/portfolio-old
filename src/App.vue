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
	line-height: 1.8em
	min-width: 320px
	font-size: 1.2em
	width: 100vw
a
	color: $maroon
a:hover
	opacity: 0.3

h1
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
	margin-right: 0.5em
.btn:hover
	opacity: 0.3
	transition: 0.15s ease-out
.content-wrap.bottom-pad
	padding-bottom: 2em

.project-content
	height: calc(100vh - 70px)
	background-color: $yellow
	color: $maroon
	text-align: left
	overflow: scroll
	padding: 1em
img
	width: 100%

//media queries
@media screen and ( min-width: 500px )
	.grid
		display: grid
		grid-template-columns: minmax(2em, auto) minmax(auto, 8em) repeat(2, minmax(5em, 20em)) minmax(auto, 8em) minmax(2em, auto)
		grid-auto-rows: min-content
	.content-wrap,
		grid-column: 2/6
		padding-top: 0.5em
		padding-bottom: 0.5em
	.proj-wrap
		grid-column: 3/5
		margin-top: 0.5em
		margin-bottom: 0.5em
	.image-wrap
		grid-column: 2/6
		margin-top: 0.5em
		margin-bottom: 0.5em
	.mobile
		grid-column: 2/6
		min-width: 250px
		max-wodth: 450px
		justify-self: center
	.text-wrap.p1,
	.text-wrap.p2,
	.text-wrap.p3,
		visibility: hidden
		opacity: 0

@media screen and ( min-width: 700px )
	.title
		font-size: 1.6em
	.proj-title
		font-size: 1.6em

@media screen and ( min-width: 1000px )
	.content-wrap
		grid-column: 3/5
</style>
