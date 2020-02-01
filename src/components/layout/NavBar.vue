<template>
	<header id="navBar">
		<div class="flex-left">
			<router-link to="/about" >about</router-link>
			<router-link to="/projects">projects</router-link>
		</div>
		<div class="flex-right">
			<router-link to="/" class="logo" v-show='hideLogo'>
					<!--<img class="svg-small-logo" src="@/assets/logo/small-logo.svg" />-->
          <SmallLogo class="svg-small-logo" />
			</router-link>
		</div>
	</header>
</template>

<script>
import SmallLogo from "../SmallLogo.vue"

export default {
  name: "NavBar",
  data() {
		return {
		};
  },
  computed: {
    smallLogo () {
      return require("../../assets/logo/logo-black-small.png")
    },
    hideLogo: function () {
      if (this.$route.name == "home") {
        return false
      } else {
        return true
      }
    },
  },
  components: {
      SmallLogo
    }
};
</script>

<style lang="sass" scoped >
#navBar
  display: flex
  height: 4.5rem
  align-items: flex-start
  justify-content: space-between
  background: $white
  margin: 1rem 1.5rem 0 1.5rem 

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

#navBar .router-link-active
  color: $red

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
		margin: 1 3.175rem 0 3.175rem
 .flex-left a
    padding-right: 0.5em
    
</style>