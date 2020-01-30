<template>
	<div class="showcase">
		<img :src="largeLogo" />
	</div>
</template>

<script>
export default {
	name: "Showcase",
	data() {
		return {};
	},
	computed: {
		largeLogo() {
			return require("../assets/logo/logo-red-large.png");
		}
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
  min-width: 250px

</style>