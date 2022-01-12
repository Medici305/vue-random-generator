const app = Vue.createApp({
  data() {
    return {
      firstName: "Cosimo",
      lastName: "De Medici",
      email: "Medici@gmail.com",
      gender: "female",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Cosimo_di_Medici_%28Bronzino%29.jpg",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
      (this.firstName = results[0].name.first),
        (this.lastName = results[0].name.last),
        (this.email = results[0].email),
        (this.gender = results[0].gender),
        (this.picture = results[0].picture.large);
    },
  },
});

app.mount("#root");