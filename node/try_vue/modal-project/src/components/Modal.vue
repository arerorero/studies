<template>
  <div class="backdrop" tabindex="0" @keydown.esc="close" @click.self="close">
    <div class="modal">
      <slot />
      <div class="actions">
        <slot name="links" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    showModal: Boolean,
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
button {
  background-color: #e6e6e6;
  color: #333;
  border: black 1px solid;
  box-shadow: 0 0 2px #333;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

li {
  list-style: none;
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

.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background-color: #aaf;
  color: #fff;
  border-radius: 10px;
  box-shadow: -2px 2px 10px #333;
}

.modal h1 {
  border-bottom: 2px solid hsl(240, 26%, 55%);
  display: inline-block;
  padding-bottom: 10px;
}

.modal .actions {
  margin: 0 auto;
  width: 40%;
  border-radius: 10px;
  border: hsl(240, 26%, 55%) 1px solid;
}

.modal .actions a {
  color: hsl(240, 26%, 55%);
  text-decoration: none;
}

.modal .actions a:hover {
  color: hsl(240, 26%, 30%);
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
