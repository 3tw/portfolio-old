<template>
	<div class="item-wrap">
		<img src="@/assets/images/tom-exh-main.jpg" alt="cover-photo" />
		<div class="hover-text-wrap p1">
			<div class="image-text">
				<span class="item-title">{{p1Title}}</span>
				<p class="item-type">{{p1Type}}</p>
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
	},
};
</script>

<style lang="sass" scoped>
.hover-text-wrap.p1
	background-color: whitesmoke
</style>