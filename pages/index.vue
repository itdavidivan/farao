<template>
  <section class="hero">
    <div class="content">
      <h1>
        <span class="animated-span">{{ animatedText }}</span> klub
        <span>FARAO</span>
      </h1>
      <p>
        Umenie, pohyb a dôvera medzi jazdcom a koňom. Objavte svet voltíže s
        klubom FARAO – kde sa krása spája so silou.
      </p>
      <div class="shadow-button">
        <NuxtLink to="/kontakt" class="cta-button">Kontaktujte nás</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      words: ["VOLTÍŽNY", "JAZDECKÝ"], // Slová, ktoré sa striedajú
      animatedText: "", // Text, ktorý sa bude zobrazovať
      wordIndex: 0, // Index aktuálneho slova
      charIndex: 0, // Index pre pridávanie/odstraňovanie písmen
      isDeleting: false, // Určuje, či sa momentálne maže (alebo pridáva)
      interval: null, // Interval pre animáciu
    };
  },
  mounted() {
    this.startAnimation();
  },
  beforeDestroy() {
    clearInterval(this.interval); // Zastaví interval pri zničení komponentu
  },
  methods: {
    startAnimation() {
      // Spúšťame interval, ktorý bude aktualizovať animáciu
      this.interval = setInterval(() => {
        const currentWord = this.words[this.wordIndex];

        if (this.isDeleting) {
          // Odstraňujeme písmená zo slova
          this.animatedText = currentWord.substring(0, this.charIndex);
          this.charIndex--;

          // Ak sa celé slovo vymaže, začneme pridávať písmenká ďalšieho slova
          if (this.charIndex < 0) {
            this.isDeleting = false; // Začíname pridávať
            this.wordIndex = (this.wordIndex + 1) % this.words.length; // Prepneme na ďalšie slovo
            this.charIndex = 0; // Resetujeme index na začiatok
          }
        } else {
          // Pridávame písmená do slova
          this.animatedText = currentWord.substring(0, this.charIndex + 1);
          this.charIndex++;

          // Keď sa celé slovo zobrazí, začneme ho mazať
          if (this.charIndex === currentWord.length) {
            this.isDeleting = true; // Začíname mazať
          }
        }
      }, 250); // Interval medzi písmenami (350ms)
    },
  },
};
</script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  align-content: center;
  width: 100%;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  margin: 0;
  box-sizing: border-box;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url("/images/horse-bg.jpg") no-repeat center center/cover;
  opacity: 0.15;
  z-index: 0;
}

.content {
  z-index: 1;
  max-width: 700px;
  margin: auto;
  color: #3e2c22;
  padding: 0 1.5rem;
  opacity: 0.9;
}

h1 {
  font-family: "Winky Rough", cursive;
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

h1 span {
  transition: all 0.2s ease-in-out;
  display: inline-block;
}
.animated-span {
  color: #c9a76a;
}

p {
  font-family: "Sour Gummy", sans-serif;
  font-size: 1.2rem;
  line-height: 1.7;
  color: #dfdfdf;
  margin-bottom: 2rem;
}

.cta-button {
  padding: 25px 30px;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #f0e6d2;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  margin: 70px;
  border-radius: 10px;
  transition: all 0.8s ease;
  position: relative;
  z-index: 1;
  background-color: transparent;
  border: 2px solid #f0e6d2;
}

.cta-button:hover {
  transform: scale(1.1);
  border-radius: 10px;
  background-color: #08090a;
  color: #f0e6d2;
  box-shadow: 0 0 5px #f0e6d2, 0 0 25px #f0e6d2, 0 0 50px #f0e6d2,
    0 0 200px #f0e6d2;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
}

.shadow-button {
  display: flex;
}
</style>
