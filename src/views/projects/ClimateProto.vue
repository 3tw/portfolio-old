<template>
	<div class="project-content grid">
		<h2 class="column-1-4">{{p1Title}}</h2>
		<LanguageChart 
			v-bind:repoUrl="repoUrl"
			class="column-1-4"/>

		<div class="proj-description bp-1 tp-1 column-1-4">
			<p>{{description1}}</p>
		</div>
		<div class="proj-description bp-1 column-1-4">
			<p>{{description2}}</p>
		</div>
		<div class="image-wrap bp-1 column-1-5">
			<img src="@/assets/images/climate-cover-m.jpg" 
				srcset="@/assets/images/climate-cover-m.jpg 650w,
				@/assets/images/climate-cover.jpg 750w"
				sizes="100vw"
				alt="Cover photo" />
		</div>
		<div class="image-wrap bp-1 column-1-5">
			<img src="@/assets/images/climate-cover2-m.jpg" 
				srcset="@/assets/images/climate-cover2-m.jpg 650w,
				@/assets/images/climate-cover2.jpg 750w"
				sizes="100vw"
				alt="Cover photo disappearing" />
		</div>
		<div class="image-wrap bp-3 column-1-5">
			<img src="@/assets/images/climate-cover3-m.jpg" 
				srcset="@/assets/images/climate-cover3-m.jpg 650w,
				@/assets/images/climate-cover3.jpg 750w"
				sizes="100vw"
				alt="Cover photo new text" />
		</div>
		<div class="proj-description bp-1 column-1-4">
			<p>{{description3}}</p>
		</div>
		<div class="image-wrap bp-3 column-1-4">
			<img src="@/assets/gif/climate-transition.gif" alt="cover-photo" />
		</div>
		<div class="proj-description bp-1 column-1-4">
			<p>{{description4}}</p>
		</div>
		
		<div class="column-center tp-3">
			<a
				href="https://github.com/3tw/ClimatePrototype"
				target="_blank"
				rel="noopener noreferrer"
				class="btn"
			>View on GitHub</a>
            <a href="https://3tw.github.io/ClimatePrototype/"
				target="_blank"
				rel="noopener noreferrer"
				class="btn"
			>View Online</a>
		</div>
	</div>
</template>

<script>
import LanguageChart from "../../components/LanguageChart.vue";

export default {
	name: "ClimateProto",
	components: {
		LanguageChart,
	},
	data() {
		return {
			repoUrl: "https://api.github.com/repos/3tw/ClimatePrototype/languages",		
			p1Title: `Climate Awareness Prototype`,
			description1: `The idea for the Climate Awareness Prototype occurred to me when I was applying for people.ooo workshop. The challenge was to come up with a prototype that would effectively communicate the effects of climate change. I approached the task by transgressing the "User First" paradigm, thinking that the disruptive nature of climate change shouldn't be simply presented as a consumable content.`,
			description2: `A wall of text covers the webpage. In contrast to the title the text appears rather small. We are discouraged from reading it. But even if the user decides to go through it, he cannot finish. The text slowly fades away and two short sentences appear. One after another.`,
			description3: `The message is mediated through the disorder. Yet, the disorder is the message itself. The user is interrupted and for a brief moment reminded that he cannot hide from disastrous reality. Climate change suddenly affects not only the planet but our online experience.`,
			description4: `This prototype could be implemented as a landing page. In this case, basic interactivity would be added to offer "an escape" for the user eager to take action. The user could proceed to the website before the text disintegrates.`
		};
	},
};
</script>

<style lang="sass" scoped>

</style>