import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const api = axios.create({
    baseURL: "http://localhost:1337", // URL vašej Strapi inštalácie
  });

  // Umožní použitie axios cez celý app
  nuxtApp.provide("api", api);
});
