<template>
	<div class="showcase">
		<span class="heading" v-html="heading"></span>
	</div>
</template>

<script>
export default {
	name: "Showcase",	
	data() {
		return {
			windowWidth: window.innerWidth
		};
	},
	mounted() {
		window.addEventListener(
			"resize",
			() => (this.windowWidth = window.innerWidth)
		);
	},
	computed: {
		heading() {
			if (this.windowWidth < 700) {
				return `<h1>Teo Winkler <br> front end developer based in Slovenia <h1>`;
			} else {
				return `<h1>Teo Winkler <br> front end developer <br>based in Slovenia <h1>`;
			}
		}
	}
};
</script>

<style lang="sass" scoped>
.showcase
	text-align: left
	position: fixed
	top: 50%
	transform: translate(-50%, -50%)
	width: 100%
	padding: 0 1.5rem 0 1.5rem

.heading
	text-transform: uppercase
	font-size: 1.4rem
	font-family: 'CABNDWebBold', sans-serif
	line-height: 2.5rem
	color: $red

@media screen and ( min-width: 700px )
	.showcase
		padding: 0 3.175rem 0 3.175rem
	.heading
		font-size: 1.5rem
		line-height: 2.6rem
@media screen and ( min-width: 800px )
	.heading
		font-size: 1.7rem
		line-height: 2.8rem

@media screen and ( min-width: 1200px )
	.showcase
		margin: 2rem 6rem 0 6rem		

</style>