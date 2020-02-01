<template>
	<div id="about" class="grid">
		<div class="column-1-4 top-margin-3 bottom-padding-3">
			<span>{{headline}}</span> <br>
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
			headline: `Hi, my name is Teo.`,
			bio: `I'm a front end developer with a master's degree in philosophy from the University of Amsterdam. When I am not in front of the computer screen I am excited about climbing, running long distances and taking photos with my favorite compact camera. I am always thrilled to collaborate, so don't hesitate to send me an <a class="underline" href="mailto:teo.winkler@gmail.com">email</a>.`,
		};
	}
};
</script>

<style lang="sass" scoped>
#about
	background: $white
	color: $black
	margin: 0 1.5rem 0 1.5rem 
	text-align: left
.column-1-4
	line-height: 1.6rem
	font-size: 1.2rem
@media screen and ( min-width: 700px )
	#about
		margin: 0 3.175rem 0 3.175rem
	.column-1-4
		line-height: 2rem
		font-size: 1.5rem
</style>