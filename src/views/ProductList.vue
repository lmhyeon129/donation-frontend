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
            <button type="submit" class="btn btn-primary">상품검색</button>
          </div>
        </form>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col">
        <table class="table table-striped">
          <thead class="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">상품명</th>
              <th scope="col">종류</th>
              <th scope="col">수량</th>
              <th scope="col">상태</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>상품1</td>
              <td>의류</td>
              <td>1</td>
              <td>등록됨</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>상품2</td>
              <td>장난감</td>
              <td>3</td>
              <td>기부예약</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>