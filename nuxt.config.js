const config = require('./contentful.json');
import colors from "vuetify/es5/util/colors";

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-contentful-demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'assets/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Contentful
  */
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_ENVIRONMENT: config.CTF_ENVIRONMENT
  },
  devModules: [
    '@nuxtjs/vuetify'
  ],
  /*
  ** Build configuration
  */
 modules: [
  '@nuxtjs/markdownit'
],
markdownit: {
  preset: 'default',
  linkify: true,
  breaks: true
},
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

