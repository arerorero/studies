<template>
  <h1>JOBS</h1>
  <div class="job" v-for="job in jobs" :key="job.id">
    <router-link :to="{ name: 'job', params: { id: job.id } }">
      <h2>{{ job.title }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: "whatever", id: 1, details: "whatever" },
        { title: "i dont know", id: 2, details: "?" },
        { title: "blugus", id: 3, details: "blagus" },
      ],
    };
  },
};
</script>

<style scoped>
.job a {
  text-decoration: none;
}
.job h2 {
  background: #f4f4f4;
  color: #444;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  cursor: pointer;
  margin: 10px auto;
}
.job h2:hover {
  background: #ddd;
}
</style>
