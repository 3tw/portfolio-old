<template>
    <div class="projects core-font grid" v-show="projects">
        <p>{{projDescriptions}}</p>
    </div>
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

</style>