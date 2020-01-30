<template>
	<header id="navBar">
		<div class="flex-left">
			<router-link to="/about" @click.native='logoIsShown = true'>about</router-link>
			<router-link to="/projects" @click.native='logoIsShown = true'>projects</router-link>
		</div>
		<div class="flex-right">
			<router-link to="/" class="logo" @click.native='logoIsShown = false' v-show='logoIsShown'>
				<img :src="smallLogo" />
			</router-link>
		</div>
	</header>
</template>

<script>
export default {
  name: "NavBar",
  data() {
		return {
      logoIsShown: false
		};
  },
  computed: {
    smallLogo () {
      return require("../../assets/logo/logo-black-small.png")
    },
    currentRoute () {
      return this.$route.name;
    }
  },
  methods: {
    showLogo() {
      this.logoIsShown = true;
    },
    hideLogo() {
      this.logoIsShown = false;
    }
  }


};
</script>

<style lang="sass" scoped >
#navBar
  display: flex
  height: 4.5rem
  align-items: end
  justify-content: space-between
  background: $white
  padding-bottom: 0.5rem
  margin: 0 1.5rem 0 1.5rem 

#navBar a
  border: none
  font: inherit
  cursor: pointer
  outline: inherit
  font-size: 1.875rem
  font-family: 'Muli', sans-serif
  font-weight: 300
  color: $black
  text-decoration: none

.flex-left a
  padding-right: 0.3em

.flex-right .logo
  padding: 0

.flex-left
  flex-basis: auto

.flex-right
  flex-basis: 50px
  min-width: 50px
  flex-shrink: 0

@media screen and ( min-width: 700px )
	#navBar
		margin: 0 3.175rem 0 3.175rem
 .flex-left a
    padding-right: 0.5em
    
</style>