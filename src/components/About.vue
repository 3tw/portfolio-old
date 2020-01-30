<template>
	<div id="about" class="grid">
		<div class="text-left top-margin-4 bottom-padding-3">
			<span>{{headline}}</span>
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
#about
	//height: calc(100vh - 3.125rem - 4.5rem - 5rem) //- footer - navBar - padding-top-5
	background: $white
	color: $black
	margin: 0 1.5rem 0 1.5rem 
	text-align: left
.text-left
	line-height: 2rem
	font-size: 1.5rem
@media screen and ( min-width: 700px )
	#about
		margin: 0 3.175rem 0 3.175rem
</style>