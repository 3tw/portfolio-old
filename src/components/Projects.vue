<template>
	<div class="projects-grid">
		<div class="project-item">
			<router-link to="/projects/T3V" class="projects">
				<T3VPreview />
			</router-link>
		</div>
		<div class="project-item">
			<router-link to="/projects/tom-website" class="projects">
				<TomPreview />
			</router-link>
		</div>
		<div class="project-item">
			<router-link to="/projects/climate-prototype" class="projects">
				<ClimatePreview />
			</router-link>
		</div>
	</div>
</template>

<script>
import TomPreview from "./projects/previews/TomPreview.vue";
import T3VPreview from "./projects/previews/T3VPreview.vue";
import ClimatePreview from "./projects/previews/ClimatePreview.vue";

export default {
	data() {
		return {};
	},
	components: {
		TomPreview,
		T3VPreview,
		ClimatePreview
	}
};
</script>

<style lang="sass" >
.projects
	background-color: $white
	color: $red
	text-align: center
.item-wrap
	width: 100%
	line-height: 0
	position: relative
.item-wrap img
	width: 100%
.hover-text-wrap
	position: absolute
	top: 0
	bottom: 0
	right: 0
	left: 0
	visibility: visible
	opacity: 1
	line-height: 1.4em
	transition: opacity .5s ease
.image-text
	position: absolute
	top: 50%
	left: 50%
	transform: translate(-50%, -50%)
.item-title
	font-size: 1.6rem
	font-family: "CABNDWebBold", sans-serif
.item-type
	font-size: 1.4rem

::-webkit-scrollbar-track
	background: $black

@media screen and ( min-width: 700px )
	.item-title
		font-weight: bold
	.projects-grid
		display: grid
		grid-template-columns: repeat(3, calc(75% - 0.5rem * 2))
		grid-template-rows: minmax(100px, 1fr)
		grid-gap: 2rem
		overflow-x: scroll
		overflow-y: hidden
		scroll-snap-type: x mandatory
		-ms-overflow-style: none
		scrollbar-width: none
		scroll-overscroll-behavior: smooth
		margin: 2rem 3.175rem 2rem 3.175rem
	.projects-grid::-webkit-scrollbar
		display: none
	.projects-grid:hover
		overflow-x: auto
	.item-wrap:hover .hover-text-wrap,
	.item-wrap:hover .image-text
		opacity: 0
	.project-item
		scroll-snap-align: center
	.item-wrap img
		border-radius: 10px
	.hover-text-wrap
		border-radius: 8px
	
@media screen and ( min-width: 1200px )
	.projects-grid
		margin: 2rem 6rem 0 6rem
</style>