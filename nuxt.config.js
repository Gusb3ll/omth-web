export default {
  ssr: false,

  target: 'static',

  head: {
    title: 'OMTHT2022',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'OMTHT2022 Website' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'og:title', content: 'OMTHT2022' },
      { hid: 'og:description ', name: 'og:description', content: 'OMTHT2022 Website' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', content: 'https://omtht.xyz' },
      { hid: 'og:image', name: 'og:image', content: 'https://cdn.discordapp.com/attachments/888349851870429184/925264302166933525/og_img.png' },
      { hid: 'og:image:width', name: 'og:image:width', content: '1440' },
      { hid: 'og:image:height', name: 'og:image:height', content: '779' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    script: [
      { hid: 'glitched-writer', src: 'https://cdn.jsdelivr.net/npm/glitched-writer/lib/index.min.js' }
    ]
  },

  css: ['~/assets/css/global.css'],

  plugins: [
  ],

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
