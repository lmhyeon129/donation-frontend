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
        <form>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="상품명" />
            <input type="number" class="form-control" placeholder="상품수량" />
            <select class="custom-select">
              <option selected>상품종류</option>
              <option value="0">의류</option>
              <option value="1">가구</option>
              <option value="2">장난감</option>
              <option value="3">전자기기</option>
            </select>
            <select class="custom-select">
              <option selected>상품상태</option>
              <option value="0">등록됨</option>
              <option value="1">기부예약</option>
              <option value="2">기부완료</option>
            </select>
          </div>
          <div class="row justify-content-end">
            <button type="submit" class="btn btn-primary">상품등록</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
select, input {
  margin-top: 1em;
}
</style>
