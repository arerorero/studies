<template>
  <div
    class="side-bar"
    :class="{ 'activate-animation': animation }"
    @mouseover="activateAnimation()"
  >
    <img src="../assets/sidebar.svg" alt="icone sidebar" />
  </div>
</template>

<script>
export default {
  name: "SideBar",
  props: {
    showPopUp: Boolean,
  },
  data() {
    return {
      animation: false,
    };
  },
  methods: {
    activateAnimation() {
      console.log("pass");
      // Método para garantir que as animações sejam reativadas se necessário
      this.animation = true;
    },
  },
};
</script>

<style>
.side-bar {
  background-color: #8594e4;
  border: 2px solid #4b0082;
  border-top: none;
  border-top-right-radius: 2%;
  width: 16%;
  height: 100%;
  position: fixed;
  top: 0;
  left: -13.5%;
  display: flex;
}
.side-bar img {
  top: 3px;
  right: 2px;
  width: 13%;
  height: auto;
  position: absolute;
}

.activate-animation {
  animation: unshowSideBar 0.5s ease-in-out forwards;
}

.activate-animation:hover {
  left: -1%;
  animation: showSideBar 0.5s ease-in-out forwards;
}

@keyframes showSideBar {
  from {
    left: -13.5%;
  }
  to {
    left: -1%;
  }
}

@keyframes unshowSideBar {
  from {
    left: -1%;
  }
  to {
    left: -13.5%;
  }
}
</style>
