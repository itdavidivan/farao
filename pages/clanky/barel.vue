<template>
  <div class="article-wrapper">
    <article class="article-card fade-in">
      <header class="article-header">
        <h1>🏇 Barelové preteky vo voltiži: Dynamika, presnosť a štýl</h1>
        <p class="subtitle">
          Objavte napínavý svet voltížnych pretekov, kde rozhoduje každá
          sekunda.
        </p>
        <div class="meta">
          <span class="author">Autor: Klub Voltíž Galanta</span>
          <span class="date">Publikované: 14. apríl 2025</span>
        </div>
      </header>

      <section class="content-section">
        <p>
          Barelové preteky predstavujú jedinečnú kombináciu rýchlosti, presnosti
          a športového ducha. V tejto disciplíne voltíže sa kladie dôraz na
          techniku aj mentálnu sústredenosť.
        </p>

        <div class="center-image">
          <img src="/images/duda.jpg" alt="Barelové preteky vo voltiži" />
          <figcaption>Ilustračný záber z tréningu</figcaption>
        </div>
      </section>

      <section class="content-section">
        <h2>🚀 Ako prebiehajú preteky?</h2>
        <p>
          Súťažiaci jazdia na koni alebo samostatne (v juniorských kategóriách)
          a musia v presnom poradí obísť tri barely rozmiestnené v tvare
          trojuholníka. Rozhoduje celkový čas, plynulosť pohybu a technická
          presnosť.
        </p>
      </section>

      <section class="content-section">
        <h2>🎯 Čo to prináša?</h2>
        <ul>
          <li>
            <strong>Rozvoj koordinácie:</strong> zlepšenie pohybových schopností
          </li>
          <li>
            <strong>Praktický tréning:</strong> príprava na zložitejšie voltížne
            zostavy
          </li>
          <li><strong>Zábava a súťaživosť:</strong> motivácia a tímový duch</li>
        </ul>
      </section>

      <footer class="article-footer">
        <p>
          Barelové preteky sú nielen výzvou, ale aj skvelou príležitosťou pre
          rozvoj disciplíny a zábavy. Ideálne pre jazdcov každého veku!
        </p>
      </footer>
    </article>
  </div>
</template>

<script>
export default {
  name: "BarrelRacingArticle",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Playfair+Display:wght@600;700&display=swap");

.article-wrapper {
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;

  font-family: "Inter", sans-serif;
  min-height: 100vh;
}

.article-card {
  background-color: #ffffff;
  width: 100%;
  max-width: 1200px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  margin: 0 auto;
  padding: 2rem 3rem;
}

.article-header {
  text-align: center;
  margin-bottom: 2rem;
}

.article-header h1 {
  font-family: "Playfair Display", serif;
  font-size: 2.6rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #475569;
  margin-bottom: 1rem;
  font-style: italic;
}

.meta {
  font-size: 0.95rem;
  color: #94a3b8;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.content-section {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-top: 1px solid #e2e8f0;
}

.content-section h2 {
  font-size: 1.5rem;
  color: #2563eb;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.content-section p {
  font-size: 1.05rem;
  color: #334155;
  line-height: 1.7;
  margin-bottom: 1rem;
}

ul {
  padding-left: 1.2rem;
  margin: 1rem 0;
}

li {
  color: #475569;
  line-height: 1.6;
  margin-bottom: 0.6rem;
}

li strong {
  color: #1e293b;
}

.center-image {
  text-align: center;
  margin: 2rem 0;
}

.center-image img {
  max-width: 500px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.center-image figcaption {
  font-size: 0.9rem;
  color: #64748b;
  margin-top: 0.5rem;
  font-style: italic;
}

.article-footer {
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
  font-size: 1.05rem;
  color: #334155;
  background-color: #f1f5f9;
  margin-top: 2rem;
  padding-bottom: 1rem;
}

/* Animácia pri načítaní */
@keyframes fadeIn {
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.fade-in {
  opacity: 0;
  transform: scale(0.98);
  animation: fadeIn 0.8s ease-out forwards;
}

/* Responzivita */
@media (max-width: 768px) {
  .article-card {
    padding: 1.5rem;
  }

  .article-header h1 {
    font-size: 2rem;
  }

  .content-section h2 {
    font-size: 1.3rem;
  }

  .center-image img {
    max-width: 100%;
  }

  .meta {
    flex-direction: column;
    gap: 0.3rem;
  }
}
</style>
