<template>
  <div class="all">
    <b-container class="container-fluid card-white">
      <br />
      <br />
      <h1 id="heading">Login</h1>
      <div class>
        <form>
          <div class="form-group text-left col-md-12">
            <label for="Username">Username:</label>
            <input
              type="text"
              class="form-control"
              id="username-input"
              aria-describedby="userHelp"
              placeholder="Enter username"
              v-model="username"
              @blur="readyToSubmit()"
            />
            <small id="userHelp" class="form-text text-muted">Type your username to login</small>
            <div
              class="error"
              v-if="$v && $v.username.$dirty && !$v.username.required"
            >Username is required</div>
          </div>
          <div class="form-group col-md-12 text-left">
            <label for="Password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password-input"
              placeholder="Password"
              v-model="password"
              @blur="readyToSubmit()"
            />
            <div
              class="error"
              v-if="$v && $v.password.$dirty && !$v.password.required"
            >Password is required</div>
          </div>
          <span id="submit-button">
            <button
              ref="submit-button"
              @click="isValid"
              class="btn btn-success m-2"
              type="button"
            >Login</button>
          </span>
        </form>
      </div>
    </b-container>
  </div>
</template>

<script>
import Vue from "vue";
import Vuelidate from "vuelidate";
import { required } from "vuelidate/lib/validators";
Vue.use(Vuelidate);

export default {
  mounted() {
    console.log(this.$axios.$get("/api/xxx"));
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  validations: {
    username: {
      required
    },
    password: {
      required
    }
  },
  methods: {
    isValid() {
      this.$v.$touch();
    },
    readyToSubmit() {
      if (this.username != "" && this.password != "")
        this.$refs["submit-button"].classList.add("button-glow");
      else this.$refs["submit-button"].classList.remove("button-glow");
    }
  }
};
</script>

<style scoped>
.card-white {
  position: relative;
  width: 400px;
  background: white;
  padding: 60px40px;
  height: 500px;
  border-radius: 10px;
}
.all {
  height: 100vh;
  background-color: #ffdae0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffa8c8'/%3E%3Cstop offset='1' stop-color='%23ffdae0'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23ff5781' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23ff5781' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.29'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
#heading {
  text-align: center;
  font-size: 60px;
  padding-bottom: 40px;
}
</style>
