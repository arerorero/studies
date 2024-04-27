<template>
  <button @click="toggleModal">cadastre uma musica</button>
  <Modal v-if="showModal" @close="toggleModal">
    <h1>teste</h1>
    <h3>teste de h3</h3>
    <template v-slot:links>
      <li>
        <a href="#">HOME</a>
      </li>
      <li>
        <a href="#this it not home leave">Not HOME</a>
      </li>
    </template>
  </Modal>
  <br />
  <button @click="toggleModal2">lista de musicas</button>
  <MusicList v-if="showModal2" @close="toggleModal2" :list="list"> </MusicList>
</template>

<script>
import Modal from "./components/Modal.vue";
import MusicList from "./components/MusicList.vue";
export default {
  name: "App",
  components: {
    Modal,
    MusicList,
  },
  data() {
    return {
      showModal: false,
      showModal2: false,
      title: "Login",
      paragraph: "n fiz o form",
      list: [
        {
          title: "Ancient Stones",
          author: "Jeremy Soule",
        },
        {
          title: "Birth of a Penguin",
          author: "Danny Elfman",
        },
        {
          title: "The Imperial March",
          author: "John Williams",
        },
        {
          title: "Swag On",
          author: "Mary Riddle",
        },
      ],
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2;
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
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 2px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
a {
  cursor: pointer;
  color: blue;
  text-decoration: underline;
}
</style>
