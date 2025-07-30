// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  

  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  modules: ["@nuxtjs/tailwindcss","@nuxtjs/i18n", 
    "@nuxt/image", 
    "@vueuse/nuxt", "@nuxt/icon"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    server: {
      hmr: false,
    },
  },
});
