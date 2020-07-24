<template>
  <div class="all">
    <!-- <b-container> -->
    <h1 class="header" v-if="this.allowDisplay">Your menu is {{ menu }}</h1>
    <h1 class="header" v-else>Your menu is</h1>
    <br />
    <span class="after-text">{{ afterText }}</span>
    <!-- <b-table :items="items" :fields="fields" caption-top></b-table> -->
    <table class="table">
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
            <b-button @click="deleteIngredients(index)" variant="danger"
              >Delete</b-button
            >
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="showAddMenu">
      <label class="sr-only" for="input-menu">Add Menu</label>
      <b-input
        v-model="menu"
        @keyup.enter="appendMenu()"
        id="input-menu"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="Name of Menu"
      ></b-input>
      <br />
      <br />
      <b-button id="menu-button" variant="danger" @click="appendMenu()"
        >Add menu</b-button
      >
    </div>

    <br />
    <br />
    <label class="sr-only" for="input-ingredient">Add Ingredient</label>
    <b-input-group
      v-if="items.length < 10"
      prepend="Ingredient"
      id="pre-ingre"
      class="mb-2 mr-sm-2 mb-sm-0"
    >
      <b-input
        v-model="toBeAdded"
        :disabled="allowIngre == false"
        @keyup.enter="appendIngredient()"
        id="input-ingredient"
        placeholder="Add Ingredient"
      ></b-input>
    </b-input-group>
    <br />
    <br />
    <b-button
      v-if="items.length < 10"
      id="ingre-button"
      variant="primary"
      @click="appendIngredient()"
      >Add ingredient</b-button
    >
    <!-- </b-container> -->
    <b-button
      v-if="this.items.length >= 1"
      id="submit-button"
      variant="success"
      @click="submitMenuIngre()"
      >Submit</b-button
    >
  </div>
</template>

<script>
import swal from "sweetalert";
export default {
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
      verdict: ""
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
      console.log(swal);
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
        this.afterText = "You can not add more ingredients";
      } else {
        if (
          this.items.findIndex(item => item.Ingredients == this.toBeAdded) == -1
        ) {
          this.items.push({ Ingredients: this.toBeAdded });
        } else {
          this.afterText = "This ingredient is already added";
        }
      }
      this.toBeAdded = "";
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
.all {
  padding: 80px;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.after-text {
  color: crimson;
}
</style>
