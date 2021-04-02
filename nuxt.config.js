export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'kose-yazisi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/flatly/bootstrap.min.css' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  loading:{color: '#666',height:'3px'},
  css: [
    //"~/assets/style/bootstrap.min.css"
    "~/assets/style/transition.css"
  ],

  transition:{
    name:"layout",
    mode:"out-in"
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
