<template>
	<div class="proj-wrap">
		<img src="@/assets/images/climate-cover3.png" alt="cover-photo" />
		<div class="text-wrap p3">
			<div class="image-text">
				<span class="proj-title">{{p3Title}}</span>
				<p class="proj-type">{{p3Type}}</p>
				<router-link to="/projects/climate-prototype" class="btn">More</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			p3Title: `CLIMATE AWARNESS`,
			p3Type: `Prototype`
		};
	}
};
</script>

<style lang="sass" scoped>
.text-wrap.p3
	background-color: $yellow
</style>