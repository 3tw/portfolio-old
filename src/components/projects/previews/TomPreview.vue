<template>
	<div class="item-wrap">
		<img src="@/assets/images/tom-exh-menu.png" alt="cover-photo" />
		<div class="hover-text-wrap p1">
			<div class="image-text">
				<span class="item-title">{{p1Title}}</span>
				<p class="item-type">{{p1Type}}</p>
				<router-link to="/projects/tom-website" class="btn">More</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			p1Title: `TOM'S WEB PORTFOLIO`,
			p1Type: `Website design`
		};
	}
};
</script>

<style lang="sass" scoped>
.hover-text-wrap.p1
	background-color: whitesmoke
</style>