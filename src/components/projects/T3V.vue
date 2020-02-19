<template>
	<div class="project-content grid">
		<h1 class="proj-title bottom-padding-1 column-1-4">{{p1Title}}</h1>

		<LanguageChart class="column-1-4"/>

		<div class="proj-description bottom-padding-1 column-1-4">
			<p>{{description1}}</p>
		</div>
		<div class="image-wrap bottom-padding-3 column-1-5">
			<img src="@/assets/images/t3v-cover.jpg" alt="cover-photo" />
		</div>
		<div class="image-wrap bottom-padding-3 column-1-5">
			<img src="@/assets/images/t3v-about.jpg" alt="cover-photo" />
		</div>
		<div class="proj-description bottom-padding-1 column-1-4">
			<p>{{description2}}</p>
		</div>
		<div class="image-wrap bottom-padding-3 column-1-5">
			<img src="@/assets/images/t3v-race.jpg" alt="cover-photo" />
		</div>
		<div class="proj-description bottom-padding-1 column-1-4">
			<p>{{description3}}</p>
		</div>
		<div class="image-wrap-mobile bottom-padding-3 column-1-2">
			<img src="@/assets/images/t3v-m-races.jpg" alt="cover-photo" />
		</div>
		<div class="image-wrap-mobile bottom-padding-3 column-2-3">
			<img src="@/assets/images/t3v-m-contact.jpg" alt="cover-photo" />
		</div>
		<div class="image-wrap-mobile bottom-padding-3 column-3-4">
			<img src="@/assets/images/t3v-m-menu.jpg" alt="cover-photo" />
		</div>
		<div class="image-wrap-mobile bottom-padding-3 column-4-5">
			<img src="@/assets/images/t3v-m-kontakt.jpg" alt="cover-photo" />
		</div>
		<div class="proj-description bottom-padding-1 column-1-4">
			<span v-html="description4"></span>
		</div>
		<div class="image-wrap bottom-padding-3 column-1-5">
			<img src="@/assets/images/t3v-contact.jpg" alt="cover-photo" />
		</div>

		<div class="column-center top-padding-3">
			<a
				href="https://github.com/3tw/T3V"
				target="_blank"
				rel="noopener noreferrer"
				class="btn"
			>View on GitHub</a>
			<a href="https://tektrehvrhov.si"
				target="_blank"
				rel="noopener noreferrer"
				class="btn"
			>View Online</a>
		</div>
		<br />
	</div>
</template>

<script>
import LanguageChart from "../layout/LanguageChart.vue";

export default {
	name: "T3V",
	components: {
		LanguageChart,
	},
	data() {
		return {
			p1Title: `Tek treh vrhov`,
			description1: `This is a race I am really passionate about. It takes place across three summits near my hometown in Western Slovenia. In 2019 I decided to ran the race myself. That is when I got in touch with the organisers and offered to create a new website for the event. They agreed! The goal was clear. We wanted to make a website that has strong imagery and is easy to use - especially for those who want to spend less time online and more time running.`,
			description2: `The presence of header images is contrasted with clear layout that allows the user to quickly skim through the content and find out more informations about the race.`,
			description3: `I opted for "Mobile First" approach and gradually adjusted the layout for bigger screens. I structured the content with grid layout and occasionally used flexbox for particular purposes. Later on I also introduced Slovenian pages by creating a subdirectory. One can easily switch between Slovene and English by clicking language switch in the menu.`,
			description4: `Finally, the website also features a contact form, which is handled by a third party. Client-side validation, on the other hand, was set up with <a href="https://jqueryvalidation.org" target="_blank" rel="noopener noreferrer" class="underline">jQuery Validation Plugin</a>.`
		};
	}
};
</script>

<style lang="sass" scoped>

</style>