<template>
	<footer id="footer">
		<div class="link-container">
			<span v-html="email"></span>
			<span v-html="github"></span>
			<span v-html="linkedin"></span>
		</div>
	</footer>
</template>

<script>
export default {
    name: "Footer",
	data() {
		return {
			email: `<a href="mailto:teo.winkler@gmail.com">@</a>`,
			github: `<a href="https://github.com/3tw" target="_blank" rel="noopener noreferrer">GitHub</a>`,
			linkedin: `<a href="https://www.linkedin.com/in/teo-winkler" target="_blank" rel="noopener noreferrer">LinkedIn</a>`
		};
	}
};
</script>

<style lang="sass" scoped >
#footer
	margin: 0 1.5rem 0 1.5rem 
	height: 5rem
	display: flex
	align-items: center
	justify-content: flex-end

.link-container
    text-align: right
    font-size: 1.5rem

.link-container span
    padding-left: 1.5rem

@media screen and ( min-width: 700px )
	#footer
		margin: 0 3.175rem 0 3.175rem
</style>