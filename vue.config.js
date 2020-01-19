const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

module.exports = {
   chainWebpack: config => {
       plugins: [
           new GoogleFontsPlugin({
               fonts: [
                   { family: "Source Sans Pro" }
               ]
           })
       ]
    }
}
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/_variables.sass";`
            }
        }
    },
    chainWebpack: config => {
        plugins: [
            new GoogleFontsPlugin({
                fonts: [
                    { family: "Muli", variants: ["200"] }
                ]
            })
        ]
     }
};