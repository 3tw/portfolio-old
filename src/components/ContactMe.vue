<template>
	<div class="contact-me">
		<div class="greeting">
			<span>{{greeting}}</span>
		</div>
		<div class="link-container">
			<span v-html="email"></span>
			<br />
			<span v-html="github"></span>
			<br />
			<span v-html="linkedin"></span>
		</div>
	</div>
</template>

<script>
export default {
	name: "ContactMe",
	data() {
		return {
			greeting: `contact me`,
			email: `<a href="mailto:teo.winkler@gmail.com">email</a>`,
			github: `<a href="https://github.com/3tw" target="_blank" rel="noopener noreferrer">github</a>`,
			linkedin: `<a href="https://www.linkedin.com/in/teo-winkler" target="_blank" rel="noopener noreferrer">linkedin</a>`
		};
	}
};
</script>

<style lang="sass" scoped>
.contact-me
  text-align: center
.greeting
  padding-bottom: 1em
  font-size: 1.6em
  line-height: 0.7em
</style>