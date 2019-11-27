
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'http://netdna.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.css' },
      { rel: 'stylesheet', href: 'http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.12/summernote.css' }
    ],
    script:[
     { src:'http://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js' , type:'text/javascript' },
     { src:'http://netdna.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.js' , type:'text/javascript' },
     { src:'http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.12/summernote.js' , type:'text/javascript' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
