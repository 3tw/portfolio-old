<template>
	<div class="about grid">
		<div class="content-wrap">
			<h2>{{headline}}</h2>
			<br>
			<br>
			<span v-html="bio"></span>
			<br>
			<br>
			<p class="skillset">{{skills}}</p>

		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			skills: `[html, css, javascript, vue.js, jquery, sass, python]`,
			headline: `I'm a Front End Web Developer from Slovenia`,
			bio: `In 2019 I graduated with an MA degree in Philosophy at the University of Amsterdam. That's when I came across coding. If I am not in front of the computer screen I enjoy sport climbing, long-distance running and photography. I would love to hear from you, so don't hesitate to send me an <a href="mailto:teo.winkler@gmail.com">email</a>.`,
		};
	}
};
</script>

<style lang="sass" scoped>
.about
	height: calc(100vh - 70px)
	background: $yellow
	color: $maroon
	padding: 1em
	text-align: left
.bio
	line-height: 1.4em
.skillset
	text-align: center
</style>