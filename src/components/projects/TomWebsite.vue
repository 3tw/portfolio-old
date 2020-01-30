<template>
	<div class="project-content grid">
		<h1 class="proj-title top-margin-2 column-1-4">{{p1Title}}</h1>
		<div class="proj-description bottom-padding-1 column-1-4">
			<p>{{description1}}</p>
		</div>
		<div class="image-wrap bottom-padding-3 column-1-5">
			<img src="@/assets/images/tom-cover.png" alt="cover-photo" />
		</div>
		<div class="proj-description bottom-padding-1 column-1-4">
			<p>{{description2}}</p>
		</div>
		<div class="image-wrap bottom-padding-3 column-1-5">
			<img src="@/assets/images/tom-exh-menu.png" alt="cover-photo" />
		</div>
		<div class="proj-description bottom-padding-1 column-1-4">
			<p>{{description3}}</p>
		</div>
		<div class="image-wrap bottom-padding-3 column-1-5">
			<img src="@/assets/images/tom-exh-main.jpg" alt="cover-photo" />
		</div>
		<div class="proj-description bottom-padding-1 column-1-4">
			<span v-html="description4"></span>
		</div>
		<div class="image-wrap bottom-padding-1 column-1-5">
			<img src="@/assets/images/tom-gallery.jpg" alt="cover-photo" />
		</div>
		<div class="proj-description top-padding-2 bottom-padding-1 column-1-4">
			<p>{{description5}}</p>
		</div>
		<div class="image-wrap bottom-padding-1 column-1-2">
			<img src="@/assets/images/tom-m-gallery.png" alt="cover-photo" />
		</div>
		<div class="image-wrap bottom-padding-1 column-2-3">
			<img src="@/assets/images/tom-m-proj-main.png" alt="cover-photo" />
		</div>
		<div class="image-wrap bottom-padding-3 column-3-4">
			<img src="@/assets/images/tom-m-exh-main.png" alt="cover-photo" />
		</div>
		

		<div class="column-center bottom-padding-3">
			<a
				href="https://github.com/3tw/TomWebsite"
				target="_blank"
				rel="noopener noreferrer"
				class="btn"
			>View on GitHub</a>
			<a class="btn">Soon Online</a>
		</div>
		<br />
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