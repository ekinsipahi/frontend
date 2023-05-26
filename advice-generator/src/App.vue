<template>
  <div class="container h-screen flex">
    <base-advice-card></base-advice-card>
  </div>
</template>

<script>
import BaseAdviceCard from "./components/UI/BaseAdviceCard.vue";
export default {
  name: 'AdviceGenerator',
  components: {
    BaseAdviceCard
  },

  methods() {

  },
}
</script>

<style>
/* Project wide tailwind IMPORT */
@import url('./assets/css/tailwind.css');
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap');

body {
  height: 100vh;
  background-color: hsl(218, 23%, 16%);
}
</style>
