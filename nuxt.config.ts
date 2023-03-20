// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  app: {
    head: {
      title: 'PGA Tour Averages'
    },
    baseURL: '/golf-launch-monitor-averages/',
  },
  ssr: false,
})
