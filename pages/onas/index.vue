<template>
  <div class="overflow">
    <div class="about-page">
      <h1>O nás</h1>
      <p class="intro">
        Sme tím, ktorý verí v silu pohybu a krásu v každom detaile. Voltíž nie
        je len šport, je to spôsob života, ktorý spája vášeň, disciplínu a
        eleganciu. Chceme vás privítať v našom svete a ukázať vám, čo všetko
        dokáže tento šport ponúknuť.
      </p>

      <div class="about-container">
        <!-- Sekcia Naša vízia -->
        <section class="vision">
          <h2 class="section-title">Naša vízia</h2>
          <p>
            Naším cieľom je vytvoriť komunitu, kde sa každý môže rozvíjať, rásť
            a dosahovať svoje sny. Voltíž nás učí nielen technike, ale aj dôvere
            v seba a ostatných.
          </p>
        </section>

        <!-- Sekcia Naši tréneri -->
        <nuxt-link class="trainers-link" to="/onas/treneri"
          ><section class="trainers">
            <h2 class="section-title">Naši tréneri</h2>
            <p>
              Naši tréneri sú odborníci, ktorí sa o vás postarajú s láskou a
              vášňou pre tento šport. Každý z nich má bohaté skúsenosti a
              neustále sa vzdeláva, aby vám mohol ponúknuť to najlepšie.
            </p>
          </section></nuxt-link
        >

        <!-- Sekcia História -->
        <section class="history">
          <h2 class="section-title">Naša história</h2>
          <p>
            Voltíž je šport s dlhou tradíciou. Začali sme ako malý klub, ale
            naším cieľom vždy bolo priniesť tento krásny šport širšej verejnosti
            a ukázať jeho nádherný potenciál.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.overflow {
  overflow: hidden;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* Rodičovský kontajner */
.about-page {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  font-family: "Poppins", sans-serif;
  color: #2e2e2e;
  text-align: center;
}

/* Nadpis */
h1 {
  font-family: "Playfair Display", serif;
  font-size: 3rem;
  color: #c9a76a;
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
  cursor: default;
}

/* Úvodný text */
.intro {
  font-size: 1.15rem;
  color: #555;
  max-width: 700px;
  margin: 0 auto 2rem auto;
  line-height: 1.8;
  cursor: default;
}

/* Kontajner pre sekcie, flexbox pre ich zarovnanie */
.about-container {
  display: flex;

  gap: 2rem;
  justify-content: center;

  margin: 0 auto;
}

/* Sekcie */
section {
  flex: 1;
  min-width: 350px;
  background: #fff;
  border: 1px solid #eaeaea;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  max-width: 48%; /* Zabezpečí, že sekcie sa zmestia vedľa seba */
}

/* Nadpisy sekcií */
h2 {
  font-size: 1.7rem;
  color: #4b2e1d;
  margin-bottom: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}
h2:hover {
  color: #c9a76a;
  transform: scale(1.1);
}
/* Sekcia Naša vízia */
.vision {
  background-color: #f9f9f9;
  opacity: 0.5;
  transition: opacity 0.5s ease-in-out;
  transform: translateX(-100%);
  animation: slideIn 2s forwards;
  cursor: pointer;
}

/* Sekcia Naši tréneri */
.trainers {
  background-color: #f9f9f9;
  opacity: 0.5;
  transition: opacity 0.5s ease-in-out;
  transform: translateY(-100%);
  animation: slideIn 1.6s forwards;
  cursor: pointer;
}
.trainers-link {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
/* Sekcia História */
.history {
  background-color: #f9f9f9;
  opacity: 0.5;
  transition: opacity 0.5s ease-in-out;
  transform: translateX(100%);
  animation: slideIn 2s forwards;
  cursor: pointer;
}
.vision:hover,
.trainers:hover,
.history:hover {
  opacity: 1;
  cursor: pointer;
}
/* Nadpisy sekcií */
.section-title {
  font-size: 2rem;
  color: #4b2e1d;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

p {
  font-size: 1.15rem;
  color: #555;
  max-width: 700px;
  margin: 0 auto 2rem auto;
  line-height: 1.8;
}
@keyframes slideIn {
  to {
    transform: translateX(0);
    transform: translateY(0);
  }
}
</style>
