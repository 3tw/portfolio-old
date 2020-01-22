<template>
	<div class="projects grid">
		<TomWebsite />
		<Go4trail />
		<ClimateProto />
	</div>
</template>

<script>
import TomWebsite from "./projects/TomWebsite.vue";
import Go4trail from "./projects/Go4trail.vue";
import ClimateProto from "./projects/ClimateProto.vue";

export default {
	data() {
		return {};
	},
	components: {
		TomWebsite,
		Go4trail,
		ClimateProto
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
	visibility: hidden
	opacity: 0
	transition: opacity 0.3s ease, visibility 0.3s ease
	line-height: 1.4em
img
	width: 100%
.image-text
	position: absolute
	top: 50%
	left: 50%
	transform: translate(-50%, -50%)
.proj-type
	padding-bottom: 1em


</style>