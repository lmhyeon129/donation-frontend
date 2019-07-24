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
      <div class="col">
        <table class="table table-striped">
          <thead class="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">상품명</th>
              <th scope="col">잔여수량</th>
              <th scope="col">상태</th>
              <th scope="col">체크</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>상품1</td>
              <td>1</td>
              <td>등록됨</td>
              <td>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="target"
                    id="gridCheck1"
                    value="상품1"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>상품2</td>
              <td>3</td>
              <td>기부예약</td>
              <td>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="target"
                    id="gridCheck2"
                    value="상품2"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>