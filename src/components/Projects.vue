<template>
	<div class="projects grid">
		<TomPreview />
		<Go4trailPreview />
		<ClimatePreview />
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

<style lang="sass">
.projects
	height: calc(100vh - 70px)
	background-color: $yellow
	color: $maroon
	text-align: center
	overflow: scroll
.image-wrap
	position: relative
	width: 100%
	line-height: 0
.image-wrap:hover .text-wrap
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
.proj-type
	padding-bottom: 1em
.proj-description
	padding-bottom: 1em
</style>