<template>
  <h1>Add Your Favorite Music</h1>
  <form class="form-frame">
    <label for="title">Title:</label>
    <input type="text" id="title" name="title" />
    <label for="author">Author:</label>
    <input type="text" id="author" name="author" />
    <br />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: "MusicForm",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
h1 {
  color: #430f58;
}
.form-frame {
  color: #430f58;
  border: #430f58 1px solid;
  border-radius: 10px;
  justify-content: left;
  padding: 10px;
}
label {
  display: block;
  margin-top: 10px;
}
button {
  margin-top: 5%;
}
input {
  margin-top: 1%;
  border: #430f58 1px solid;
  background: rgb(202, 202, 252);
  border-radius: 5px;
}
</style>
