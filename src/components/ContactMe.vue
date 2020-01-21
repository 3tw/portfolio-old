<template>
	<div class="contact-me">
        <div class="greeting">
            <span>{{greeting}}</span>
        </div>
        <div class="link-container core-font">
            <span v-html="links"></span>
        </div>
	</div> 
</template>

<script>
  export default {
    name: "ContactMe",
    data() {
      return {
          greeting: `contact me`,
          links: `
          <a href="https://github.com/3tw" target="_blank" rel="noopener noreferrer">github</a><br>
          <a href="https://www.linkedin.com/in/teo-winkler" target="_blank" rel="noopener noreferrer">linkedin</a><br>
          <a href="mailto:teo.winkler@gmail.com">email</a>
          `
        };
    }
  };
</script>

<style lang="sass" scoped>
    .contact-me
        text-align: center
    .greeting
        padding-bottom: 1em
        font-size: 2em
        line-height: 0.7em
</style>