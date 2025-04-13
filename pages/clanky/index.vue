<template>
  <section class="articles">
    <div class="container">
      <h2 class="articles-title">Najnovšie články</h2>
      <div class="articles-list">
        <!-- Dynamicky zobrazené články -->
        <div
          v-for="article in articles"
          :key="article.id"
          class="article-card right"
        >
          <img :src="article.img" class="mobile" />
          <div class="article-content">
            <h3 class="mobile">{{ article.title }}</h3>
            <p></p>

            <NuxtLink :to="article.link" class="read-more">
              Prečítať viac
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      articles: [
        {
          id: 1,
          title: "FARAO",
          description: "",
          link: "/clanky/farao",
          img: "/images/duda.jpg",
        },
        {
          id: 2,
          title: "BAREL CUP",
          description: "",

          link: "/clanky/barel",
          img: "/images/duda.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.right {
  /* position: relative;
  perspective: 310px; */
  opacity: 0.5;

  transition: all 1s ease;
}
.right:hover {
  opacity: 0.9;
  transform: scale(1.1);
  cursor: default;
}
.mobile {
  transition: all 1s ease;
  /* filter: contrast(0.5); */

  width: 200px;
  height: 100%;

  text-align: center;
  font-size: 2rem;

  margin-bottom: 2rem;
}
.mobile:hover {
  transform: scale(1.1);

  cursor: pointer;
}
.articles {
  padding-top: 2rem;
  padding-bottom: 1rem;
}

.articles-title {
  text-align: center;
  font-size: 2.5rem;
  color: #c9a76a;
  margin-bottom: 3rem;
}

.articles-list {
  display: flex;
  gap: 2rem;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  transform: scale(0.3);
  animation: scaleIn 1.5s forwards;
}

.article-card {
  padding: 8.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255, 255, 255);
}

.article-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.article-content {
  padding-top: 1rem;
  text-align: center;
}

.article-content h3 {
  font-size: 1.6rem;
  color: #4b2e1d;
  margin-bottom: 1rem;
}

.article-content p {
  color: #5a4536;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.read-more {
  font-weight: 600;
  color: #c9a76a;
  text-decoration: none;
  font-size: 2rem;
}

.read-more:hover {
  color: #4b2e1d;
}

@media (max-width: 768px) {
  .articles-list {
    grid-template-columns: 1fr;
  }

  .article-content h3 {
    font-size: 1.4rem;
  }

  .article-content p {
    font-size: 0.9rem;
  }
}
@keyframes scaleIn {
  to {
    transform: scale(1) rotate(0deg);
  }
}
</style>
