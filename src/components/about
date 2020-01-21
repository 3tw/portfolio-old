<template>
    <transition name="fade">
        <div class="about core-font grid" v-show="about">
            <p>{{skillset}}</p>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return{
            skillset: `
                [html, css, javascript, vue.js, jquery, sass, python]
            `,
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
        text-align: center

</style>