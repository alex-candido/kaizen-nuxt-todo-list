import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  nitro: {
    externals: {
      inline: ["uuid"],
    }
  }
})
