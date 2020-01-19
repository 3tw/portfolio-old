<template>
	<header class="nav-bar">
    <button class="btn header">TW</button>
    <button class="btn header">ABOUT</button>
    <button class="btn header"> PROJECTS</button>
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
    display: flex
    align-items: center
    justify-content: center
    min-height: min-content
    font-size: 1.8em
    font-weight: 200
    padding-top: 1em
    padding-bottom: 1em
  button
    padding-right: 0.1em
    padding-left: 0.1em
    background: none
    color: inherit
    border: none
    font: inherit
    cursor: pointer
    outline: inherit
</style>