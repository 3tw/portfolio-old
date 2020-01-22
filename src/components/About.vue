<template>
	<div class="about grid">
		<div class="content-wrap">
			<h2>{{headline}}</h2>
			<br />
			<p class="bio">{{bio}}</p>
			<br />
			<p class="skillset">{{skills}}</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			skills: `[html, css, javascript, vue.js, jquery, sass, python]`,
			headline: `I'm a Front End Web Developer situated in Slovenia`,
			bio: `I have an odd affection for Hegel that encouraged me to get an MA degree in Philosophy at the University of Amsterdam. That's when I accidentally came across coding. My healthier obsessions are sport climbing, long-distance running and photography.`
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