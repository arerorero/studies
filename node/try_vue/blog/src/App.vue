<template>
  <nav>
    <router-link :to="{ name: 'home' }">
      <h1 class="title">home</h1>
    </router-link>
  </nav>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  width: 100%;
  height: 6vh;
  text-transform: uppercase;
  background: #aaf;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

nav a h1 {
  font-weight: bold;
}

a {
  text-decoration: none;
}

nav a.router-link-exact-active {
  cursor: default;
  color: #aaf;
}
</style>
