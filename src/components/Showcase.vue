<template>
	<div class="showcase">
		<LargeLogo class="svg-logo" />
	</div>
</template>

<script>
import LargeLogo from "./LargeLogo.vue"

export default {
	name: "Showcase",
	data() {
		return {};
	},
	components: {
		LargeLogo
	}
};
</script>

<style lang="sass" scoped>
.showcase
  text-align: center
  position: fixed
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

.svg-logo
	min-width: 230px
	width: 230px


@media screen and ( min-width: 700px )
	.svg-logo
		min-width: 300px
		max-width: 350px
</style>