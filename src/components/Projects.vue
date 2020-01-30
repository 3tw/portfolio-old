<template>
	<div class="projects projects-grid top-margin-4 bottom-padding-1">
		<div class="project-item">
			<ClimatePreview />
		</div>
		<div class="project-item">
			<T3VPreview />
		</div>
		<div class="project-item">
			<TomPreview />
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
.item-wrap:hover .hover-text-wrap
	visibility: visible
	opacity: 1
.hover-text-wrap
	position: absolute
	top: 0
	bottom: 0
	right: 0
	left: 0
	visibility: visible
	opacity: 1
	transition: opacity 0.3s ease, visibility 0.3s ease
	line-height: 1.4em
.image-text
	position: absolute
	top: 50%
	left: 50%
	transform: translate(-50%, -50%)
.item-title
	font-size: 1.6rem
.item-type
	padding-bottom: 1em
	font-size: 1.4rem

@media screen and ( min-width: 500px )
	.item-title
		font-weight: bold
	.projects-grid
		display: grid
		grid-template-columns: repeat(3, calc(75% - 2rem * 2))
		grid-template-rows: minmax(300px, 1fr)
		grid-gap: 2rem
		overflow-x: scroll
		overflow-y: hidden
		scroll-snap-type: x proximity
		margin-left: 3.175rem
		margin-right: 3.175rem

	.project-item
		scroll-snap-align: center
	.item-wrap img,
	.hover-text-wrap
		border-radius: 8px
	.hover-text-wrap.p1,
	.hover-text-wrap.p2,
	.hover-text-wrap.p3,
		visibility: hidden
		opacity: 0
	.bottom-padding-1
		padding-bottom: 1rem
</style>