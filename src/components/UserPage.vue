<template>
  <main class="bg-white container" style="margin-bottom: 10%; padding: 2%;">
    <div class="row"><img class="col-sm" src="@/assets/images/TestImg1.jpg" style="width: 30%; object-fit: cover;">
      <div class="col-sm d-flex flex-column fs-2 justify-content-around text-unwrap" style="width: 100%">
        <div>@Shadowik</div>
        <div>Developer, not artist</div>
        <div class="d-flex flex-row gap-3 text-primary">
          <div>Subscribes: 100</div>
          <div>Followers: 23</div>
        </div>
      </div>
    </div>
    <div class="bg-white content" style="padding: 2%;">
      <img src="@/assets/images/TestImg1.jpg">
      <img src="@/assets/images/TestImg2.jpg">
      <img src="@/assets/images/TestImg3.jpg">
      <img src="@/assets/images/TestImg1.jpg">
      <img src="@/assets/images/TestImg2.jpg">
      <img src="@/assets/images/TestImg3.jpg">
      <img src="@/assets/images/TestImg2.jpg">
      <img src="@/assets/images/TestImg3.jpg">
      <img src="@/assets/images/TestImg3.jpg">
      <img src="@/assets/images/TestImg1.jpg">
      <img src="@/assets/images/TestImg1.jpg">
      <img src="@/assets/images/TestImg1.jpg">
      <img src="@/assets/images/TestImg1.jpg">
      <img src="@/assets/images/TestImg2.jpg">
      <img src="@/assets/images/TestImg3.jpg">
    </div>
  </main>
  <footer>
    <div class="bg-white content">
      <div class="row"><a href="AddNewImage.html">
        <h1>+</h1></a></div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "UserPage"
  }
  </script>

  <style scoped>
  footer {
    text-align: center;
  }

  a {
    text-decoration: none;
  }

  main .content img {
    width: 30%;
  }
</style>