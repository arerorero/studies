<template>
  <div class="backdrop" tabindex="0" @keydown.esc="close" @click.self="close">
    <div class="PopUp">
      <a class="close-button" @click="close">x</a>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "PopUp",
  props: {
    showPopUp: Boolean,
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
a {
  color: #430f58;
  text-decoration: none;
}
button {
  background-color: #430f58;
  color: #d5def5;
  border: #6643b5 1px solid;
  box-shadow: 0 0 2px #6643b5;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.close-button {
  color: #430f58;
  text-decoration: none;
  position: absolute;
  right: 1.4%;
  top: 0.8%;
}

.backdrop {
  top: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: fadeIn 0.3s ease-out forwards;
}

.PopUp {
  width: 30%;
  padding: 20px;
  margin: 7% auto;
  background-color: #aaf;
  color: #d5def5;
  border-radius: 10px;
  box-shadow: -2px 2px 10px #430f58;
  position: relative;
}

.PopUp h1 {
  border-bottom: 2px solid #430f58;
  display: inline-block;
  padding-bottom: 10px;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
