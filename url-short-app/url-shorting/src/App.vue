<template>
  <base-header></base-header>
  <base-hero></base-hero>
  <base-statistics></base-statistics>
  <base-get-started></base-get-started>
  <base-footer></base-footer>
</template>

<script>
import BaseHeader from "./components/UI/BaseHeader.vue";
import BaseHero from "./components/UI/BaseHero.vue";
import BaseGetStarted from "./components/UI/BaseGetStarted.vue";
import BaseFooter from "./components/UI/BaseFooter.vue";
import BaseStatistics from "./components/UI/BaseStatistics.vue";
// import BaseStatistics from "./components/UI/BaseStatistics.vue";

export default {
  components: {
    BaseHeader,
    BaseHero,
    BaseStatistics,
    BaseGetStarted,
    BaseFooter,
  }
}
</script>

<style>
@import url('./assets/css/tailwind.css');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');
</style>