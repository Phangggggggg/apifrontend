<template>
  <div class="all">
    <b-container class="title-text">
      <b-row>
        <b-col>
          <h1 id="title-foodie">Foodie</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h1 id="title-gen">Generator</h1>
        </b-col>
      </b-row>

      <!-- <b-button block variant="success" id="gen-button"
        >Let's start eating !</b-button
      >-->
      <!-- <div id="macaron-button">
        <b-button @click="redirect" class="macaron macaron--pink">Get Started</b-button>
      </div>-->
    </b-container>
  </div>
</template>

<script>
export default {
  methods: {
    // redirect() {
    //   this.$router.push({ name: "generator" });
    // }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&family=Ranchers&family=Rowdies:wght@700&display=swap");
.all {
  background-image: url("../assets/svg/SVG/vanila.svg");
  background-size: cover;
  height: 100vh;
  width: 100%;
  background-color: #fac472;
}
.title-text {
  width: 1000px;
  height: 500px;
  border-radius: 10px;
  opacity: 1;
}
#gen-button {
  font-size: large;
}

#title-foodie {
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
}
</style>
