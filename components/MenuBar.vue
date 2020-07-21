<template>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
    <b-navbar-brand>
      <img
        src="https://media.giphy.com/media/XCfPFpPxt4UPYXKni3/giphy.gif"
        width="150px"
        alt="pink-donut"
      />
    </b-navbar-brand>
    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{path: '/'}">Home</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item :to="{path: '/register'}">Register</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item :to="{path: '/login'}">Login</b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item :to="{path: '/addmenu'}">AddMenu</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item :to="{path: '/generator'}">Generator</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {};
</script>
<style scoped>
img[alt~="pink-donut"] {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  overflow: hidden;
  margin-top: -2px;
}
</style>
