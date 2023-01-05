<template>
    <header class="navbar navbar-expand-lg bg-light justify-content-around">
      <div class="text-primary fs-1 navbar-brand">ART CLOUD</div>
      <div class="d-inline-flex justify-content-around fs-2 collapse navbar-collapse">
        <h1 class="navbar-item"><a href="/main">New</a></h1>
        <h1 class="navbar-item">Most liked</h1>
        <h1 class="navbar-item"><a href="/subscribes">Subscribes</a></h1>
      </div><a href="/userpage"><img src="@/assets/images/AvatarHeader.png"></a>
    </header>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>


<style >
@import "~bootstrap/dist/css/bootstrap.css";

body {
    background: rgb(221, 244, 251);
  }
  .logo {
    color: #96d9ef;
    font-size: 40px;
  }
  main {
    padding: 2%;
    margin: 10% 5%;
  }
  main img {
    width: 100%;
    object-fit: cover;
  }
  form {
    padding: 1%;
  }

</style>
