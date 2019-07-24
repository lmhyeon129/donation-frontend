<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col col-auto">
        <h1>Let's Donate</h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col col-auto">
        <div class="logo">
          <img alt="logo" width="200px" height="200px" src="../assets/donateLogo.svg" />
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col col-auto">
        <router-link to="/registerUser" class="btn btn-primary btn-block">회원가입(일반)</router-link>
        <router-link to="/registerCorp" class="btn btn-primary btn-block">회원가입(업체)</router-link>
        <form>
          <div class="form-group">
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="아이디" />
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="패스워드"
            />
          </div>
          <div class="form-group">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="loginType"
                id="inlineRadio1"
                value="user"
              />
              <label class="form-check-label" for="inlineRadio1">일반</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="loginType"
                id="inlineRadio2"
                value="corp"
              />
              <label class="form-check-label" for="inlineRadio2">업체</label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">로그인</button>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
form {
  padding-top: 1em;
}
</style>

<style>
.row {
  /*background: #f8f9fa;*/
  margin-top: 20px;
}
.col {
  /*border: solid 1px #6c757d;*/
  padding: 10px;
}
</style>


