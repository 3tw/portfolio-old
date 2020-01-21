<template>
	<div class="showcase">
		<h1 class="f-name">{{fName}}</h1>
		<h1 class="l-name">{{lName}}</h1>
		<span class="title">{{title}}</span>
	</div>
</template>

<script>
export default {
	name: "Showcase",
	data() {
		return {
			lName: `Winkler`,
			fName: "teo",
			title: `FRONT END WEB DEVELOPER`
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
  font-size: 7em
  margin-bottom: -0.3em
.l-name
  font-size: 2.7em
  padding-bottom: 0.5em

@media screen and ( min-width: 700px )
  .showcase > .f-name
    font-size: 9em
  .showcase > .l-name
    font-size: 3.5em
    
@media screen and ( min-height: 800px )
  .showcase > .f-name
    font-size: 9em
  .showcase > .l-name
    font-size: 3.5em
</style>