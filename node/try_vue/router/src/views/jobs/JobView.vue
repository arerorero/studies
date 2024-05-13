<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>{{ job.description }} who want to work for {{ job.company }}</p>
    <p>Salary: {{ job.salary }}</p>
    <button class="suscribe">suscribe!</button>
  </div>
  <div v-else>
    <h1 class="loading">🌀</h1>
    <h1>loading...</h1>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    fetch(`http://localhost:3000/jobs/${this.id}`)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
.suscribe {
  margin-top: 20px;
  height: 4em;
  width: 10em;
  background: #f4f4f4;
  color: #444;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
.loading {
  font-size: 3rem;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg); /* Start rotation */
  }
  100% {
    transform: rotate(360deg); /* End rotation */
  }
}
</style>
