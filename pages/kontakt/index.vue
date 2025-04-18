<template>
  <div class="contact-page">
    <!-- <h1>Spájame pohyb s noblesou</h1>
    <p class="intro">
      Voltíž je viac než len šport – je to harmónia, elegancia a dôvera. Máte
      otázku, chcete nás navštíviť alebo snívate o tom, že sa pridáte? Ozvite sa
      nám. Radi vás privítame v našom svete.
    </p> -->

    <div class="contact-container">
      <!-- Sekcia Kontakt & Informácie -->
      <section class="contact-info">
        <h2 class="contact-info-title">Kontakt & Informácie</h2>
        <div class="contact-info-content">
          <p><strong>Sídlo klubu:</strong> Hlavná 123, Modra</p>
          <p>
            <strong>Telefón:</strong>
            <a href="tel:+421912345678"> +421 912 345 678</a>
          </p>
          <p>
            <strong>Email:</strong>
            <a href="mailto:info@voltiz.sk"> info@voltiz.sk</a>
          </p>
          <p>
            <!-- <strong>FACEBOOK:</strong> -->
            <a
              href="https://www.facebook.com/p/Jazdeck%C3%BD-klub-FARAO-100029002042986/?locale=sk_SK"
              ><img
                src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000"
                alt=""
                class="social-icon"
            /></a>
          </p>
        </div>
      </section>

      <!-- Sekcia Napíšte nám -->
      <!-- <section class="contact-form">
        <h2>Napíšte nám</h2>
        <p class="form-subtext">
          Radi sa s vami spojíme – či už ide o spoluprácu, otázky alebo len
          záujem o náš klub.
        </p>
        <form @submit.prevent="submitForm">
          <input
            type="text"
            v-model="name"
            placeholder="Vaše celé meno"
            required
          />
          <input
            type="email"
            v-model="email"
            placeholder="Váš e-mail"
            required
          />
          <textarea
            v-model="message"
            placeholder="Vaša správa alebo otázka"
            rows="5"
            required
          ></textarea>
          <button type="submit">Odoslať správu</button>
        </form>
        <p class="alert">{{ alert }}</p>
      </section> -->
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      alert: "",
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post("http://localhost:1337/api/forms", {
          data: {
            name: this.name,
            email: this.email,
            message: this.message,
          },
        });
        this.alert = "Vaša správa bola úspešne odoslaná";
        console.log("Response from backend:", response.data);
      } catch (error) {
        console.error("Error submitting form:", error);
      }

      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* Rodičovský kontajner */
.contact-page {
  max-width: 1200px;
  margin: 7.6rem auto;
  padding: 0 1rem;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  text-align: center;
  opacity: 0.9;
  cursor: default;
}

/* Nadpis */
h1 {
  font-family: "Playfair Display", serif;
  font-size: 3rem;
  color: #c9a76a;
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
}
.alert {
  color: #239317;
  font-weight: 600;
  margin-top: 1rem;
}
/* Úvodný text */
.intro {
  font-size: 1.15rem;
  color: #555;
  max-width: 700px;
  margin: 0 auto 2rem auto;
  line-height: 1.8;
}

/* Kontajner pre sekcie, flexbox pre ich zarovnanie */
.contact-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
}

/* Sekcie pre Kontakt & Informácie a Formulár */
section {
  flex: 1;
  min-width: 350px;
  background: #fff;
  border: 1px solid #eaeaea;
  padding: 1.6rem;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  max-width: 48%; /* Zabezpečí, že sekcie sa zmestia vedľa seba */
}

/* Nadpisy sekcií */
h2 {
  font-size: 1.7rem;
  color: #4b2e1d;
  margin-bottom: 1.2rem;
  font-weight: 600;
}

/* Kontakt info */
.contact-info {
  display: grid;
  text-align: center; /* Zarovná nadpis a obsah na stred */
}

.contact-info-title {
  font-size: 2.4rem;
  color: #4b2e1d;

  font-weight: 600;
}

.contact-info-content {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centrovanie textu */
  gap: 1rem; /* Medzera medzi jednotlivými položkami */
  font-size: 1.6rem;
  color: #555;
}

.contact-info a {
  color: #c9a76a;
  text-decoration: none;
  font-weight: 600;
}
.social-icon {
  transition: all 0.5s ease;
}
.social-icon:hover {
  transform: scale(1.2);
}
.contact-info a:hover {
  text-decoration: underline;
}

.form-subtext {
  font-size: 0.95rem;
  color: #777;
  margin-bottom: 1.5rem;
}

/* Formulár */
.contact-form form {
  display: flex;
  flex-direction: column;
}

.contact-form input,
.contact-form textarea {
  padding: 1rem;
  margin-bottom: 1.4rem;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-size: 1rem;
  font-family: inherit;
  background: #fff;
  transition: all 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #c9a76a;
  outline: none;
  box-shadow: 0 0 0 2px rgba(201, 167, 106, 0.2);
}

.contact-form button {
  background: linear-gradient(90deg, #c9a76a, #b69357);
  color: white;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 500;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
}

.contact-form button:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
</style>
