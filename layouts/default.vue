<template>
  <div class="container">
    <MouseSpotlight />
    <header><Navbar /></header>
    <main>
      <NuxtPage />
    </main>
    <!-- <footer><Footer /></footer> -->
  </div>
</template>

<script setup lang="ts">
import MouseSpotlight from "~/components/MouseSpotlight.vue";
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%; /* Nastavujeme výšku na 100% pre html a body */
}

.container {
  height: 100vh; /* Výška kontajnera bude rovnaká ako výška obrazovky */
  display: flex;
  flex-direction: column; /* Uistíme sa, že všetky deti sú v stĺpci */
  background-image: url("../images/duda.jpg");
  background-size: cover;
  background-position: 50% 35%;
}
</style>
