export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/strapi", // Tento modul pre integráciu so Strapi
    "@nuxt/content", // Tento modul pre prácu s obsahom, ako je Markdown
    "@pinia/nuxt",
  ],
  runtimeConfig: {
    public: {
      apiBase: "http://localhost:1337",
    },
  },

  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Sour+Gummy:ital,wght@0,100..900;1,100..900&family=Winky+Rough:ital,wght@0,300..900;1,300..900&display=swap",
        },
      ],
    },
  },
});
