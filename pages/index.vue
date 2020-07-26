<template>
  <div class="all">
    <b-container class="title-text" fluid="md">
      <b-row>
        <b-col>
          <h1 id="title-foodie">
            Foodie
            <span id="title-gen">Generator</span>
          </h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="12" xs="4" class="pb-2 quote-container">
          <b-button @click="redirect" id="button" variant="outline-success" size="lg">get started !</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name: "generator" });
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&family=Ranchers&family=Rowdies:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Roboto+Slab:wght@600&family=Staatliches&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");

.all {
  background-image: url("../assets/svg/SVG/Asset 14.svg");
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  background-color: #fac472;
  height: auto;
}
.title-text {
  padding-top: 30px;
}

#title-foodie {
  font-family: "Staatliches", cursive;
  font-size: 160px;
  color: rgba(255, 255, 255, 0.911);
  text-shadow: 12px 0 #161415, 0 2px #161415, 2px 0 #161415, 0 -1px #161415;
  letter-spacing: 4px;
}
#title-gen {
  font-family: "Staatliches", cursive;
  font-size: 160px;
  color: #f6b511;
}

.quote-container {
  border-radius: 20px;
  text-align: center;
  padding-top: 400px;
}
#button {
  font-size: 60px;
  line-height: normal;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  font-family: "Staatliches", cursive;
}

/* #title-foodie {
  padding-top: 35px;
  text-align: center;
  font-family: "Fredoka One", cursive;
  font-size: 240px;
  color: #80471c;
  text-shadow: 12px 0 #161415, 0 2px #161415, 2px 0 #161415, 0 -1px #161415;
  letter-spacing: 5px;
}
#title-gen {
  text-align: center;
  font-family: "Fredoka One", cursive;
  font-size: 100px;
  color: #faaa94;
  text-shadow: 12px 0 #161415, 0 1px #161415, 1px 0 #161415, 0 -1px #161415;
} */
</style>
