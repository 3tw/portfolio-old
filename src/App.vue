<template>
	<div id="app">
		<div id="nav">
			<NavBar />
		</div>
		<div id="main">
			<router-view />
		</div>
		<div id="foot">
			<Footer />
		</div>
	</div>
</template>

<script>
import NavBar from "./components/layout/NavBar.vue";
import Footer from "./components/layout/Footer.vue";

export default {
	name: "app",
	components: {
		NavBar,
		Footer
	}
};
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

*
	box-sizing: border-box
	margin: 0
	padding: 0

html
	font-size: 16px

body
	font-family: Muli, sans-serif
	line-height: 1.4em
	min-width: 320px
	width: 100vw
	height: 100vh
a
	color: $black
	text-decoration: none

h1, h2
	font-family: Arial, sans-serif

h2
	font-weight: lighter

#app
	height: 100%
	display: flex
	flex-direction: column

#nav
	flex: 0 0 4.5rem

#main
	flex: 1 0 auto

#foot
	flex: 0 0 3.1rem

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

img
	width: 100%

.top-margin-5
	margin-top: 5rem

.bottom-padding-3
	padding-bottom: 3rem

//old

.content-wrap.bottom-pad
	padding-bottom: 2em

.project-content
	height: calc(100vh - 70px)
	background-color: $yellow
	color: $maroon
	text-align: left
	overflow: scroll
	padding: 1em
//media queries
@media screen and ( min-width: 500px )
	.grid
		display: grid
		grid-template-columns: repeat(4, 1fr)
		grid-gap: 1rem
	.text-left
		grid-column: 1/4

	//old	
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
		max-width: 450px
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
