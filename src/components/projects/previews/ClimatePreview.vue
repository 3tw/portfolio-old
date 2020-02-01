<template>
	<div class="item-wrap">
		<img src="@/assets/images/climate-cover3.png" alt="cover-photo" />
		<div class="hover-text-wrap p3">
			<div class="image-text">
				<span class="item-title">{{p3Title}}</span>
				<p class="item-type">{{p3Type}}</p>
				<router-link to="/projects/climate-prototype" class="btn">More</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			p3Title: `CLIMATE AWARENESS`,
			p3Type: `Prototype`
		};
	},
};
</script>

<style lang="sass" scoped>
.hover-text-wrap.p3
	background-color: $yellow
</style>