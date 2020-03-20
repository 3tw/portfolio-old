<template>
	<div id="app">
		<div id="nav">
			<NavBar />
		</div>
		<div id="main">
			<PageTransitions>
				<router-view />
			</PageTransitions>
		</div>
		<div id="foot">
			<Footer />
		</div>
	</div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import PageTransitions from "./components/PageTransitions.vue";

export default {
	name: "App",
	components: {
		NavBar,
		Footer,
		PageTransitions
	},
	created() {
		let preload = new Array();

		preload[0] = "../img/climate-cover3.e8b614e9.jpg ";
		preload[1] = "../img/climate-cover3-m.c9987709.jpg";
		preload[2] = "../img/t3v-cover.7f40649e.jpg";
		preload[3] = "../img/t3v-cover-m.659e754b.jpg";
		preload[4] = "../img/tom-preview.a1d1a52d.jpg";
		preload[5] = "../img/tom-preview-m.6cd1386e.jpg";

		let loadedimages = new Array();
		for (let i = 0; i < preload.length; i++) {
			loadedimages[i] = new Image();
			loadedimages[i].src = preload[i];
		}
	}
};
</script>


<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Muli:200,300,600&display=swap');

@font-face
	font-family: "CABNDWebBold"
	src: url("./assets/fonts/CABNDWebBold.otf") format("otf")

// core css
*
	box-sizing: border-box
	margin: 0
	padding: 0

html
	font-size: 1em
	min-height: 100%

body
	font-family: Muli, sans-serif
	line-height: 1.2rem
	min-width: 320px
	height: 100vh
	overflow-x: hidden
a
	color: $black
	text-decoration: none

h2
	font-family: Muli, sans-serif
	font-size: 1.875rem
	line-height: 2.4rem
	text-align: left	
	
h3
	font-family: Muli, sans-serif
	font-size: 1.875rem

#app
	height: 100%
	display: flex
	flex-direction: column

#nav
	flex: 0 0 6rem

#main
	flex: 1 0 calc(100vh - 12rem)

#foot
	flex: 0 0 6rem

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

.tp-1
	padding-top: 1rem
.tp-2
	padding-top: 2rem
.tp-3
	padding-top: 3rem
.bp-1
	padding-bottom: 1rem
.bp-3
	padding-bottom: 3rem
.column-center
	text-align: center
.underline
	text-decoration: underline

// project display
.project-content
	margin: 0 1.5rem 0 1.5rem 
.proj-description p,
.proj-description span
	font-size: 1.3rem
	line-height: 1.95rem
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
@media screen and ( min-width: 500px ) and ( max-width: 699px )
	.image-wrap-mobile
		min-width: 452px
		max-width: 80%
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
		font-size: 1.5rem
		line-height: 2.2rem
	.image-wrap-mobile img
		width: 100%

@media screen and ( min-width: 1200px )
	.project-content
		margin: 2rem 6rem 0 6rem
</style>
