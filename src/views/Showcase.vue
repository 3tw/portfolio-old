<template>
	<div id="showcase">
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
#showcase
	display: flex
	text-align: left
	align-self: center
	height: 100%
	margin: 0 1.5rem 0 1.5rem

.heading
	align-self: center
	text-transform: uppercase
	font-family: 'CABNDWebBold', sans-serif
	font-size: 1.4rem
	line-height: 2.6rem
	-webkit-text-stroke-width: 2px
	color: $red

@media screen and ( min-width: 700px )
	#showcase
		margin: 0 3.175rem 0 3.175rem
	.heading
		font-size: 1.5rem
		line-height: 3rem
@media screen and ( min-width: 800px )
	.heading
		font-size: 1.7rem
		line-height: 3.4rem

@media screen and ( min-width: 1200px )
	#showcase
		margin: 0 6rem 0 6rem		

</style>