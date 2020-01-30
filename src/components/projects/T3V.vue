<template>
	<div class="project-content grid">
		<h1 class="proj-title top-margin-2 column-1-4">{{p1Title}}</h1>
		<div class="proj-description bottom-padding-1 column-1-4">
			<p>{{description1}}</p>
		</div>
		<div class="image-wrap bottom-padding-3 column-1-5">
			<img src="@/assets/images/t3v-cover.jpg" alt="cover-photo" />
		</div>
		<div class="proj-description bottom-padding-1 column-1-4">
			<p>{{description2}}</p>
		</div>
		<div class="image-wrap bottom-padding-3 column-1-5">
			<img src="@/assets/images/t3v-races.png" alt="cover-photo" />
		</div>
		<div class="proj-description bottom-padding-1 column-1-4">
			<p>{{description3}}</p>
		</div>
		<div class="image-wrap bottom-padding-3 column-1-5">
			<img src="@/assets/images/t3v-txt.png" alt="cover-photo" />
		</div>
		<div class="proj-description bottom-padding-1 column-1-4">
			<p>{{description4}}</p>
		</div>
		<div class="image-wrap bottom-padding-1 column-1-2">
			<img src="@/assets/images/t3v-m-cover.png" alt="cover-photo" />
		</div>
		<div class="image-wrap bottom-padding-1 column-2-3">
			<img src="@/assets/images/t3v-m-menu.png" alt="cover-photo" />
		</div>
		<div class="image-wrap bottom-padding-1 column-3-4">
			<img src="@/assets/images/t3v-m-races.png" alt="cover-photo" />
		</div>
		<div class="proj-description top-padding-2 bottom-padding-1 column-1-4">
			<span v-html="description5"></span>
		</div>
		<div class="image-wrap bottom-padding-3 column-1-5">
			<img src="@/assets/images/t3v-contact.png" alt="cover-photo" />
		</div>

		<div class="column-center bottom-padding-3">
			<a
				href="https://github.com/3tw/T3V"
				target="_blank"
				rel="noopener noreferrer"
				class="btn"
			>View on GitHub</a>
			<a class="btn">Soon Online</a>
		</div>
		<br />
	</div>
</template>

<script>
export default {
	data() {
		return {
			p1Title: `Tek treh vrhov`,
			description1: `This is a race I am really passionate about. It takes place in the proximity of my home town near the Slovenian border with Italy. I ran the race myself in 2019. That is when I heard the organizers want to change the existing website and I decided to jump in. The goal was clear. We wanted to make a wesite that is easy to use - especially for those who spend little time online and more time running.`,
			description2: `Our goal was an UI that allows the user to quickly skim through and register for the race.`,
			description3: `Essential informations about the race are gathered in 'Races' and 'FAQ' sections. One can easily find them without getting lost in the subpages. They are featured upfront, whereas more extensive details can be found in in extandable boxes.`,
			description4: `I started with mobile-first approach and gradually adjusted the website for bigger screens. Once I was satisfied with the architecture I introduced Slovenian pages. One can easily switch between Slovene and English by clicking language switch in the navigation bar or menu on the mobile screens.`,
			description5: `Finally, the website features a contact-form, which is handled by a third party. Clientside validation is handled with <a href="https://jqueryvalidation.org" target="_blank" rel="noopener noreferrer" class="underline">jQuery Validation Plugin</a>.`
		};
	}
};
</script>

<style lang="sass" scoped>


</style>