<template>
	<div class="showcase">
		<h1>Teo Winkler</h1>
    <span>{{title}}</span>
    <p>{{skillset}}</p>
	</div>
</template>

<script>
  export default {
    name: "Showcase",
    data() {
      return {
        title: `front-end web developer`,
        skillset: `
          [html, css, javascript, vue.js, jquery, sass, python]
        `,
      };
    }
  };
</script>

<style lang="sass" scoped>
  .showcase
    padding: 1em
    text-align: center
  .showcase h1
    margin-bottom: 0.5em
</style>