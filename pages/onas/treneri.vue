<template>
  <div class="overflow">
    <div class="trainers-page">
      <h1>Naši tréneri</h1>
      <p class="intro">
        Náš tím trénerov je srdcom nášho klubu. Každý z nich prináša jedinečné
        skúsenosti, odbornosť a lásku k voltíži. Veríme, že dobrý tréner nie je
        len učiteľ, ale aj mentor, motivátor a podpora na ceste za cieľmi.
      </p>

      <div class="trainer-list">
        <div
          class="trainer-card"
          v-for="(trainer, index) in trainers"
          :key="index"
        >
          <img :src="trainer.photo" :alt="trainer.name" class="trainer-photo" />
          <h3>{{ trainer.name }}</h3>
          <p class="trainer-role">{{ trainer.role }}</p>
          <p class="trainer-bio">{{ trainer.bio }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      trainers: [
        {
          name: "Lucia Novotná",
          role: "Hlavná trénerka",
          bio: "Lucia má viac než 10 rokov skúseností s voltížou a vedie náš tím s vášňou a empatiou.",
          photo: "/images/trainers/lucia.jpg",
        },
        {
          name: "Peter Kováč",
          role: "Asistent trénera",
          bio: "Peter sa zameriava na technické zručnosti a prípravu na súťaže. Jeho prístup je precízny a podporujúci.",
          photo: "/images/trainers/peter.jpg",
        },
        {
          name: "Simona Hrivňáková",
          role: "Trénerka pre začiatočníkov",
          bio: "Simona má cit pre prácu s deťmi a začiatočníkmi. Jej trpezlivosť a energia sú inšpirujúce.",
          photo: "/images/trainers/simona.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.overflow {
  overflow: hidden;
}
.trainers-page {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
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
.trainer-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  animation: slideIn 1.6s forwards;
  transform: scale(0.1);
  opacity: 0.1;
}
.trainer-card {
  background: #fff;
  border: 1px solid #eaeaea;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  text-align: center;
  transition: transform 0.3s ease;
}
.trainer-card:hover {
  transform: translateY(-5px);
}
.trainer-photo {
  width: 100%;
  height: auto;
  border-radius: 50%;
  margin-bottom: 1rem;
  object-fit: cover;
}
h3 {
  font-size: 1.5rem;
  color: #4b2e1d;
  margin-bottom: 0.5rem;
}
.trainer-role {
  font-weight: bold;
  color: #c9a76a;
  margin-bottom: 1rem;
}
.trainer-bio {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
}
@keyframes slideIn {
  to {
    transform: translateX(0);
    transform: translateY(0);
    scale: 1;
    opacity: 1;
  }
}
</style>
