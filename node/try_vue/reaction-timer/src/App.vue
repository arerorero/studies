<template>
  <h1>Ninja Reaction Timer</h1>
  <button v-if="!isPlaying" @click="start">PLAY</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame" />
  <Results v-if="score" :score="score">Score: {{ score }}ms</Results>
</template>

<script>
//@ts-ignore
import Block from "./components/Block.vue";
//@ts-ignore
import Results from "./components/Results.vue";
export default {
  name: "App",
  components: { Block, Results },
  data() {
    return { isPlaying: false, delay: null, score: null };
  },
  methods: {
    start() {
      this.score = null;
      this.delay = Math.floor(Math.random() * 5000) + 1000;
      this.isPlaying = true;
    },
    endGame(reactionTime) {
      this.isPlaying = false;
      this.score = reactionTime;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
