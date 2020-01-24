<template>
	<div class="grid project-content content-1">
		<span class="proj-title content-wrap">{{p1Title}}</span>
		<div class="content-wrap">
			<p class="proj-description">{{description1}}</p>
		</div>
		<div class="image-wrap">
			<img src="@/assets/images/p3cover2.jpg" alt="cover-photo" />
		</div>
		<div class="content-wrap">
			<p class="proj-description">{{description2}}</p>
		</div>
		<div class="image-wrap">
			<img src="@/assets/images/p3cover1.jpg" alt="cover-photo" />
		</div>
		<div class="content-wrap">
			<p class="proj-description">{{description3}}</p>
		</div>
		<div class="mobile">
			<img src="@/assets/images/p3gif-small.gif" alt="cover-photo" />
		</div>
		<br />
		<br />
		<div class="content-wrap center bottom-pad">
			<a
				href="https://github.com/3tw/TomWebsite"
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
			p1Title: `Climate Awarness Prototype`,
			description1: `The challenge was to come up with an idea that would communicate the climate crisis to the user. This prototype was created as a part of my application for the people.ooo workshop. I approached the task by transgressing the "user-first" paradigm. This project shows that the disruptive nature of climate change shouldn't be merely given as a consumable content.`,
			description2: `A wall of text covers the webpage. It is discouraging. But even if the user decides to read through it, he cannot finish. The text slowly fades away and two short sentences appear. One after another.`,
			description3: `The message is mediated as a disorder. The user is interrupted and for a brief moment reminded that he cannot hide from the disastrous reality. Climate change suddenly affects not only the planet but his online experience.`
		};
	},
};
</script>

<style lang="sass" scoped>
.content-1
	padding-bottom: 2em
	img
		padding-top: 1em
		padding-bottom: 1em
.content-wrap.center
	justify-self: center


</style>