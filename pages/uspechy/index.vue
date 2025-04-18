<template>
  <div class="overflow">
    <div class="achievements-page">
      <h1>Úspechy</h1>
      <!-- <p class="intro">
        Každý krok vpred, každé víťazstvo, každá medaila – to všetko je dôkazom
        tvrdého tréningu, odhodlania a vášne, ktoré nás poháňajú. Na tejto
        stránke sa podelíme o naše najväčšie úspechy a ocenenia, ktoré sme
        dosiahli ako tím.
      </p> -->

      <div class="achievements-container">
        <!-- Sekcia Medaily a Ocenenia -->
        <section class="achievement-box achievements-section">
          <h2 class="section-title">Medaily & Ocenenia</h2>
          <div class="achievements-list">
            <div class="achievement-card">
              Zlatá medaila na Majstrovstvách Slovenska, 2023
            </div>
            <div class="achievement-card">
              Strieborná medaila na Mistrovství Českej republiky, 2022
            </div>
            <div class="achievement-card">
              Bronzová medaila na Medzinárodnej súťaži v Maďarsku, 2021
            </div>
          </div>
        </section>

        <!-- Sekcia Najvýznamnejšie momenty -->
        <section class="achievement-box milestones-section">
          <h2 class="section-title">Najvýznamnejšie momenty</h2>
          <div class="milestones-list">
            <div class="milestone-card">
              <h3>Začiatky klubu</h3>
              <p>
                V roku 2015 sa náš klub oficiálne založil a od začiatku sa
                zameriaval na vývoj talentov a kvalitný tréning.
              </p>
            </div>
            <div class="milestone-card">
              <h3>Prvý medzinárodný úspech</h3>
              <p>
                V roku 2018 sme získali naše prvé medzinárodné ocenenie na
                súťaži v Nemecku, čo nám otvorilo dvere do sveta profesionálneho
                voltíže.
              </p>
            </div>
            <div class="milestone-card">
              <h3>Naši mladí šampióni</h3>
              <p>
                Naši najmladší pretekári získali významné umiestnenia na
                národných a medzinárodných súťažiach, čo je obrovský krok vpred
                pre náš klub.
              </p>
            </div>
          </div>
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

.achievements-page {
  margin: 1rem auto;
  padding: 3rem 1rem;
  font-family: "Poppins", sans-serif;
  color: #2e2e2e;
  text-align: center;
}

h1 {
  font-family: "Playfair Display", serif;
  font-size: 3rem;
  color: #c9a76a;
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
}

.intro {
  font-size: 1.15rem;
  color: #555;
  max-width: 700px;
  margin: 0 auto 2rem auto;
  line-height: 1.8;
}

.achievements-container {
  display: flex;
  gap: 5rem;
  justify-content: center;
  margin: 0 auto;
  flex-wrap: wrap;
  align-items: stretch;
  padding: 0 100px;
}

/* Štýly pre rovnakú výšku a vnútorný scroll */
.achievement-box {
  flex: 1;
  min-width: 350px;
  max-width: 48%;
  max-height: 600px; /* alebo napr. 70vh */
  background-color: #f9f9f9;
  border: 1px solid #eaeaea;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  opacity: 0.5;
  animation: slideIn 1.5s forwards;
}

.achievement-box:hover {
  opacity: 1;
  cursor: default;
}

.achievements-section {
  transform: translateX(-100%);
}

.milestones-section {
  transform: translateX(100%);
}

.section-title {
  font-size: 2rem;
  color: #4b2e1d;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

/* Scrollovateľný obsah */
.achievements-list,
.milestones-list {
  overflow-y: auto;
  max-height: 400px;
  padding-right: 0.5rem;
}

.achievements-list::-webkit-scrollbar,
.milestones-list::-webkit-scrollbar {
  width: 8px;
}

.achievements-list::-webkit-scrollbar-thumb,
.milestones-list::-webkit-scrollbar-thumb {
  background: #c9a76a;
  border-radius: 8px;
}

.achievements-list::-webkit-scrollbar-track,
.milestones-list::-webkit-scrollbar-track {
  background: transparent;
}

/* Karty */
.achievement-card {
  background-color: #fff;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  font-size: 1.1rem;
  color: #555;
  font-weight: 600;
  margin-bottom: 1rem;
}

.milestone-card {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
}

.milestone-card h3 {
  font-size: 1.5rem;
  color: #4b2e1d;
  margin-bottom: 1rem;
}

.milestone-card p {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
}

@keyframes slideIn {
  to {
    transform: translateX(0);
    transform: translateY(0);
  }
}
</style>
