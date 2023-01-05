<template>
  <div class="subscribes">
  <main class="bg-white fs-2">
    <div class="d-flex flex-raw align-items-center border border-primary"><img src="@/assets/images/TestImg1.jpg">
      <div>@shadowik</div>
    </div>
    <div class="d-flex flex-raw align-items-center border border-primary"><img src="@/assets/images/TestImg2.jpg">
      <div>@malevich</div>
    </div>
    <div class="d-flex flex-raw align-items-center border border-primary"><img src="@/assets/images/TestImg3.jpg">
      <div>@AlexGlass</div>
    </div>
    <div class="d-flex flex-raw align-items-center border border-primary"><img src="@/assets/images/TestImg2.jpg">
      <div>@Zero</div>
    </div>
    <div class="d-flex flex-raw align-items-center border border-primary"><img src="@/assets/images/TestImg1.jpg">
      <div>@I_am_tired</div>
    </div>
  </main>
  </div>
</template>

<script>
export default {
  name: "SubscribesPage"
}
</script>

<style lang="css">
  .subscribes main img {
    width: 25%;
    object-fit: cover;
  }

  header {
    margin: 0% 0% 1% 0%;
  }
</style>