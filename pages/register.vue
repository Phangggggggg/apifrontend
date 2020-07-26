<template>
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <b-container class="duo-1">
      <b-row align-h="center" align-v="center">
        <b-col md="6">
          <h2></h2>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h4 class="at-f">@FOODIES GENERATOR</h4>
          <h1 class="display-2">Register Here!</h1>
          <hr class="pink-strap" />
          <ul class="description">
            <li>Please type your info to access membership.</li>
            <li>Add your own menu to our generator once you are member.</li>
            <li>Your private information will be secured.</li>
            <li>Hope you have a wonderful meal with foodie generator :)</li>
          </ul>
        </b-col>
        <b-col md="6">
          <br />
          <br />
          <div class="row">
            <div id="embeded" class="col align-self-center m-4">
              <br />
              <br />
              <br />
              <form id="register-form" class="needs-validation">
                <div
                  class="form-group col-md-12"
                  :class="{ 'has-error': $v && $v.username.$error }"
                >
                  <label for="validationCustom02">Username</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom02"
                    placeholder="Username"
                    v-model="username"
                  />
                  <div
                    class="error"
                    v-if="$v && $v.username.$dirty && !$v.username.required"
                  >Username is required</div>
                </div>
                <div
                  class="form-group col-md-12"
                  :class="{ 'has-error': $v && $v.password.$error }"
                >
                  <label for="validationCustom03">Password</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom03"
                    placeholder="Enter Password"
                    v-model="password"
                  />
                  <div
                    class="error"
                    v-if="$v && $v.password.$dirty && !$v.password.required"
                  >Password is required</div>
                </div>
                <div class="form-group" :class="{ 'has-error': $v && $v.conditionTerm.$error }">
                  <div class="form-check m-4">
                    <input
                      v-model="conditionTerm"
                      class="form-check-input"
                      type="checkbox"
                      id="invalidCheck"
                    />
                    <label class="form-check-label" for="invalidCheck">Agree to terms and conditions</label>
                    <div
                      class="error"
                      v-if="
                      $v &&
                        $v.conditionTerm.$dirty &&
                        !$v.conditionTerm.required
                    "
                    >Please agree to terms and conditions</div>
                  </div>
                </div>
                <div class="form-group text-center">
                  <button @click="doSubmit" class="btn btn-success m-2" type="button">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    {{response.name1}}
  </div>
</template>
<script>
let usernameJson = require("~/assets/database/username.json");
import Vue from "vue";
import Vuelidate from "vuelidate";
import { required } from "vuelidate/lib/validators";
import { copyFile } from "fs";
Vue.use(Vuelidate);
var fs = require("fs");
export default {
  mounted() {
    console.log(
      this.$axios.$post("http://localhost:3000/result", { user: "phang" })
    );
  },
  // async mounted() {
  //   const res = await this.$axios.$get("/api/register");
  //   console.log(res);
  //   this.response = res;
  // },
  data() {
    return {
      username: "",
      password: "",
      conditionTerm: false,
      usernameJson: usernameJson,
      response: [],
      test: "pass"
    };
  },
  validations: {
    username: {
      required
    },
    password: {
      required
    },
    conditionTerm: {
      // function(value) {}
      required: value => {
        return value;
      }
    }
  },
  methods: {
    doSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.usernameJson.push({
          username: this.username,
          password: this.password
        });
        this.$axios.$post("/api/register", {
          username: this.username,
          password: this.password
        });
        this.$router.push({ name: "login" });
      }
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap");
.duo-1 {
  background-color: #ffdae0;
  min-height: 80vh;
}
h1 {
  font-family: "Anton", sans-serif;
}
.pink-strap {
  border-width: 20px;
  background-color: #fc6c85;
}
#embeded {
  background-color: white;
  min-height: 60vh;
}
#submmit-button {
  right: 150px;
}

@font-face {
  font-family: "Bell";
  font-weight: bold;
  font-style: initial;
  src: url(/components/fonts/Norwester.otf) format("otf");
}

.at-f {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
}
@font-face {
  font-family: "COOPER HEWITT";
  src: url(/CooperHewitt-Heavy.otf) format("otf");
}
.description {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
}
</style>
