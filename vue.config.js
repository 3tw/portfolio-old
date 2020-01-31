const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio/'
    : '/',
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/_variables.sass";`
            }
        }
    }
 }
