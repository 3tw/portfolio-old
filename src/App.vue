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
	min-height: 100%

body
	font-family: Muli, sans-serif
	line-height: 1.4em
	min-width: 320px
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
	flex: 0 0 5rem

#main
	flex: 1 0 auto
	overflow-x: hidden

#foot
	flex: 0 0 5rem

.btn
	border-radius: 3px
	border-width: 2px
	border-style: solid
	display: inline-block
	text-decoration: none
	padding: 0.3rem 1.4rem 0.3rem 1.4rem
	margin-right: 0.5em
	margin-bottom: 0.5em
	border-color: $red
	font-size: 1.2rem
.btn:hover
	opacity: 0.3
	transition: 0.15s ease-out

a.btn 
	color: red

.top-margin-4
	margin-top: 4rem

.bottom-padding-3
	padding-bottom: 3rem

//old

//media queries
@media screen and ( min-width: 500px )
	.grid
		display: grid
		grid-template-columns: repeat(4, 1fr)
		grid-gap: 1rem
	.text-left
		grid-column: 1/4
	

@media screen and ( min-width: 700px )
	.title
		font-size: 1.6em
	.proj-title
		font-size: 1.6em

</style>
