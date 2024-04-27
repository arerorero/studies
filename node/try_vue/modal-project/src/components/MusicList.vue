<template>
  <div class="backdrop" tabindex="0" @keydown.esc="close" @click.self="close">
    <div class="modal">
      <h1>Music List</h1>
      <div class="list-frame">
        <ul class="music-list">
          <li v-for="music in list" :key="music.title">
            {{ music.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicList",
  props: {
    list: Array,
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.list-frame {
  border: hsl(240, 26%, 55%) 1px solid;
  border-radius: 10px;
  display: flex;
  justify-content: left;
}

.music-list {
  padding-left: 8px; /* Removes default padding */
  text-align: left;
}

.music-list li {
  list-style-position: inside; /* Ensures bullets or numbers are aligned with the text */
}
</style>
