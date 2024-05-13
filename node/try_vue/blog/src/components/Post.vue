<template>
  <div>
    <router-link :to="{ name: 'Details', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snipet }}</p>
    <span v-for="tag in post.tags" :key="tag"></span>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: { post: "post" },
  setup(props) {
    const snipet = ref(props.post.body.substring(0, 100) + "...");
    return { snipet };
  },
};
</script>

<style></style>
