// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "nuxt-svgo", "@nuxt/image"],
  svgo: {
    defaultImport: "component",
    componentPrefix: "I",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/styles/index.scss";',
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
      defaultLocale: "ru",
      apiBaseUrl: process.env.API_BASE_URL,
      apiKey: process.env.API_KEY,
    },
  },
  routeRules: {
    "/": { redirect: "/all-tasks/profile" },
    "/all-tasks": { redirect: "/all-tasks/profile" },
  },
});
