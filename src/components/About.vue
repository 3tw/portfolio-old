<template>
    <div class="about core-font grid" v-show="about">
        <p>{{aboutMe}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return{
            aboutMe:`Hi, my name is Teo`,
        }
    },
    props: {
        about: Boolean
    }
}
</script>

<style lang="sass" scoped>
    .about
        padding: 1em

</style>