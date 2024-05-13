import { ref } from "vue";

function getPosts() {
  const posts = ref([]);
  const error = ref(null);

  async function load() {
    try {
      let data = await fetch("http://localhost:3000/posts");
      if (!data.ok) {
        throw new Error("No data available");
      }
      posts.value = await data.json();
    } catch (e) {
      error.value = e;
    }
  }
  return { posts, error, load };
}

export default getPosts;
