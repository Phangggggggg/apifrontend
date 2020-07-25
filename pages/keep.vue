<template>
  <div class="all">
    <b-container>
      <b-row>
        <b-col>
          <h1 class="title">
            Today's meal is
            <span style="color: #f6b511">{{ menu }}</span>
          </h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h4 class="at-foodie">@Foodie Generator</h4>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: "yum",
      ingredients: []
    };
  },
  methods: {}
};
</script>



<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Staatliches&display=swap");
.all {
  padding: 35px;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: #fac472;
  background-image: url("../assets/svg/SVG/Asset 14.svg");
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  opacity: 0.94;
}
.title {
  font-family: "Staatliches", cursive;
  font-size: 100px;
  color: rgba(255, 255, 255, 0.911);
}
.at-foodie {
  text-align: center;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.911);
}
</style>
