<template>
  <header class="navbar">
    <div class="container">
      <NuxtLink to="/" class="logo">FARAO<span>.SK</span></NuxtLink>

      <nav class="nav">
        <ul>
          <li><NuxtLink to="/" active-class="active">Domov</NuxtLink></li>
          <li><NuxtLink to="/onas" active-class="active">O nás</NuxtLink></li>
          <li>
            <NuxtLink to="/clanky" active-class="active">Články</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/uspechy" active-class="active">Úspechy</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/kontakt" active-class="active">Kontakt</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Sour+Gummy:ital,wght@0,100..900;1,100..900&family=Winky+Rough:ital,wght@0,300..900;1,300..900&display=swap");

/* .navbar {
  position: sticky;
  top: 0;
  width: 100%;
  background: linear-gradient(90deg, #f9f7f3, #fffdf8);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  z-index: 1000;
  padding: 1.2rem 0;
  transition: background 0.3s ease;
} */

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-family: "Winky Rough", cursive;
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.logo span {
  color: #c9a76a;
}

.nav ul {
  list-style: none;
  display: flex;
  gap: 2.5rem;
  margin: 0;
  padding: 0;
}

.nav a {
  font-family: "Winky Rough", cursive;
  font-size: 2rem;
  color: #ffffff;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  padding: 0.2rem 0;
  transition: color 0.3s ease;
}

.nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0%;
  height: 2px;
  background: #c9a76a;
  transition: width 0.3s ease;
}

.nav a:hover::after {
  width: 100%;
}

.nav a:hover {
  color: #c9a76a;
}

.nav a.active {
  color: #c9a76a;
}

.nav a.active::after {
  width: 100%;
}

/* Responsivita - pre menšie obrazovky */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav ul {
    flex-direction: column;
    gap: 1rem;
  }

  .nav a {
    font-size: 1.6rem;
  }
}
</style>
