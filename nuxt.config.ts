// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  app: {
    baseURL: '/golf-launch-monitor-averages/'
  },
  ssr: false,
  colorMode: {
    classSuffix: ""
  },
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  }
})
