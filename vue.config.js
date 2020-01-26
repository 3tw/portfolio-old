const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/_variables.sass";`
            }
        }
    }
 }