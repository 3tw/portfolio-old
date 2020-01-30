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
		<div class="image-wrap bottom-padding-1 column-1-5">
			<img src="@/assets/images/tom-exh-menu.png" alt="cover-photo" />
		</div>
		<div class="image-wrap bottom-padding-3 column-1-5">
			<img src="@/assets/images/tom-about.png" alt="cover-photo" />
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
		<div class="image-wrap bottom-padding-1 column-1-4">
			<img src="@/assets/images/tom-gallery.jpg" alt="cover-photo" />
		</div>
		<div class="image-wrap bottom-padding-3 column-4-5">
			<img src="@/assets/images/tom-m-gallery.png" alt="cover-photo" />
		</div>
		<div class="proj-description top-padding-2 bottom-padding-1 column-1-4">
			<p>{{description5}}</p>
		</div>
		<div class="image-wrap bottom-padding-1 column-2-3">
			<img src="@/assets/images/tom-m-exh-main.png" alt="cover-photo" />
		</div>
		<div class="image-wrap bottom-padding-1 column-3-4">
			<img src="@/assets/images/tom-m-proj-main.png" alt="cover-photo" />
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
			description1: `First of all, Tom is a sculptor. He is also my brother. What he asked for is a portfolio with a lot of white space that is gradualy filled up with content as you navigate through. The design had to be minimalistic with a paper-like feel to it.`,
			description2: `Right next to the navigation menu there is middle column. Sub-menus and descriptions are displayed here.`,
			description3: `The asymmetric grid design allows just enough space for the text while retaining a strong visual presence of the gallery. The middle column is fixed and has an individual scrollbar, whereas the gallery items respond to resized window by changing size and distribution.`,
			description4: `While this website runs on vanilla JS, the gallery utilises <a href="https://fancyapps.com/fancybox/3/" target="_blank" rel="noopener noreferrer">Fancybox</a>, JavaScript lightbox library. It was easy to implement once the website was finished, without sacrificing the aesthetics.`,
			description5: `On mobile screen columns become rows, while the gallery preserves its shape. The navigation buttons are moved to the top of the screen. We wanted to keep them as an integral part of the layout.`
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