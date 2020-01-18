<template>
	<header class="nav-bar">
    <span class="btn header">About </span>
    <span class="btn header"> Projects</span>
	</header>
</template>

<script>
  export default {
    name: "NavBar",
    data() {
      return {

      };
    },
  };
</script>

<style lang="sass" scoped>
    .nav-bar
        height: 5vh
        min-height: min-content
        margin-top: 2em
        text-align: center
    .header
      font-size: 2em
</style>