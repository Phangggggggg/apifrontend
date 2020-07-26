<template>
  <div class="all">
    <b-container>
      <b-row>
        <b-col>
          <h1 class="title">
            Today's meal is
            <span
              v-if="items.length > 0"
              style="color: #f6b511"
            >{{ this.items[0].menuName[0] }}</span>
            <span v-else style="color: #f6b511">Nothing :(</span>
          </h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h4 class="at-foodie">@Foodie Generator</h4>
        </b-col>
      </b-row>
      <br />
      <br />
      <b-row>
        <b-col>
          <table v-if="checkNoNull" id="table-result" class="table">
            <thead>
              <tr id="table-header">
                <th>Menu</th>
                <th>Ingredients</th>
              </tr>
            </thead>
            <tbody id="table-body" v-if="items && items.length > 0">
              <tr v-for="(item, index) in items" :key="index">
                <td>{{ item.menuName[0] }}</td>
                <td>{{ item.ingLst }}</td>
              </tr>
            </tbody>
          </table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import nuxtStorage from "nuxt-storage";

export default {
  asyncData() {
    let resultArr = nuxtStorage.localStorage.getData("result");
    for (let i = 0; i < resultArr.length; i++) {
      let res = resultArr[i].ingLst[0];
      console.log(res);
      for (let idx = 1; idx < resultArr[i].ingLst.length; idx++) {
        console.log(1);
        let str1 = ",";
        let str2 = resultArr[i].ingLst[idx];
        let final = str1.concat(str2);
        res = res.concat(final);
      }
      resultArr[i].ingLst = res;
    }
    return { items: resultArr };
  },
  data() {
    return {
      menus: [],
      ingredient: [],
      checkNoNull: true
    };
  },

  methods: {}
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Roboto+Slab:wght@600&family=Staatliches&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Staatliches&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
.all {
  padding: 35px;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: #fac472;
  background-image: url("../assets/svg/SVG/Asset 14.svg");
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
  height: auto;
  opacity: 0.94;
}
.title {
  font-family: "Staatliches", cursive;
  font-size: 90px;
  color: rgba(255, 255, 255, 0.911);
}
.at-foodie {
  text-align: center;
  font-size: 20px;
  color: rgba(248, 225, 186, 0.911);
}
#table-header {
  font-size: 25px;
  font-weight: bolder;
  font-family: "Roboto Slab", serif;
  background: #f7b34d;
  opacity: 0.95;
}
#table-body {
  font-size: 20px;
  font-weight: normal;
  opacity: 0.95;
  background: #fac472;
}
</style>
