<template>
	<header id="nav">
		<router-link to="/">&lt;</router-link>
		<router-link to="/about">about</router-link>
		<router-link to="/projects">projects</router-link>
	</header>
</template>

<script>
export default {
	name: "NavBar"
};
</script>

<style lang="sass" scoped >
#nav
  display: flex
  height: 70px
  align-items: center
  justify-content: center
  padding-top: 1em
  padding-bottom: 0.5em
  background: $yellow

#nav a
  padding-right: 0.1em
  padding-left: 0.1em
  border: none
  font: inherit
  cursor: pointer
  outline: inherit
  font-size: 1.4em
  font-family: 'Muli', sans-serif
  font-weight: 300
  text-decoration: none

#nav a:hover
  opacity: 0.3
  transition: 0.15s ease-out

@media screen and ( min-width: 700px )
  #nav a
    padding-right: 0.5em
    padding-left: 0.5em
</style>