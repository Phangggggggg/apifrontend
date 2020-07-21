<template>
  <div class="all">
    <b-container class="my-3 white-card" fluid="md">
      <h1 class="header">Insert your ingredients here!</h1>
      <h4 id="repeated-text">{{ this.repeatedText }}</h4>
      <h4 id="after-text" v-if="this.items.length == 5">You can add no more ingredients.</h4>
      <b-table striped hover :items="items" :fields="fields" style="center"></b-table>
      <div v-if="allowDisplay" id="ingredients-form" inline>
        <label class="sr-only" for="ingredients">Ingredients</label>
        <b-input
          v-model="toBeAdded"
          id="ingredients"
          class="mb-2 mr-sm-2 mb-sm-0"
          @keyup.enter="appendIngredients()"
          placeholder="Ingredients"
        ></b-input>
        <b-button variant="primary" @click="appendIngredients()">Add</b-button>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ["Ingredients"],
      items: [],
      repeatedText: "",
      toBeAdded: "",
      allowDisplay: true
    };
  },
  methods: {
    appendIngredients() {
      this.items.push({ Ingredients: this.toBeAdded });
      this.toBeAdded = "";
      if (this.items.length == 5) {
        this.allowDisplay = false;
      }
    }
  }
};
</script>
<style scoped>
.header {
  text-align: center;
  padding: 30px;
}
#after-text {
  text-align: center;
  color: firebrick;
}
.white-card {
  position: relative;
  width: 700px;
  background: white;
  padding: 60px40px;
  height: 600px;
  border-radius: 10px;
}
.all {
  height: 100vh;
  background-color: #ffdae0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23dd7ea4'/%3E%3Cstop offset='1' stop-color='%23ffdae0'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23e1c4ff' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23e1c4ff' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
</style>
