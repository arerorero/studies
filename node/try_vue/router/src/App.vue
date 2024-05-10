<template>
  <nav>
    <button @click="change(-1)">←</button>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'jobs' }">Jobs</router-link>
    <button @click="change(1)">→</button>
  </nav>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      route_now: "",
      routes: ["home", "about", "jobs"],
    };
  },
  methods: {
    check() {
      if (this.routes.includes(this.$router.currentRoute._rawValue.name)) {
        return this.$router.currentRoute._rawValue.name;
      }
      return "about";
    },
    change(num) {
      this.route_now = this.check();
      const index = this.routes.indexOf(this.route_now);
      this.$router.push({ name: this.routes[index + num] });
    },
  },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

button:hover {
  background: #aaa;
}

nav {
  padding: 30px 0 20px;
  margin-bottom: 20px;
  background: #eee;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

nav a {
  text-transform: uppercase;
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
}

nav a.router-link-exact-active {
  color: #aaf;
}
</style>
