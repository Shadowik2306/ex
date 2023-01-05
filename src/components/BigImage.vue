<template>
  <main class="d-flex flex-column">
    <div class="d-flex flex-column bg-light"><img :src="require('@/assets/images/' + this.img)">
      <div class="ImageInfo d-flex flex-column justify-content-around fs-5">
        <div class="fs-1">{{ this.nickname }}</div>
        <div class="fs-2">It`s my square</div>
        <div class="align-items-center">Likes: 1340</div>
        <div class="align-items-center"> Comments: 2</div>
      </div>
    </div>
    <div class="Comments d-flex flex-column bg-light fs-3">
      <div class="Comment">
        <div>@shadowik</div>
        <div class="fs-4">It`s dumb</div>
      </div>
      <div class="Comment">
        <div>@AlexGlass</div>
        <div class="fs-4">Oh yeeah</div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "BigImage",
  props: {
    id: {
      type: String,
      default: "1"
    }
  },
  data () {
    return {
      img: "TestImg1.jpg",
      nickname: ""
    }
  },
  beforeMount() {
    let vm = this;
    console.log(this.id);
    fetch("http://localhost:8079/lines/" + this.id)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.info('Loaded');
          console.log(data);
          vm.img = data.filename;
          vm.nickname = data.nickname;
        })
        .catch(function (error) {
          console.error('Error:', error);
          throw "Can't load items";
        });
  }
}
</script>

<style scoped>
main .Image {
  background-color: white;
  padding: 2%;
}
main img {
  width: 100%;
}
.ImageInfo {
  font-size: 200%;
}
main .Image .ImageInfo>*:nth-child(n + 3) {
  color: #0000FF;
}
main .Comments {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5% 0;
}
main .Comments .Comment {
  margin: 1% 0;
}
main .Comments .Comment>*:nth-child(2) {
  margin-top: 1%;
  margin-left: 8%;
}
</style>