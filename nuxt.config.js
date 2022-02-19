export default {
  ssr: false,

  target: 'static',

  head: {
    title: 'osu!mania Thailand Tournament',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'osu!mania thailand tournament website' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:url', name: 'og:url', content: 'https://www.omtht.xyz' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', content: 'osu!mania thailand tournament' },
      { hid: 'og:description ', name: 'og:description', content: 'osu!mania thailand tournament website' },
      { hid: 'og:image', name: 'og:image', content: 'https://cdn.discordapp.com/attachments/888349851870429184/925264302166933525/og_img.png' },
      { hid: 'og:image:width', name: 'og:image:width', content: '1440' },
      { hid: 'og:image:height', name: 'og:image:height', content: '779' },
      { hid: 'og:locale', name: 'og:localet', content: 'en_US' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    script: []
  },

  css: ['~/assets/css/global.css'],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    'nuxt-windicss',
    'nuxt-animejs',
    'nuxt-swc'
  ],

  modules: [
    '@nuxtjs/google-gtag'
  ],

  build: {
  },

  'google-gtag': {
    id: String(process.env.GOOGLE_ANALYTICS_ID),
    config: {
      anonymize_ip: true,
      send_page_view: false,
      linker: {
        domains: ['https://omtht.xyz']
      }
    }
  }
}
