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
      jobs: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => (this.jobs = data))
      .catch((err) => console.log(err));
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
