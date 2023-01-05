<template>
  <main class="d-flex flex-row justify-content-between container">
    <div class="row"><img class="col-sm" src="@/assets/images/RegisterCloud.png">
      <form class="col-sm bg-light needs-validation" action="MainWeb.html" novalidate="">
        <div class="mb-3">
          <label class="form-label" for="exampleInputEmail1">Email address</label>
          <input class="form-control" id="exampleInputEmail1" type="email" aria-describedby="emailHelp" required="">
          <div class="form-text" id="emailHelp">We`ll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="exampleInputPassword1">Password</label>
          <input class="form-control" id="exampleInputPassword1" type="password" required="">
        </div>
        <div class="mb-3 form-check">
          <input class="form-check-input" id="exampleCheck1" type="checkbox">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: "RegisterPage"
}
</script>

<style scoped>

</style>