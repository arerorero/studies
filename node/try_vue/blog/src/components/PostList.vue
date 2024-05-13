<template>
  <div class="post-list">
    <ul>
      <li v-for="post in posts" :key="post.id">
        <Post :post="post" />
      </li>
    </ul>
  </div>
</template>

<script>
import Post from "./Post.vue";
export default {
  components: { Post },
  props: { posts: "posts" },
  setup(props) {
    console.log();
  },
};
</script>

<style></style>
