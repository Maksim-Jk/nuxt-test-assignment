// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "nuxt-svgo", "@nuxt/image"],
  svgo: {
    defaultImport: "component",
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
  image: {
    provider: "server-images",
    providers: {
      server_images: {
        name: "server-images",
        provider: "~/providers/server-images.ts",
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
});
