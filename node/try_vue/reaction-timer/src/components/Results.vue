<template>
  <h1>Your score was: {{ score }}ms</h1>
  <h2>You are a: {{ rank }}</h2>
</template>

<script>
export default {
  name: "Results",
  props: {
    score: Number,
  },
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 280) {
      this.rank = "Ninja";
    } else {
      this.rank = "booboo fart";
    }
  },
};
</script>

<style></style>
