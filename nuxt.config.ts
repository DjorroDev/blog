// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  css: ['@/assets/css/roboto.css'],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.API_KEY,
      },
    ],
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    '@nuxtjs/axios',
  ],
  colorMode: {
    classSuffix: ''
  },
  image: {
    provider: 'storyblok'
  }
})
