<template>
	<div class="grid project-content content-1">
		<span class="proj-title content-wrap">{{p1Title}}</span>
		<div class="content-wrap">
			<p class="proj-description">{{description1}}</p>
		</div>
		<div class="image-wrap">
			<img src="@/assets/images/p2cover1.jpg" alt="cover-photo" />
		</div>
		<div class="content-wrap">
			<p class="proj-description">{{description2}}</p>
		</div>
		<div class="mobile">
			<img src="@/assets/images/p2mobile.jpg" alt="cover-photo" />
		</div>
		<div class="content-wrap">
			<p class="proj-description">{{description3}}</p>
		</div>
		<div class="mobile">
			<img src="@/assets/images/p2mobile2.jpg" alt="cover-photo" />
		</div>
		<div class="content-wrap">
			<span v-html="description4" class="proj-description"></span>
		</div>
		<br />
		<br />
		<div class="content-wrap center bottom-pad">
			<a
				href="https://github.com/3tw/Go4Trail"
				target="_blank"
				rel="noopener noreferrer"
				class="btn"
			>View on GitHub</a>
			<a class="btn">Soon Online</a>
		</div>
		<br>
	</div>
</template>

<script>
export default {
	data() {
		return {
			p1Title: `Go4trail`,
			description1: `Tom is a scultor. He is also my brother. What he asked for was a portfolio with a lot of white space that gets gradualy filled up with content. The design had to be minimalistic with a paper-like feel to it.`,
			description2: `Right next to the navigation menu there is middle column. Sub-menus and descriptions are displayed here.`,
			description3: `The asymetric design of the grid allows just enough space for the text while retaining the visual presence of the gallery.`,
			description4: `The website runs on vanilla JS. The gallery is the the only exception. I utilised <a href="https://fancyapps.com/fancybox/3/">Fancybox</a>, JavaScript lightbox library that was easy to implement once the website was almost finished, without sacrifcing the aestcehtics.`,
		};
	},
};
</script>

<style lang="sass" scoped>
.content-1
	padding-bottom: 2em
	img
		padding-top: 1em
		padding-bottom: 2em
.content-wrap.center
	justify-self: center


</style>