<template>
  <div class="all">
    <h1 id="title-text">Generator</h1>
    <h3 class="header">Insert your ingredients here!</h3>
    <h4 id="repeated-text">{{ this.repeatedText }}</h4>
    <h4 id="after-text" v-if="this.items.length == 5">You can add no more ingredients.</h4>
    <b-container class="my-3" fluid="md">
      <b-row>
        <b-col md="12">
          <div v-if="items.length < 5" id="ingredients-form" inline>
            <label class="sr-only" for="ingredients">Ingredients</label>
            <b-input-group
              v-if="items.length < 10"
              prepend="Ingredient"
              id="pre-ingre"
              class="mb-2 mr-sm-2 mb-sm-0"
            >
              <b-input
                v-model="toBeAdded"
                id="ingredients"
                class="mb-2 mb-2 mr-sm-2 mb-sm-0 col-8"
                @keyup.enter="appendIngredients()"
                placeholder="Ingredients"
              ></b-input>
              <b-button
                id="add-button"
                class="mb-2 mr-sm-2 mb-sm-0 col-1 btn btn-warning"
                @click="appendIngredients()"
              >Add</b-button>
            </b-input-group>
          </div>
        </b-col>
        <b-col md="12">
          <!-- <b-table striped hover :items="items" :fields="fields" style="center"></b-table> -->
          <table class="table table-bordered table-warning mt-3">
            <thead>
              <tr>
                <th>Ingredients</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody v-if="items && items.length > 0">
              <tr v-for="(item, index) in items" :key="index">
                <td>{{ item.Ingredients }}</td>
                <td>
                  <b-button @click="deleteIngredients(index)" variant="danger">Delete</b-button>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <b-button
            v-if="items.length >= 1"
            id="submit-button"
            variant="success"
            @click="submitIngre()"
          >Submit</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import nuxtStorage from "nuxt-storage";

export default {
  data() {
    return {
      fields: ["Ingredients"],
      items: [],
      repeatedText: "",
      toBeAdded: "",
      allowDisplay: true,
      finalIngre: [],
      resultArr: []
    };
  },
  methods: {
    appendIngredients() {
      // console.log(nuxtStorage.localStorage.getData("username"));
      this.items.push({ Ingredients: this.toBeAdded });
      this.toBeAdded = "";
      if (this.items.length == 5) {
        this.allowDisplay = false;
      }
    },
    deleteIngredients(index) {
      this.items.splice(index, 1);
    },
    async submitIngre() {
      for (var i = 0; i < this.items.length; i++) {
        this.finalIngre.push(this.items[i].Ingredients);
      }
      let sendIngre = await this.$axios.$post("/api/getMenu", {
        generatorIngre: this.finalIngre
      });
      this.resultArr = sendIngre;
      nuxtStorage.localStorage.setData("result", this.resultArr);
      this.$router.push({ name: "result" });
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
.all {
  text-align: center;
  justify-content: center;
  align-items: center;
}
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
  width: 2000px;
  background: white;
  padding: 80px40px;
  height: 500px;
  border-radius: 10px;
}
.all {
  height: 100vh;
  background-color: #fac472;
  background-image: url("../assets/svg/SVG/Asset 10.svg");
  background-attachment: fixed;
  background-size: cover;
  opacity: 0.92;
}
#title-text {
  font-family: "Lobster", cursive;
  padding-top: 20px;
  text-align: center;
  font-size: 100px;
  letter-spacing: 5px;
}
#add-button {
  align-items: center;
  font-weight: bold;
  font-size: 15px;
}
.table {
  padding-top: 40px;
}
</style>
