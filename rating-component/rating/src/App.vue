<template>
  <router-view @vote="handleVote" :gotVote="vote"></router-view>
</template>

<script>
/* This is the main entry of the app to Home page then all the routing */
/* Takes place from there inside other apps. */
/* Also the global styling & global data handling will be made here. */

export default {
  data() {
    return {
      vote: 0,
    }
  },
  methods: {
    handleVote(vote) {
      this.vote = vote;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap');
</style>