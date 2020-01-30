<template>
	<header id="navBar">
		<div class="flex-left">
			<router-link to="/about" >about</router-link>
			<router-link to="/projects" >projects</router-link>
		</div>
		<div class="flex-right">
			<router-link to="/" class="logo" v-show='hideLogo'>
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
};
</script>

<style lang="sass" scoped >
#navBar
  display: flex
  height: 4.5rem
  align-items: flex-end
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
		margin: 0 3.175rem 0 3.175rem
 .flex-left a
    padding-right: 0.5em
    
</style>