<template>
  <div class="all">
    <h1 id="title-text">Generator</h1>
    <h3 class="header">Insert your ingredients here!</h3>
    <h4 id="repeated-text" v-if="allowRepeat">{{ this.repeatedText }}</h4>
    <h4 id="after-text" v-if="this.items.length == 5">No more ingredients can be added</h4>
    <b-container class="my-3" fluid="md">
      <b-row class="d-flex justify-content-center">
        <b-col xs="12" md="8">
          <div v-if="items.length < 5" id="ingredients-form" inline>
            <label class="sr-only" for="ingredients">Ingredients</label>
            <b-input-group
              v-if="items.length < 10"
              prepend="Ingredient"
              id="pre-ingre"
              class="mr-2"
            >
              <b-input
                v-model="toBeAdded"
                id="ingredients"
                class="mr-2"
                @keyup.enter="appendIngredients()"
                placeholder="Ingredients"
              ></b-input>
              <b-button
                :disabled="!toBeAdded"
                id="add-button"
                class="mr-2 btn btn-warning"
                @click="appendIngredients()"
              >Add</b-button>
            </b-input-group>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12">
          <!-- <b-table striped hover :items="items" :fields="fields" style="center"></b-table> -->
          <table class="table table-bordered table-warning mt-3">
            <thead id="table-head">
              <tr>
                <th>Ingredients</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody id="table-body" v-if="items && items.length > 0">
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
      resultArr: [],
      allowRepeat: false
    };
  },
  methods: {
    appendIngredients() {
      this.allowRepeat = false;
      if (this.toBeAdded) {
        if (
          this.items.findIndex(item => item.Ingredients == this.toBeAdded) == -1
        ) {
          this.items.push({ Ingredients: this.toBeAdded });
        } else {
          this.repeatedText = "This ingredient is already added";
          this.allowRepeat = true;
        }
        this.toBeAdded = "";
      }

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
      nuxtStorage.localStorage.setData("result", this.resultArr, 1, "d");
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
  color: brown;
}
#after-text {
  text-align: center;
  color: rgb(223, 25, 25);
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
  background-color: #fac472;
  background-image: url("../assets/svg/SVG/Asset 10.svg");
  background-attachment: fixed;
  background-size: cover;
  opacity: 0.9;
  min-height: 100vh;
  height: auto;
}
#title-text {
  font-family: "Lobster", cursive;
  padding-top: 20px;
  text-align: center;
  font-size: 110px;
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
#table-head {
  font-size: 20px;
}
#table-body {
  font-size: 18px;
}
</style>
