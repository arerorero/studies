<template>
  <div @click="stopTimer" v-if="showBlock" class="block">click</div>
</template>

<script>
export default {
  name: "Block",
  props: {
    delay: Number,
  },
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.$emit("end", this.reactionTime);
    },
  },
};
</script>

<style>
.block {
  width: 400px;
  border: 2px solid black;
  border-radius: 20px;
  background: red;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
