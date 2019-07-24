<template>
  <div class="container">
    <div class="row">
      <div class="col col-auto">
        <div class="logo">
          <router-link to="/">
            <img alt="logo" width="60px" height="60px" src="../assets/donateLogo.svg" />
          </router-link>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col col-auto">
        <div class="row justify-content-center">
          <div class="col col-auto">
            <form>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="상품명" />
                <select class="custom-select">
                  <option selected>상품종류</option>
                  <option value="0">의류</option>
                  <option value="1">가구</option>
                  <option value="2">장난감</option>
                  <option value="3">전자기기</option>
                </select>
                <input type="number" class="form-control" placeholder="상품수량" />
              </div>
              <div class="row justify-content-end">
                <button type="submit" class="btn btn-primary">기부신청</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  input, select {
    margin-top: 1em;
  }
</style>
