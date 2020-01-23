<template>
	<div class="grid project-content content-1">
		<span class="proj-title content-wrap">{{p1Title}}</span>
		<div class="content-wrap">
			<p class="proj-description">{{description1}}</p>
		</div>
		<div class="image-wrap">
			<img src="@/assets/images/p2cover1.jpg" alt="cover-photo" />
		</div>
		<div class="content-wrap">
			<p class="proj-description">{{description2}}</p>
		</div>
		<div class="mobile">
			<img src="@/assets/images/p2mobile1.jpg" alt="cover-photo" />
		</div>
		<div class="content-wrap">
			<p class="proj-description">{{description3}}</p>
		</div>
		<div class="mobile">
			<img src="@/assets/images/p2mobile2.jpg" alt="cover-photo" />
		</div>
		<div class="content-wrap">
			<span v-html="description4" class="proj-description"></span>
		</div>
		<div class="mobile">
			<img src="@/assets/images/p2mobile3.jpg" alt="cover-photo" />
		</div>
		<br />
		<br />
		<div class="content-wrap center bottom-pad">
			<a
				href="https://github.com/3tw/Go4Trail"
				target="_blank"
				rel="noopener noreferrer"
				class="btn"
			>View on GitHub</a>
			<a class="btn">Soon Online</a>
		</div>
		<br>
	</div>
</template>

<script>
export default {
	data() {
		return {
			p1Title: `Go4trail`,
			description1: `This is a race I am really passionate about. It takes place in the proximity of my home town near the Slovenian border with Italy. I ran the race myself in 2019. That is when I heard that organizers wanted to rebrand the event in the 2020. Here is where I jumped in. The goal was clear. We wanted to make a wesite that will be easy to use especially for those who spend less time online and more time running.`,
			description2: `Our goal was an UI that allows the user to quckly skim through and apply to the race. More extensive informations are gathered only in the 'Races' and 'FAQ' section. One can easily find them without getting lost in the subpages.`,
			description3: `I started with mobile-first approach and gradually adjusted the website for bigger screens. Once I was satisfied with the architecture I introduced Slovenian pages. One can easily switch between Slovene and English by clicking language switch in the navigation bar or menu on the mobile screens.`,
			description4: `Finally, the website features a contact-form, which is handled by a third party. Clientside validation is handled with <a href="https://jqueryvalidation.org" target="_blank" rel="noopener noreferrer">jQuery Validation Plugin</a>.`,
		};
	},
};
</script>

<style lang="sass" scoped>
.content-1
	padding-bottom: 2em
	img
		padding-top: 1em
		padding-bottom: 2em
.content-wrap.center
	justify-self: center


</style>