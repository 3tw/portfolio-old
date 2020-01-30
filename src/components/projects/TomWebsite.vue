<template>
	<div class="grid project-content content-1">
		<h1 class="content-wrap">{{p1Title}}</h1>
		<div class="content-wrap">
			<p class="proj-description">{{description1}}</p>
		</div>
		<div class="image-wrap">
			<img src="" alt="cover-photo" />
		</div>
		<br />
		<br />
		<div class="content-wrap center bottom-pad">
			<a
				href="https://github.com/3tw/TomWebsite"
				target="_blank"
				rel="noopener noreferrer"
				class="btn"
			>View on GitHub</a>
			<a class="btn">Soon Online</a>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			p1Title: `Tom's Web Portfolio`,
			description1: `Tom is a scultor. He is also my brother. What he asked for was a portfolio with a lot of white space that gets gradualy filled up with content. The design had to be minimalistic with a paper-like feel to it.`,
			description2: `Right next to the navigation menu there is middle column. Sub-menus and descriptions are displayed here.`,
			description3: `The asymetric design of the grid allows just enough space for the text while retaining the visual presence of the gallery.`,
			description4: `While this website runs on vanilla JS, the gallery utilises <a href="https://fancyapps.com/fancybox/3/" target="_blank" rel="noopener noreferrer">Fancybox</a>, JavaScript lightbox library. It was easy to implement once the website was almost finished, without sacrifcing the aestcehtics.`,
			description5: `On mobile sreen columns become rows, while the gallery preserves its shape. The navigation buttons are moved to the top of the screen. We wanted to keep them as an integral part of the layout. Therefore they were not replaced with a menu icon.`
		};
	},
};
</script>

<style lang="sass" scoped>
.content-1
	padding-bottom: 2em
	img
		padding-top: 1em
		padding-bottom: 1em
.content-wrap.center
	justify-self: center


</style>