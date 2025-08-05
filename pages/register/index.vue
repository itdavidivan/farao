<template>
  <div>
    <form @submit.prevent="register">
      <input type="email" v-model="email" placeholder="Email" />
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />

      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "RegisterPage",
  data() {
    return {
      email: "",
      password: "",
      username: "",
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post(
          "http://localhost:1337/api/auth/local/register",
          {
            email: this.email,
            username: this.username,
            password: this.password,
          }
        );
        // const jwt = response.data.jwt;
        // localStorage.setItem("jwt", jwt);
        this.$router.push("/login");
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap");

div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem;
  font-family: "Inter", sans-serif;
  background-color: #f9f7f321;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  max-width: 400px;
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

input {
  padding: 0.9rem 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: border 0.3s ease;

  &:focus {
    border-color: #c9a76a;
    outline: none;
  }
}

button {
  padding: 0.9rem 1rem;
  font-size: 1rem;
  background-color: #c9a76a;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #b28e59;
  }
}
</style>
