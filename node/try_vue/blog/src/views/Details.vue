<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h1>{{ post.title }}</h1>
    <h3>
      <span v-for="tag in post.tags" :key="tag">{{ tag }}</span>
    </h3>
    <p class="pre">{{ post.body }}</p>
  </div>
</template>

<script>
import getPost from "../composables/getPost";
export default {
  props: { id: "id" },
  setup(props) {
    const { post, error, load } = getPost(props.id);

    load();

    return { post, error };
  },
};
</script>

<style scoped>
span {
  padding: 10px;
  color: #333;
}
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #333;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>
