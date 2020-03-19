<template>
	<div class="item-wrap">
		<img src="@/assets/images/t3v-cover-m.jpg" 
				srcset="@/assets/images/t3v-cover-m.jpg 650w,
				@/assets/images/t3v-cover.jpg 750w"
				sizes="100vw"
				alt="T3V preview photo" />
		<div class="hover-text-wrap p2">
			<div class="image-text">
				<span class="item-title">{{p2Title}}</span>
				<p class="item-type">{{p2Type}}</p>
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
	background-color: $blue2
</style>