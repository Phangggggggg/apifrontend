<template>
  <div class="all">
    <br />
    <br />
    <br />
    <h4 id="warning-text">{{ warningText }}</h4>
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
            <small id="userHelp" class="form-text text-muted"
              >Type your username to login</small
            >
            <div
              class="error"
              v-if="$v && $v.username.$dirty && !$v.username.required"
            >
              Username is required
            </div>
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
            >
              Password is required
            </div>
          </div>
          <span id="submit-button">
            <button
              ref="submit-button"
              @click="isValid"
              class="btn btn-success m-2"
              type="button"
            >
              Login
            </button>
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
import nuxtStorage from "nuxt-storage";
Vue.use(Vuelidate);

export default {
  data() {
    return {
      username: "",
      password: "",
      isAuthenticated: "",
      warningText: ""
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
    async isValid() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        let sendName = await this.$axios.$post("/api/login", {
          username: this.username,
          password: this.password
        });
        this.isAuthenticated = sendName;
        if (this.isAuthenticated == "Success") {
          nuxtStorage.localStorage.setData("username", this.username);
          this.$router.push({ name: "generator" });
        } else {
          this.warningText = "Username or password is wrong !";
        }
      }
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
  align-items: center;

  background-color: #ffebf1;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3Cfilter id='a' x='-200%25' y='-200%25' width='400%25' height='400%25'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='50'/%3E%3C/filter%3E%3C/defs%3E%3Cg fill='%23ff8ca3'%3E%3Cpolygon points='-203 1800 -203 -900 397 450'/%3E%3Cpolygon points='1803 -900 1803 1800 1203 450'/%3E%3C/g%3E%3Cg fill='%23fc6c85' filter='url(%23a)'%3E%3Cpolygon points='-203 1581 -203 -681 300 450'/%3E%3Cpolygon points='1803 -681 1803 1581 1300 450'/%3E%3C/g%3E%3Cg fill='%23ffaabe'%3E%3Cpolygon points='-203 1581 -203 -681 300 450'/%3E%3Cpolygon points='1803 -681 1803 1581 1300 450'/%3E%3C/g%3E%3Cg fill='%23ffc7d6'%3E%3Cpolygon points='-203 1356 -203 -456 200 450'/%3E%3Cpolygon points='1803 -456 1803 1356 1400 450'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
}
#warning-text {
  color: crimson;
  font-size: 20px;
  text-align: center;
}

#heading {
  text-align: center;
  font-size: 60px;
  padding-bottom: 40px;
}
</style>
