<template>
  <h1>Music List</h1>
  <div class="list-frame">
    <ul class="music-list">
      <li v-for="music in list" :key="music.title">
        <a :href="music.link">{{ music.title }}</a>
        <span class="author"> {{ music.author }}</span>
      </li>
    </ul>
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

<style scoped>
h1 {
  color: #430f58;
}
.list-frame {
  border: #430f58 1px solid;
  border-radius: 10px;
}

.music-list {
  padding-left: 8px; /* Removes default padding */
}

.author {
  font-style: italic;
  padding-right: 8px;
  color: #430f58;
}
.music-list li {
  list-style-position: inside; /* Ensures bullets or numbers are aligned with the text */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
a {
  color: #430f58;
  text-decoration: none;
}
</style>
