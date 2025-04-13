<template>
  <div class="vaulting-article">
    <div class="article-card">
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.WgfLlC_aq5RCv5xe-x_sZgHaE8&pid=Api"
        alt="Voltiža - tréning"
        class="article-image"
      />
      <div class="article-content">
        <h1>🐎 Voltiža: Krása a disciplína v jednom</h1>
        <p>
          Voltiža, známa aj ako jazdecká gymnastika, je šport, ktorý spája jazdu
          na koni s gymnastickými prvkami. Vyžaduje si nielen fyzickú zdatnosť,
          ale aj dôveru medzi jazdcom a koňom.
        </p>

        <h2>🤸‍♀️ Čo je voltiža?</h2>
        <p>
          Voltiža je športová disciplína, kde cvičenci predvádzajú gymnastické
          pohyby na chrbte koňa, ktorý sa pohybuje v kruhu. Ide o náročný, ale
          vizuálne pôsobivý šport.
        </p>

        <h2>🏅 História voltiže</h2>
        <p>
          Pôvod voltiže siaha do Európy, kde vznikla ako tréningová metóda pre
          jazdcov. Dnes je uznávanou súťažnou disciplínou na celosvetovej
          úrovni.
        </p>

        <h2>🌟 Výhody voltiže</h2>
        <ul>
          <li>Rozvoj koordinácie a rovnováhy</li>
          <li>Budovanie dôvery medzi jazdcom a koňom</li>
          <li>Spája pohyb, umenie a šport</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VaultingArticle",
};
</script>

<style scoped>
.vaulting-article {
  display: flex;
  justify-content: center;
  padding: 2rem;
  background-color: #f8f9fa;
}

.article-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}

.article-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border-radius: 30px;
  opacity: 0.8;

  transition: all 0.3s ease-in-out;
  /* animation: rotate-infinite 5s linear infinite; */
}
.article-image:hover {
  opacity: 1;
}

.article-content {
  padding: 2rem;
}

.article-content h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #2d2d2d;
}

.article-content h2 {
  font-size: 1.4rem;
  margin-top: 1.5rem;
  color: #444;
}

.article-content p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.article-content ul {
  margin: 1rem 0;
  padding-left: 1.2rem;
}

.article-content ul li {
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 0.5rem;
}
@keyframes rotate-infinite {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
