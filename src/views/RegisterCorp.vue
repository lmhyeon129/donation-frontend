<template>
  <div class="container">
    <div class="row">
      <div class="col col-auto">
        <div class="logo">
          <router-link to="/">
            <img alt="logo" width="60px" height="60px" src="../assets/donateLogo.svg">
          </router-link>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col col-auto">
          <RegisterCorpForm />
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import RegisterCorpForm from '@/components/RegisterCorpForm.vue'

export default {
  name: 'home',
  components: {
    RegisterCorpForm
  }
}
</script>