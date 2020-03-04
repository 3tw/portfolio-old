<template>
	<div class="project-content grid">
		<h1 class="proj-title bp-1 column-1-4">{{p1Title}}</h1>
		<LanguageChart 
			v-bind:repoUrl="repoUrl"
			class="column-1-4"/>
			
		<div class="proj-description bp-1 tp-1 column-1-4">
			<p>{{description1}}</p>
		</div>
		<div class="image-wrap bp-3 column-1-5">
			<img src="@/assets/images/tom-cover-m.jpg" 
				srcset="@/assets/images/tom-cover-m.jpg 650w,
				@/assets/images/tom-cover.jpg 750w"
				sizes="100vw"
				alt="Cover photo" />
		</div>
		<div class="proj-description bp-1 column-1-4">
			<p>{{description2}}</p>
		</div>
		<div class="image-wrap bp-1 column-1-5">
			<img src="@/assets/images/tom-exh-menu-m.jpg" 
				srcset="@/assets/images/tom-exh-menu-m.jpg 650w,
				@/assets/images/tom-exh-menu.jpg 750w"
				sizes="100vw"
				alt="Exhibition menu" />
		</div>
		<div class="image-wrap bp-3 column-1-5">
			<img src="@/assets/images/tom-about.jpg" alt="cover-photo" />
			<img src="@/assets/images/tom-about-m.jpg" 
				srcset="@/assets/images/tom-about-m.jpg 650w,
				@/assets/images/tom-about.jpg 750w"
				sizes="100vw"
				alt="About" />
		</div>
		<div class="proj-description bp-1 column-1-4">
			<p>{{description3}}</p>
		</div>
		<div class="image-wrap bp-3 column-1-5">
			<img src="@/assets/images/tom-exh-main-m.jpg" 
				srcset="@/assets/images/tom-exh-main-m.jpg 650w,
				@/assets/images/tom-exh-main.jpg 750w"
				sizes="100vw"
				alt="Exhibition" />
		</div>
		<div class="proj-description bp-1 column-1-4">
			<span v-html="description4"></span>
		</div>
		<div class="image-wrap bp-1 column-1-4">
			<img src="@/assets/images/tom-gallery-m.jpg" 
				srcset="@/assets/images/tom-gallery-m.jpg 650w,
				@/assets/images/tom-gallery.jpg 750w"
				sizes="100vw"
				alt="Gallery" />
		</div>
		<div class="image-wrap bp-3 column-4-5">
			<img src="@/assets/images/tom-m-gallery-m.jpg" 
				srcset="@/assets/images/tom-m-gallery-m.jpg 650w,
				@/assets/images/tom-m-gallery.jpg 750w"
				sizes="100vw"
				alt="Gallery mobile" />
		</div>
		<div class="proj-description tp-2 bp-1 column-1-4">
			<p>{{description5}}</p>
		</div>
		<div class="image-wrap bp-1 column-2-3">
			<img src="@/assets/images/tom-m-exh-main-m.jpg" 
				srcset="@/assets/images/tom-m-exh-main-m.jpg 650w,
				@/assets/images/tom-m-exh-main.jpg 750w"
				sizes="100vw"
				alt="Exhibition mobile" />
		</div>
		<div class="image-wrap bp-1 column-3-4">
			<img src="@/assets/images/tom-m-proj-main-m.jpg" 
				srcset="@/assets/images/tom-m-proj-main-m.jpg 650w,
				@/assets/images/tom-m-proj-main.jpg 750w"
				sizes="100vw"
				alt="Project gallery mobile" />
		</div>
		
		

		<div class="column-center tp-3">
			<a
				href="https://github.com/3tw/TomPortfolio"
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
import LanguageChart from "../layout/LanguageChart.vue";

export default {
	name: "TomPortfolio",
	components: {
		LanguageChart,
	},
	data() {
		return {
			repoUrl: "https://api.github.com/repos/3tw/TomPortfolio/languages",		
			p1Title: `Tom's Web Portfolio`,
			description1: `First of all, Tom is a sculptor. He is also my brother. What he asked for is a portfolio with a lot of white space that is gradualy filled up with content as you navigate through. The design had to be minimalistic with a paper-like feel to it.`,
			description2: `Right next to the navigation menu there is middle column. Sub-menus and descriptions are displayed here.`,
			description3: `The asymmetric grid layout allows just enough space for the text while retaining a large gallery. The middle column is fixed and has an individual scrollbar, whereas the gallery items respond to resized window by changing size and distribution.`,
			description4: `While this website runs on vanilla JavaScript, the gallery utilises <a href="https://fancyapps.com/fancybox/3/" target="_blank" rel="noopener noreferrer" class="underline">Fancybox</a>, JavaScript lightbox library. It was easy to implement once the website was finished, without sacrificing the aesthetics. And what is even better, it is mobile friendly!`,
			description5: `On smaller screens columns become rows, while the gallery preserves its shape. The navigation buttons are moved to the top of the screen. We wanted to keep them as an integral part of the layout.`
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