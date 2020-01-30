<template>
	<div class="projects projects-grid top-margin-4">
		<div class="project-item">
			<ClimatePreview />
		</div>
		<div class="project-item">
			<Go4trailPreview />
		</div>
		<div class="project-item">
			<TomPreview />
		</div>
	</div>
</template>

<script>
import TomPreview from "./projects/previews/TomPreview.vue";
import Go4trailPreview from "./projects/previews/Go4trailPreview.vue";
import ClimatePreview from "./projects/previews/ClimatePreview.vue";

export default {
	data() {
		return {};
	},
	components: {
		TomPreview,
		Go4trailPreview,
		ClimatePreview
	}
};
</script>

<style lang="sass" >
.projects
	background-color: $white
	color: $red
	text-align: center
.proj-wrap
	width: 100%
	line-height: 0
	position: relative
.proj-wrap img
	width: 100%
.proj-wrap:hover .text-wrap
	visibility: visible
	opacity: 1
.text-wrap
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
.proj-title
	font-size: 1.6rem
.proj-type
	padding-bottom: 1em
	font-size: 1.4rem
.proj-description
	padding-bottom: 1em

@media screen and ( min-width: 500px )
	.proj-title
		font-weight: bold
	.projects-grid
		display: grid
		grid-template-columns: repeat(3, calc(70% - 2rem * 2))
		grid-template-rows: minmax(300px, 1fr)
		grid-gap: 2rem
		overflow-x: scroll
		overflow-y: hidden
		scroll-snap-type: x proximity
		margin-left: 3.175rem
		margin-right: 3.175rem

	.project-item
		scroll-snap-align: center
	.proj-wrap img,
	.text-wrap
		border-radius: 8px
	.text-wrap.p1,
	.text-wrap.p2,
	.text-wrap.p3,
		visibility: hidden
		opacity: 0
</style>