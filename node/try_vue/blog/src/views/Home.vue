<template>
  <div v-if="posts.length">
    <PostList :posts="posts" />
  </div>
  <div v-else-if="!error">Loading...</div>
  <div v-if="error">{{ error }}</div>
</template>

<script>
import getPosts from "../composables/getPosts";

import PostList from "../components/PostList.vue";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    const { posts, error, load } = getPosts();

    load();

    return { posts, error };
  },
};
</script>

<style></style>
