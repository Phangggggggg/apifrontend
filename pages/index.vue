<template>
  <div class="all">
    <b-container class="container-fluid title-text">
      <h1 id="title-foodie">Foodie</h1>
      <h1 id="title-gen">Generator</h1>
      <!-- <b-button block variant="success" id="gen-button"
        >Let's start eating !</b-button
      > -->
      <div class="macaron macaron--pink"></div>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&family=Ranchers&family=Rowdies:wght@700&display=swap");
.all {
  background-image: url("../assets/svg/SVG/edit-icecream.svg");
  background-size: cover;
  height: 100vh;
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
  padding-top: 45px;
  text-align: center;
  font-family: "Fredoka One", cursive;
  font-size: 200px;
  color: hsl(6, 89%, 64%);
  text-shadow: 12px 0 #161415, 0 2px #161415, 2px 0 #161415, 0 -1px #161415;
  letter-spacing: 5px;
}
#title-gen {
  text-align: center;
  font-family: "Fredoka One", cursive;
  font-size: 100px;
  color: #fac472;
  text-shadow: 12px 0 #161415, 0 1px #161415, 1px 0 #161415, 0 -1px #161415;
}
.macaron {
  width: 150px;
  height: 100px;
  border-radius: 50%;
}
.macaron--pink {
  background: #f39aae;
  box-shadow: 0px 13px 0px -2px #fff, 0px 30px 0px 0px #f39aae,
    3px 35px 10px 0px #7c7c7c;
    
}
</style>
