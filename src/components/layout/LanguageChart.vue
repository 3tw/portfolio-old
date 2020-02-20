<template>
	<div class="language-chart">
		<div class="language-bar">
			<span v-bind:style="jsBar">js</span>
			<span v-bind:style="htmlBar">html</span>
			<span v-bind:style="cssBar">css</span>
			<span v-bind:style="shellBar">shell</span>
		</div>
		<div class="language-keys"></div>
	</div>
</template>

<script>
export default {
	name: "LanguageChart",
	data() {
		return {
			jsBar: {
				color: "green",
				backgroundColor: "green",
				lineHeight: "10px",
				fontSize: "10p",
				width: ""
			},
			htmlBar: {
				color: "yellow",
				backgroundColor: "yellow",
				lineHeight: "10px",
				fontSize: "10px",
				width: ""
			},
			cssBar: {
				color: "pink",
				backgroundColor: "pink",
				lineHeight: "10px",
				fontSize: "10px",
				width: ""
			},
			shellBar: {
				color: "gray",
				backgroundColor: "gray",
				lineHeight: "10px",
				fontSize: "10px",
				width: ""
			},
			languages: null,
			sum: ""
		};
	},
	mounted () {
		const axios = require("axios")
		axios
			.get("https://api.github.com/repos/3tw/T3V/languages")
			// use arrow functions - they don't have their own "this"
			.then(response => {
				this.languages = response.data;
				this.updateLanguages()
			})
			.catch(error => {
				console.log(error);
			})
			.then(() => {});
	},	
	methods: {
		updateLanguages: function () {
			let html = this.languages.HTML;
			let css = this.languages.CSS;
			let js = this.languages.JavaScript;
			let shell = this.languages.Shell;
			let sum = html + css + js + shell;

			let htmlWidth = (100 * html) / sum;
			let cssWidth = (100 * css) / sum;
			let jsWidth = (100 * js) / sum;
			let shellWidth = (100 * shell) /sum;
			console.log(htmlWidth)
			console.log(sum)

			this.$set(this.htmlBar, "width", htmlWidth + "%");
			this.$set(this.cssBar, "width", cssWidth + "%");
			this.$set(this.jsBar, "width", jsWidth + "%");
			this.$set(this.shellBar, "width", shellWidth + "%");
		}
	},
};
</script>

<style lang="sass" scoped>
.language-bar
    width: 100%
    overflow: hidden
    display: flex

</style>