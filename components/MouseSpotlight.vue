<template>
  <div class="spotlight" :style="spotlightStyle"></div>
</template>

<script>
export default {
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
    };
  },
  computed: {
    spotlightStyle() {
      return {
        background: `radial-gradient(circle at ${this.mouseX}px ${this.mouseY}px, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 0%, transparent 30%)`,
      };
    },
  },
  methods: {
    updateMouse(e) {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    },
  },
  mounted() {
    window.addEventListener("mousemove", this.updateMouse);
  },
  beforeUnmount() {
    window.removeEventListener("mousemove", this.updateMouse);
  },
};
</script>

<style scoped>
.spotlight {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 999;
  transition: background 0.05s ease-out;
}
</style>
