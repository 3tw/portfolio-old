<template>
	<div class="item-wrap">
		<img src="@/assets/images/tom-preview-m.jpg" 
				srcset="@/assets/images/tom-preview-m.jpg 650w,
				@/assets/images/tom-preview.jpg 750w"
				sizes="100vw"
				alt="Tom's Website preview photo" />
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
	background-color: $yellow
</style>