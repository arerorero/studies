import { ref } from "vue";

function getPost(id) {
  const post = ref([]);
  const error = ref(null);

  async function load() {
    try {
      let data = await fetch(`http://localhost:3000/posts/${id}`);
      if (!data.ok) {
        throw new Error("No data available");
      }
      post.value = await data.json();
    } catch (e) {
      error.value = e;
    }
  }
  return { post, error, load };
}

export default getPost;
