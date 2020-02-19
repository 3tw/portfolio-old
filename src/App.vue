<template>
	<div id="app">
		<div id="nav">
			<NavBar />
		</div>
		<div id="main">
			<page-transition >
				<router-view />
			</page-transition>
		</div>
		<div id="foot">
			<Footer />
		</div>
	</div>
</template>

<script>
import NavBar from "./components/layout/NavBar.vue";
import Footer from "./components/layout/Footer.vue";
import PageTransition from "./components/PageTransition.vue"

export default {
	name: "app",
	components: {
		NavBar,
		Footer,
		PageTransition
	},
	created() {
		let preload = new Array();

		preload[0] = "../img/climate-cover3.8db79473.jpg";
		preload[1] = "../img/t3v-cover.7312c765.jpg";
		preload[2] = "../img/tom-preview.7ee60f2d.jpg";

		let loadedimages = new Array();
		for (let i = 0; i < preload.length; i++) {
			loadedimages[i] = new Image();
			loadedimages[i].src = preload[i];
		}
	}
};
</script>


<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Muli:200,300&display=swap');

@font-face
	font-family: "CABNDWebBold"
	src: url("./assets/fonts/CABNDWebBold.otf") format("otf")

// core css
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
	overflow-x: hidden
a
	color: $black
	text-decoration: none

h2
	font-family: Muli, sans-serif
	font-size: 1.875rem

#app
	height: 100%
	display: flex
	flex-direction: column

#nav
	flex: 0 0 6rem

#main
	flex: 1 0 auto
	overflow-x: hidden

#foot
	flex: 0 0 6rem

//version with buttons
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
	color: $red

.top-margin-3
	margin-top: 3rem
.top-margin-2
	margin-top: 2rem
.top-padding-2
	padding-top: 2rem
.top-padding-3
	padding-top: 3rem
.bottom-padding-1
	padding-bottom: 1rem
.bottom-padding-2
	padding-bottom: 2rem
.bottom-padding-3
	padding-bottom: 3rem
.column-center
	text-align: center
.underline
	text-decoration: underline

// project display
.project-content
	margin: 0 1.5rem 0 1.5rem 
.proj-title
	text-align: left
	line-height: 2rem
.proj-description p,
.proj-description span
	line-height: 1.6rem
	font-size: 1.2rem
	font-weight: 300
	color: $black
.image-wrap,
.image-wrap-mobile
	width: 100%
	line-height: 0
	position: relative
.image-wrap-mobile
	text-align: center
.image-wrap img
	width: 100%
.image-wrap-mobile img
	width: 100%

//media queries
@media screen and ( min-width: 700px )
	.grid
		display: grid
		grid-template-columns: repeat(4, 1fr)
		grid-gap: 1rem
	.column-1-5
		grid-column: 1/5
	.column-1-4
		grid-column: 1/4
	.column-1-3
		grid-column: 1/3
	.column-1-2
		grid-column: 1/2
	.column-2-3
		grid-column: 2/3
	.column-2-4
		grid-column: 2/4
	.column-3-4
		grid-column: 3/4
	.column-3-5
		grid-column: 3/5
	.column-4-5
		grid-column: 4/5
	.column-center
		grid-column: 2/4
	.title
		font-size: 1.6em
	.item-title
		font-size: 1.6em
	.project-content
		margin: 2rem 3.175rem 0 3.175rem
	.image-wrap-mobile
		text-align: none
	.proj-description p,
	.proj-description span
		line-height: 2rem
		font-size: 1.5rem
	.image-wrap-mobile img
		width: 100%

@media screen and ( min-width: 1200px )
	.project-content
		margin: 2rem 6rem 0 6rem
</style>
