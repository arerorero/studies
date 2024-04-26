const app = Vue.createApp({
  data() {
    return {
      url: "https://www.google.com",
      showBooks: false,
      onlyFav: false,
      books: [
        {
          title: "Ancient Stones",
          author: "Jeremy Soule",
          img: "assets/1.jpg",
          isFav: false,
        },
        {
          title: "Birth of a Penguin",
          author: "Danny Elfman",
          img: "assets/1.jpg",
          isFav: false,
        },
        {
          title: "The Imperial March",
          author: "John Williams",
          img: "assets/1.jpg",
          isFav: false,
        },
        {
          title: "Swag On",
          author: "Mary Riddle",
          img: "assets/1.jpg",
          isFav: false,
        },
      ],
    };
  },
  computed: {
    filteredBooks() {
      if (this.onlyFav) {
        return this.books.filter((book) => book.isFav);
      }
      return this.books;
    },
  },
});

app.mount("#app");

// Path: index.html
