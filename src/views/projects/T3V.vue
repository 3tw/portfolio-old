<template>
	<div class="project-content grid">
		<h2 class="bp-1 column-1-4">{{p1Title}}</h2>
		<LanguageChart 
			v-bind:repoUrl="repoUrl"
			class="column-1-4"/>

		<div class="proj-description bp-1 tp-1 column-1-4">
			<p>{{description1}}</p>
		</div>
		<div class="image-wrap bp-3 column-1-5">
			<img src="@/assets/images/t3v-cover-m.jpg" 
				srcset="@/assets/images/t3v-cover-m.jpg 650w,
				@/assets/images/t3v-cover.jpg 750w"
				sizes="100vw"
				alt="Cover photo" />
		</div>
		<div class="image-wrap bp-3 column-1-5">
			<img src="@/assets/images/t3v-about-m.jpg" 
				srcset="@/assets/images/t3v-about-m.jpg 650w,
				@/assets/images/t3v-about.jpg 750w"
				sizes="100vw"
				alt="About photo" />
		</div>
		<div class="proj-description bp-1 column-1-4">
			<p>{{description2}}</p>
		</div>
		<div class="image-wrap bp-3 column-1-5">
			<img src="@/assets/images/t3v-race-m.jpg" 
				srcset="@/assets/images/t3v-race-m.jpg 650w,
				@/assets/images/t3v-race.jpg 750w"
				sizes="100vw"
				alt="Race photo" />
		</div>
		<div class="proj-description bp-1 column-1-4">
			<p>{{description3}}</p>
		</div>
		<div class="image-wrap-mobile bp-3 column-1-2">
			<img src="@/assets/images/t3v-m-races-m.jpg" 
				srcset="@/assets/images/t3v-m-races-m.jpg 650w,
				@/assets/images/t3v-m-races.jpg 750w"
				sizes="100vw"
				alt="Races photo" />
		</div>
		<div class="image-wrap-mobile bp-3 column-2-3">
			<img src="@/assets/images/t3v-m-contact-m.jpg" 
				srcset="@/assets/images/t3v-m-contact-m.jpg 650w,
				@/assets/images/t3v-m-contact.jpg 750w"
				sizes="100vw"
				alt="Contact photo" />
		</div>
		<div class="image-wrap-mobile bp-3 column-3-4">
			<img src="@/assets/images/t3v-m-menu-m.jpg" 
				srcset="@/assets/images/t3v-m-menu-m.jpg 650w,
				@/assets/images/t3v-m-menu.jpg 750w"
				sizes="100vw"
				alt="Menu photo" />
		</div>
		<div class="image-wrap-mobile bp-3 column-4-5">
			<img src="@/assets/images/t3v-m-kontakt-m.jpg" 
				srcset="@/assets/images/t3v-m-kontakt-m.jpg 650w,
				@/assets/images/t3v-m-kontakt.jpg 750w"
				sizes="100vw"
				alt="Kontakt photo" />
		</div>
		<div class="proj-description bp-1 column-1-4">
			<span v-html="description4"></span>
		</div>
		<div class="image-wrap bp-3 column-1-5">
			<img src="@/assets/images/t3v-contact-m.jpg" 
				srcset="@/assets/images/t3v-contact-m.jpg 650w,
				@/assets/images/t3v-contact.jpg 750w"
				sizes="100vw"
				alt="Contakt photo" />
		</div>

		<div class="column-center tp-3">
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
import LanguageChart from "../../components/LanguageChart.vue";

export default {
	name: "T3V",
	components: {
		LanguageChart,
	},
	data() {
		return {
			repoUrl: "https://api.github.com/repos/3tw/T3V/languages",		
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