<template>
	<div id="app">
		<div class="main">
			<div class="navigation">
				<NavBar @click-btn="clickBtn" />
			</div>
			<transition name="fade">
				<div class="home" v-show="home">
					<div class="top">
						<Showcase />
					</div>
					<div class="bottom">
						<ContactMe />
					</div>
				</div>
			</transition>
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
	name: "home",
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
			if (e == "home") {
				this.about = false; //try changing to watches
				this.projects = false;
				setTimeout(() => {
					this.home = !this.home
				}, 300)
			} else if (e == "about") {
				this.home = false;
				this.projects = false;
				setTimeout(() => {
					this.about = !this.about
				}, 300)
			} else if (e == "projects" && ) {
				this.about = false;
				this.home = false;
				setTimeout(() => {
					this.projects = !this.projects;
				}, 300)
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
	
	//fade transition
	.fade-enter
		opacity: 1
	.fade-enter-active
		transition: opacity 0.5s ease
	.fade-leave-active
		transition: opacity 0.2s ease-out
	.fade-leave-to
		opacity: 0

</style>