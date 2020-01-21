<template>
    <transition name="fade">
        <div class="about core-font grid">
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
}
</script>

<style lang="sass" scoped>
    .about
        height: calc(100vh - 70px)
        background: $yellow
        color: $maroon
        padding: 1em
        text-align: center

</style>