// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["./assets/css/main.css"],
  modules: ["@unocss/nuxt"],
  app: {
    pageTransition: {
      name: 'fade',
      mode: 'out-in'
    }
  },
  // vite: {
  //   build: {
  //     cssMinify: false
  //   }
  // }
  // ,
  nitro: {
    serverAssets: [{
      baseName: "animations",
      dir: "./animations"
    }]
  }
})
