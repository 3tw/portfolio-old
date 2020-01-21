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

<style lang="sass" scoped>
.projects
    height: calc(100vh - 70px)
    background-color: $yellow
    color: $maroon
    padding: 1em
    text-align: center
</style>