export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    'lenis/dist/lenis.css',
    '~/assets/css/main.css'
  ],
  app: {
    head: {
      title: 'EBRAHEM MOHAMED — FILMMAKER',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio of Ebraheem Mohamed (EBRA) — Cinematographer, Director & Editor across narrative films, commercials, and documentaries.' },
        { name: 'theme-color', content: '#050505' },
        { property: 'og:title', content: 'EBRAHEM MOHAMED — FILMMAKER' },
        { property: 'og:description', content: 'Cinematographer · Director · Editor' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://api.fontshare.com/v2/css?f[]=clash-grotesk@200,300,400,500,600,700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap' }
      ]
    }
  }
})
