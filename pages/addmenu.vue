<template>
  <div class="all">
    <span class="after-text">{{ afterText }}</span>
    <span v-if="items.length == 10" class="sub-text">No more ingredients can be added</span>

    <h1 class="header" v-if="this.allowDisplay">
      Your menu is
      <span style="color: rgb(255, 237, 138)">{{ menu }}</span>
    </h1>
    <h1 class="header" v-else>Your menu is</h1>
    <b-container>
      <b-row :class="[!showAddMenu ? 'd-flex justify-content-center' : '']">
        <b-col v-if="showAddMenu" lg="6" md="12">
          <span id="menu-form">
            <label class="sr-only" for="input-menu">Add Menu</label>
            <b-input-group prepend="Menu" id="pre-menu" class="mr-2 col-12">
              <b-input
                v-model="menu"
                @keyup.enter="appendMenu()"
                id="input-menu"
                class="mr-2"
                placeholder="Name of Menu"
              ></b-input>
              <b-button id="menu-button" variant="warning" @click="appendMenu()">Add menu</b-button>
            </b-input-group>
          </span>
        </b-col>
        <b-col lg="6" md="12" v-if="items.length < 10">
          <label class="sr-only" for="input-ingredient">Add Ingredient</label>
          <b-input-group
            :disabled="allowIngre == false"
            prepend="Ingredient"
            id="pre-ingre"
            class="mb-2 mb-sm-0 col-12"
          >
            <b-input
              v-model="toBeAdded"
              @keyup.enter="appendIngredient()"
              id="input-ingredient"
              placeholder="Add Ingredient"
              class="mr-2"
            ></b-input>
            <b-button
              v-if="items.length < 10"
              id="ingre-button"
              variant="primary"
              :disabled="toBeAdded.length == 0"
              @click="appendIngredient()"
            >Add ingredient</b-button>
          </b-input-group>
        </b-col>
      </b-row>
    </b-container>
    <!-- <b-table :items="items" :fields="fields" caption-top></b-table> -->
    <b-container class="my-3" fluid="md">
      <b-row>
        <b-col md="12">
          <table class="table table-bordered table-warning mt-3">
            <thead>
              <tr class="table-header">
                <th>Ingredients</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody class="table-body" v-if="items && items.length > 0">
              <tr v-for="(item, index) in items" :key="index">
                <td>{{ item.Ingredients }}</td>
                <td>
                  <b-button @click="deleteIngredients(index)" variant="danger">Delete</b-button>
                </td>
              </tr>
            </tbody>
          </table>
        </b-col>
        <b-col md="12">
          <b-button
            v-if="this.items.length >= 1"
            id="submit-button"
            variant="success"
            @click="submitMenuIngre()"
          >Submit</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  middleware: ["authentication"],
  data() {
    return {
      fields: ["Ingredients"],
      toBeAdded: "",
      items: [],
      menu: "",
      afterText: "",
      allowIngre: false,
      allowDisplay: false,
      showAddMenu: true,
      finalIngre: [],
      finalMenu: [],
      verdict: "",
      submitText: ""
    };
  },
  // async asyncData({ $axios }) {
  //   let result = await $axios.post("/api/login", { username: "phang" });
  //   return {
  //     result
  //   };
  // },
  methods: {
    appendMenu() {
      if (this.menu) {
        this.showAddMenu = false;
        this.allowDisplay = true;
        this.allowIngre = true;
        this.afterText =
          "Your menu is already added. Now, add menu's ingredients!";
      }
    },
    appendIngredient() {
      this.afterText = "";
      if (this.items.length == 10) {
        this.submitText = "You can not add more ingredients";
      } else if (this.toBeAdded) {
        if (
          this.items.findIndex(item => item.Ingredients == this.toBeAdded) == -1
        ) {
          this.items.push({ Ingredients: this.toBeAdded });
        } else {
          this.afterText = "This ingredient is already added";
        }
        this.toBeAdded = "";
      }
    },
    deleteIngredients(index) {
      this.items.splice(index, 1);
    },
    async submitMenuIngre() {
      this.finalMenu.push(this.menu);
      for (var i = 0; i < this.items.length; i++) {
        // console.log(this.items[i].Ingredients);
        this.finalIngre.push(this.items[i].Ingredients);
      }
      let res = await this.$axios.$post("/api/add", {
        menuName: this.finalMenu,
        ingLst: this.finalIngre
      });
      this.verdict = res;
      if (this.verdict == "add success") {
        alert("Your menu is added succesfully !");
      } else if (this.verdict == "menu already exist") {
        alert("This menu is already added !");
      } else {
        alert("Something is wrong !");
      }
      location.reload();
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Staatliches&display=swap");
.all {
  padding: 35px;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: #fac472;
  background-image: url("../assets/svg/SVG/red-bg.svg");
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
  height: auto;
  opacity: 0.94;
}
.after-text {
  color: white;
  font-size: 20px;
}
.header {
  font-family: "Staatliches", cursive;
  color: whitesmoke;
  font-size: 100px;
}
#menu-form {
  padding-right: 700px;
  padding-top: 50px;
}
.table-header {
  font-family: "Righteous", cursive;
  font-size: 26px;
  text-transform: uppercase;
  color: #691006;
}
.table-body {
  font-size: 20px;
  text-transform: uppercase;
}
.sub-text {
  color: rgb(240, 191, 191);
  font-size: 20px;
}
</style>
