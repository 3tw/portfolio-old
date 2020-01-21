<template>
	<div class="about core-font grid">
		<h2>{{headline}}</h2>
		<br>
		<p class="bio">{{bio}}</p>
		<br>
		<div v-html="skills"></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			skills: `My skills include <br>
                [html, css, javascript, vue.js, jquery, sass, python]
            `,
			headline: `I'm a Front End Web Developer situated in Slovenia.`,
            bio: `Besides coding, I have an unhealthy obsession with Hegel, thanks to whom I obtained an MA degree in Philsophy at the University of Amsterdam. My healthier obsessions are sports climbing, long-distance running and photography.` 
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

</style>