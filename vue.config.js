const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

module.exports = {
    publicPath: '<portfolio>',
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/_variables.sass";`
            }
        }
    }
 }
