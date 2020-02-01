<template>
	<div class="showcase">
		<!--<img class="svg-logo" src="@/assets/logo/large-logo.svg" />-->
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
	computed: {
		largeLogo() {
			return require("../assets/logo/logo-red-large.png");
		}
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
	min-width: 250px
	width: 250px


@media screen and ( min-width: 700px )
	.svg-logo
		min-width: 300px
		max-width: 350px
</style>