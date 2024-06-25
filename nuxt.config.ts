// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title:
        "Seenday - сервис для продажи фотографий онлайн и работы с клиентами",
      link: [{ rel: "icon", href: "/favicon.png" }],
    },
  },
  css: ["~/assets/scss/global.scss"],
  modules: ["radix-vue/nuxt", "@nuxt/fonts", "@nuxt/image", "@vueuse/nuxt"],
  fonts: {
    families: [{ name: "montserrat", provider: "google" }],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_vars.scss" as *;',
        },
      },
    },
  },
});
