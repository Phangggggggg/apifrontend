<template>
  <div class="all">
    <h1 id="title-text">Generator</h1>
    <h3 class="header">Insert your ingredients here!</h3>
    <h4 id="repeated-text">{{ this.repeatedText }}</h4>
    <h4 id="after-text" v-if="this.items.length == 5">You can add no more ingredients.</h4>
    <b-container class="my-3 white-card" fluid="md">
      <!-- <b-table striped hover :items="items" :fields="fields" style="center"></b-table> -->
      <table class="table">
        <thead>
          <tr>
            <th>Ingredients</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody v-if="items && items.length > 0 ">
          <tr v-for="(item, index) in items" :key="index">
            <td>{{item.Ingredients}}</td>
            <td>
              <b-button @click="deleteIngredients(index)" variant="danger">Delete</b-button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="items.length < 5" id="ingredients-form" inline>
        <label class="sr-only" for="ingredients">Ingredients</label>
        <b-input
          v-model="toBeAdded"
          id="ingredients"
          class="mb-2 mr-sm-2 mb-sm-0"
          @keyup.enter="appendIngredients()"
          placeholder="Ingredients"
        ></b-input>
        <br />
        <b-button id="add-button" variant="warning" @click="appendIngredients()">Add</b-button>
      </div>
      <b-button
        v-if="items.length >= 5"
        id="submit-button"
        variant="success"
        @click="submitMenuIngre()"
      >Submit</b-button>
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
      allowDisplay: true,
      finalIngre: []
    };
  },
  methods: {
    appendIngredients() {
      this.items.push({ Ingredients: this.toBeAdded });
      this.toBeAdded = "";
      if (this.items.length == 5) {
        this.allowDisplay = false;
      }
    },
    deleteIngredients(index) {
      this.items.splice(index, 1);
    },
    submitMenuIngre() {
      for (var i = 0; i < this.items.length; i++) {
        // console.log(this.items[i].Ingredients);
        this.finalIngre.push(this.items[i].Ingredients);
      }
      this.$axios.$post("/api/addmenu", {
        addedIngre: this.finalIngre
      });
    }
  }
};
</script>
<style scoped>
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
  background-color: #ffdae0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23fc6c85'/%3E%3Cstop offset='1' stop-color='%23ffdae0'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23ffa5b4'/%3E%3Cstop offset='1' stop-color='%23ffdae0'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg %3E%3Cg transform=''%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(-75.6 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.66' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
#title-text {
  padding-top: 20px;
  text-align: center;
  font-size: 80px;
  letter-spacing: 5px;
}
#add-button {
  align-items: center;
}
.table {
  padding-top: 40px;
}
</style>
