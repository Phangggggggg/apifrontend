<template>
  <div>
    <h1>Your Result Page!</h1>
    <b-button id="menu-button" variant="danger" @click="printTest()">Add menu</b-button>

    <!-- <div v-if="check">{{testResponse}}</div>
    <br />
    <br />
    {{testResponse}}-->
  </div>
</template>

<script>
export default {
  data() {
    return { testResponse: [], check: false };
  },
  methods: {
    async printTest() {
      let res = await this.$axios.$get("/register/");
      console.log(res.param);
      this.testResponse = res;
      this.check = true;
    }
  }
};
</script>


<style>
</style>