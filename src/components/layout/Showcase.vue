<template>
	<div class="showcase">
		<h1 class="f-name">{{fName}}</h1>
    <h1 class="l-name">{{lName}}</h1>
    <span class="title">{{title}}</span>
    <!--<p>{{skillset}}</p>-->
	</div>
</template>

<script>
  export default {
    name: "Showcase",
    data() {
      return {
        lName: `winkler`,
        fName: 'teo',
        title: `FRONT END WEB DEVELOPER`,
        skillset: `
          [html, css, javascript, vue.js, jquery, sass, python]
        `,
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
    font-size: 8em
    margin-bottom: -0.3em
  .l-name
    font-size: 3em
    padding-bottom: 0.5em

  .title
    font-size: 1.8em
    font-weight: 200
</style>