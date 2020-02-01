<template>
	<div class="item-wrap">
		<img src="@/assets/images/t3v-cover.jpg" alt="cover-photo" />
		<div class="hover-text-wrap p2">
			<div class="image-text">
				<span class="item-title">{{p2Title}}</span>
				<p class="item-type">{{p2Type}}</p>
				<router-link to="/projects/T3V" class="btn">More</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			p2Title: `T3V WEBSITE`,
			p2Type: `Website design`
		};
	},
};
</script>

<style lang="sass" scoped>
.hover-text-wrap.p2
	background-color: #346aff
</style>