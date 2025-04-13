<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-logo">
        <NuxtLink to="/" class="logo">FARAO<span>.SK</span></NuxtLink>
      </div>
      <!-- <div class="footer-bottom">
        <p>&copy; 2025 FARAO.SK | Všetky práva vyhradené</p>
      </div> -->
      <div class="footer-social">
        <a href="#" class="social-icon">Facebook</a>
        <a href="#" class="social-icon">Instagram</a>
        <a href="#" class="social-icon">Twitter</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Môžete pridať potrebnú logiku alebo importy, ak sú potrebné
</script>

<style scoped>
.footer {
  background: linear-gradient(90deg, #f9f7f3, #fffdf8);
  padding: 1rem 0;
  font-family: "Winky Rough", cursive;
  color: #3e2c22;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.footer-logo .logo {
  font-size: 2rem;
  font-weight: 600;
  color: #4b2e1d;
  text-decoration: none;
}

.footer-logo .logo span {
  color: #c9a76a;
}

.footer-links ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.footer-links a {
  color: #3e2c22;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #c9a76a;
}

.footer-social {
  display: flex;
  gap: 1.5rem;
}

.footer-social .social-icon {
  color: #3e2c22;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.footer-social .social-icon:hover {
  color: #c9a76a;
}

.footer-bottom {
  font-size: 1.2rem;
  color: #777;
}

/* Responsivita - pre menšie obrazovky */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-links ul {
    flex-direction: column;
    gap: 1rem;
  }

  .footer-social {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
}
</style>
