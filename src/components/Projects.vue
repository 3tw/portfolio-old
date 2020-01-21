<template>
    <transition name="fade">
        <div class="projects core-font grid">
            <p>{{projDescriptions}}</p>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return{
            projDescriptions:`These are my projects`,
        }
    }
}
</script>

<style lang="sass" scoped>
    .projects
        height: 100vh
        background-color: $yellow
        color: $maroon
        padding: 1em
        text-align: center

</style>