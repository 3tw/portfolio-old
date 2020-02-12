<template>
	<div id="about" class="grid">
		<div class="column-1-4 bottom-padding-3">
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
			skills: `html, css, javascript, vue.js, jquery, sass, python`,
			bio: `In August 2019 I handed in my philosophy thesis at the University of Amsterdam. Yet I couldn't quite picture myself within the Academia. Eager to try something entirely new I picked up coding. Before I knew it I started working on my first front end project. Nowdays, if I am not in front of the computer screen, I am excited about climbing, running long distances or just hanging out. If you would like to get in touch don't hesitate to send me an <a class="underline" href="mailto:teo.winkler@gmail.com">email</a>.`,
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
		margin: 2rem 3.175rem 0 3.175rem
	.column-1-4
		line-height: 2rem
		font-size: 1.5rem
</style>