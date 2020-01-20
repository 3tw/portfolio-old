<template>
    <transition name="fade">
        <div class="projects core-font grid" v-show="projects">
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
    },
    props: {
        projects: Boolean
    }
}
</script>

<style lang="sass" scoped>
    .projects
        padding: 1em
        text-align: center

</style>