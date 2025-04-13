<template>
  <div class="barrel-article">
    <div class="card fade-in">
      <img
        src="/images/duda.jpg"
        alt="Barelové preteky vo voltiži"
        class="image"
      />
      <div class="content">
        <h1>🏇 Barelové preteky vo voltiži: Dynamika, presnosť a štýl</h1>
        <p>
          Barelové preteky sú napínavou disciplínou vo voltiži, ktorá preveruje
          rýchlosť, koordináciu a zručnosť jazdcov. Cieľom je čo najrýchlejšie
          obehnúť sudy (barely) v stanovenom poradí bez chýb.
        </p>

        <h2>🚀 Ako prebiehajú preteky?</h2>
        <p>
          Súťažiaci jazdia na koni alebo samostatne (v juniorských kategóriách)
          a musia v presnom poradí obísť tri barely rozmiestnené v trojuholníku.
          Čas a technika rozhodujú o víťazovi.
        </p>

        <h2>🎯 Čo to prináša?</h2>
        <ul>
          <li>Rozvoj rýchlej reakcie a pohybovej presnosti</li>
          <li>Výborná príprava pre ďalšie voltížne disciplíny</li>
          <li>Vzrušenie, tímová práca a zábava</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BarrelRacingArticle",
};
</script>

<style scoped>
.barrel-article {
  display: flex;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(to right, #f8fafc, #eef1f5);
  min-height: 100vh;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.card {
  background-color: #fff;
  border-radius: 14px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 850px;
  width: 100%;
  transform: scale(0.95);
  animation: fadeIn 1s ease forwards;
}

.image {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}

.content {
  padding: 2rem;
}

h1 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.3rem;
  color: #34495e;
  margin-top: 1.5rem;
}

p {
  color: #555;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

ul {
  margin-top: 1rem;
  padding-left: 1.5rem;
}

li {
  color: #555;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  list-style: circle;
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
  transform: scale(0.95);
  animation: fadeIn 0.8s ease-out forwards;
}
</style>
