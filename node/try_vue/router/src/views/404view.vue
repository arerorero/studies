<template>
  <h1>404</h1>
  <p>Page not found</p>
  <h2>maybe u should go <router-link to="/">home</router-link></h2>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  font: bolder 100px sans-serif;
  color: red;
}
p {
  color: #666;
  padding: 20px;
}
h2 a {
  color: #aaf;
  text-decoration: none;
}
h2 a::before {
  content: "🏠";
}
</style>
