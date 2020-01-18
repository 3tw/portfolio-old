<template>
	<div class="contact-me">
        <div class="icon-container">
            <font-awesome-icon class="icon" :icon="['fab', 'github']" />
            <font-awesome-icon class="icon" :icon="['fab', 'linkedin-in']" />
            <font-awesome-icon class="icon" :icon="['fab', 'instagram']" />
            <font-awesome-icon class="icon" :icon="['far', 'envelope']" />
        </div>
	</div>
</template>

<script>
  export default {
    name: "ContactMe",
    data() {
      return {
      };
    },
  };
</script>

<style lang="sass" scoped>
    .contact-me
        margin-top: 2em
    .icon-container
        text-align: center
        font-size: 2em
    .icon
        margin-right: 0.1em
        margin-left: 0.1em

</style>