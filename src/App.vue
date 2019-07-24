<template>
  <div id="app">
    <!--    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    -->
    <div id="nav">
      <router-link to="/">홈</router-link> |
      <router-link to="/registerUser">회원가입(일반)</router-link> |
      <router-link to="/registerCorp">회원가입(업체)</router-link> |
      <router-link to="/productAdd">상품등록</router-link> |
      <router-link to="/productList">상품목록</router-link> |
      <router-link to="/requestDonation">기부요청</router-link> |
      <router-link to="/productManage">기부관리</router-link> |
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
