<template>
	<div id="app">
		<div class="main">
			<div class="navigation">
				<NavBar @click-btn="clickBtn" />
			</div>
			<div class="home" v-show="home">
				<div class="top">
					<Showcase />
				</div>
				<div class="bottom">
					<ContactMe />
				</div>
			</div>
			<About :about="about" />
			<Projects :projects="projects" />
			
		</div>
	</div>
</template>

<script>
import NavBar from "./components/layout/NavBar.vue";
import Showcase from "./components/layout/Showcase.vue";
import ContactMe from "./components/ContactMe.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";

export default {
	name: "app",
	components: {
		NavBar,
		Showcase,
		ContactMe,
		About,
		Projects
	},
	data() {
		return {
			home: true,
			about: false,
			projects: false
		};
	},
	methods: {
		clickBtn(e) {
			if (e == "home" && this.home != true) {
				this.about = false; //try changing to watches
				this.projects = false;
				this.home = !this.home;
			} else if (e == "about" && this.about != true) {
				this.home = false;
				this.projects = false;
				this.about = !this.about;
			} else if (e == "projects" && this.projects != true) {
				this.home = false;
				this.about = false;
				this.projects = !this.projects;
			}
		}
	},
};
</script>

<style lang="sass">
	*
		box-sizing: border-box
		margin: 0
		padding: 0

	body
		font-family: Muli, sans-serif
		line-height: 1.6em
		min-width: 320px

	.main
		height: 100vh
		background-color: $yellow
		color: $maroon
	.navigation
		height: 70px
	.home
		display: flex
		flex-direction: column
		height: calc(100vh - 70px)
	.top
		flex-basis: 62%
	.bottom
		flex-basis: 38%

	.core-font
		font-size: 1.2em
	a
		color: $maroon

	h1
		font-family: Helvetica Neue, sans-serif
</style>