<template>
	<div class="item-wrap">
		<img src="@/assets/images/climate-cover3-m.jpg" 
				srcset="@/assets/images/climate-cover3-m.jpg 650w,
				@/assets/images/climate-cover3.jpg 750w"
				sizes="100vw"
				alt="ClimatePrototype preview photo" />
		<div class="hover-text-wrap p3">
			<div class="image-text">
				<span class="item-title">{{p3Title}}</span>
				<p class="item-type">{{p3Type}}</p>
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
	background-color: $lime
</style>