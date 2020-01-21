<template>
	<div class="showcase">
		<h1 class="f-name">{{fName}}</h1>
    <h1 class="l-name">{{lName}}</h1>
    <span class="title">{{title}}</span>
	</div>
</template>

<script>
  export default {
    name: "Showcase",
    data() {
      return {
        lName: `Winkler`,
        fName: 'teo',
        title: `FRONT END WEB DEVELOPER`,
      };
    }
  };
</script>

<style lang="sass" scoped>
  .showcase
    padding: 0em 1em 0 1em
    text-align: center
    line-height: initial

  .f-name
    font-size: 7em
    margin-bottom: -0.3em
  .l-name
    font-size: 2.7em
    padding-bottom: 0.5em
  .title
    font-size:  1.6em
    font-weight: 200
</style>