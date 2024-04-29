<template>
  <SideBar />
  <button @click="toggleMusicForm">cadastre uma musica</button>
  <br />
  <div class="space"></div>
  <button @click="toggleMusicList">lista de musicas</button>
  <PopUp v-if="showMusicForm" @close="toggleMusicForm">
    <MusicForm @close="toggleMusicForm" />
  </PopUp>
  <PopUp v-if="showMusicList" @close="toggleMusicList">
    <MusicList :list="list" @close="toggleMusicList" />
  </PopUp>
</template>

<script>
import PopUp from "./components/PopUp.vue";
import MusicList from "./components/MusicList.vue";
import MusicForm from "./components/MusicForm.vue";
import SideBar from "./components/SideBar.vue";

export default {
  name: "App",
  components: {
    PopUp,
    MusicList,
    MusicForm,
    SideBar,
  },
  data() {
    return {
      showMusicForm: false,
      showMusicList: false,
      title: "Login",
      paragraph: "n fiz o form",
      list: [
        {
          title: "Ancient Stones",
          author: "Jeremy Soule",
          link: "https://open.spotify.com/intl-pt/track/2gEAHKw83WHPD875YqDHH2?si=b9837774dfdb4875",
        },
        {
          title: "Birth of a Penguin",
          author: "Danny Elfman",
          link: "https://open.spotify.com/intl-pt/track/1R9xzwkirC3WRcLngXKPgS?si=dd62dc4a2a8c47ee",
        },
        {
          title: "The Imperial March",
          author: "John Williams",
          link: "https://open.spotify.com/intl-pt/track/2bw4WgXyXP90hIex7ur58y?si=531a4d6eb7e7401f",
        },
        {
          title: "Swag On",
          author: "Mary Riddle",
          link: "https://open.spotify.com/intl-pt/track/0iebmmLinBgwluCIICAg6f?si=43dea7b7f8274ec3",
        },
        {
          title: "Secunda",
          author: "Jeremy Soule",
          link: "https://open.spotify.com/intl-pt/track/5fHgBb5r91Jmdr8Q7dwmad?si=877b558bcd1e4151",
        },
      ],
    };
  },
  methods: {
    toggleMusicForm() {
      this.showMusicForm = !this.showMusicForm;
    },
    toggleMusicList() {
      this.showMusicList = !this.showMusicList;
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
  color: #d5def5;
  margin-top: 60px;
}

.space {
  margin-top: 20px;
}

h1 {
  border-bottom: 2px solid #d5def5;
  display: inline-block;
  padding-bottom: 10px;
}
a {
  cursor: pointer;
  color: #d5def5;
  text-decoration: underline;
}
</style>
