<template>
	<header id="navBar">
		<div class="flex-left">
			<router-link to="/" class="logo">tw</router-link>
		</div>
		<div class="flex-right">
			<router-link class="router-link" id="about" to="/about">About</router-link>
			<router-link class="router-link" id="projects" to="/projects">Projects</router-link>
		</div>
	</header>
</template>

<script>
export default {
	name: "NavBar"
};
</script>

<style lang="sass" scoped >
#navBar
  display: flex
  flex-direction: row
  align-items: flex-start
  justify-content: space-between
  background: $white
  margin: 1.5rem 1.5rem 0 1.5rem 
  height: 4.5rem

.router-link,
.logo
  border: none
  font: inherit
  cursor: pointer
  outline: inherit
  color: $black
  text-decoration: none
  
.router-link
  font-size: 1.5rem
  font-weight: 200
  font-family: 'Muli', sans-serif

.logo
  font-size: 1.5rem
  font-weight: 200
  text-transform: uppercase
  font-family: 'Muli', sans-serif

#navBar .router-link-exact-active
  color: $red

#navBar .router-link-active#about,
#navBar .router-link-active#projects,
  color: $red

.flex-right a
  padding-right: 0.4rem

.flex-left .logo
  padding: 0

.flex-left
  flex-basis: auto

.flex-right
  flex-basis: auto
  flex-shrink: 0

@media screen and ( min-width: 700px )
	#navBar
    margin: 1.5rem 3.175rem 0 3.175rem
 .flex-left a
    padding-right: 0.5em
    
</style>