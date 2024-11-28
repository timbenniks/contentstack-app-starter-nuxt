export default defineNuxtConfig({
  compatibilityDate: '2024-10-29',
  ssr: false,
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    './modules/nuxt-contentstack-app',
    '@nuxtjs/tailwindcss',
  ],
})