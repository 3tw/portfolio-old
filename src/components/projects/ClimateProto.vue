<template>
	<div class="project-content grid">
		<h1 class="proj-title top-margin-2 column-1-4">{{p1Title}}</h1>
		<div class="proj-description column-1-4">
			<p>{{description1}}</p>
		</div>
		<div class="proj-description bottom-padding-1 column-1-4">
			<p>{{description2}}</p>
		</div>
		<div class="image-wrap bottom-padding-1 column-1-5">
			<img src="@/assets/images/climate-cover.jpg" alt="cover-photo" />
		</div>
		<div class="image-wrap bottom-padding-1 column-1-5">
			<img src="@/assets/images/climate-cover2.png" alt="cover-photo" />
		</div>
		<div class="image-wrap bottom-padding-3 column-1-5">
			<img src="@/assets/images/climate-cover3.png" alt="cover-photo" />
		</div>
		<div class="proj-description bottom-padding-1 column-1-4">
			<p>{{description3}}</p>
		</div>
		<div class="image-wrap bottom-padding-3 column-1-4">
			<img src="@/assets/images/climate-transition.gif" alt="cover-photo" />
		</div>
		
		<div class="column-center bottom-padding-3">
			<a
				href="https://github.com/3tw/ClimatePrototype"
				target="_blank"
				rel="noopener noreferrer"
				class="btn"
			>View on GitHub</a>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			p1Title: `Climate Awareness Prototype`,
			description1: `This prototype was created as a part of my application for the people.ooo workshop. The challenge was to come up with an idea that would effectively communicate the effects of climate change.  I approached the task by transgressing the "User First" paradigm. This project shows that the disruptive nature of climate change shouldn't be simply presented as a consumable content.`,
			description2: `A wall of text covers the webpage. In contrast to the title the text appears tiny. We are discouraged from reading it. But even if the user decides to read through it, he cannot finish. The text slowly fades away and two short sentences appear. One after another.`,
			description3: `The message is mediated through the disorder. Yet, the disorder is the message itsef. The user is interrupted and for a brief moment reminded that he cannot hide from disastrous reality. Climate change suddenly affects not only the planet but our online experience.`
		};
	},
};
</script>

<style lang="sass" scoped>

</style>