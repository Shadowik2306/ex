<template>
  <main>
    <div class="content d-flex flex-column">
      <CarouselPage
        :carousel_data="sliderItems"
      />
      <div id="posts">
        <ItemImage
            v-for="item in this.imageItems" :key="item.id"
            :item="item"
        />
      </div>
    </div>
  </main>
  <footer class="container bg-light">
    <form id="frm-items" @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="item">Picture</label>
        <input class="form-control" id="item" type="file" required="" @change="previewFiles">
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="nickname">Nickname</label>
          <input v-model="nickname" class="form-control" id="nickname" type="text" placeholder="Nickname" required="">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="description">Description</label>
          <input v-model="description" class="form-control" id="description" type="text" placeholder="Description" required="">
        </div>
      </div>
      <div class="form-check">
        <input class="form-check-input" id="check" type="checkbox">
        <label class="form-check-label" for="check">я влвдею этим изображением;</label>
      </div>
      <button v-on:click="addNew" class="btn btn-primary" type="submit">Add new picture</button>
    </form>
  </footer>
<!--  <script src="js/items.js"></script>-->
</template>

<script>


import CarouselPage from "@/components/carousel.vue";
import ItemImage from "@/components/itemImage.vue";

export default {
  name: "MainPage",
  components: {ItemImage, CarouselPage},
  data () {

    return {
      sliderItems: [
        {id: 1, imgr: "TestImg1.jpg"},
        {id: 2, imgr: "TestImg2.jpg"},
        {id: 3, imgr: "TestImg3.jpg"}
      ],
      imageItems: [],
      nickname: '',
      description: '',
      file: '',
      id: 2
    }
  },
  methods: {
    getData() {
      let vm = this;
      fetch("http://localhost:8079/lines")
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.info('Loaded');
            console.log(data);
            vm.imageItems = data
            vm.id = data.length + 1;
          })
          .catch(function (error) {
            console.error('Error:', error);
            throw "Can't load items";
          });
    },
    addNew() {
      let vm = this;
      fetch("http://localhost:8079/lines",
          {
            method: 'POST',
            body: JSON.stringify({'id': vm.id, 'nickname': vm.nickname,
              'filename': vm.file, 'description': vm.description}),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.info('Added');
            console.log(data);
            vm.id++;
            location.reload();
          })
          .catch(function (error) {
            console.error('Error:', error);
            throw "Can't add item";
          });


    },
    previewFiles(event) {
      let vm = this
      console.log(event.target.files[0].name)
      vm.file = event.target.files[0].name;
    }
  },

  beforeMount() {
    this.getData();
  }
}
</script>

<style scoped>
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

  form {
    padding: 1%;
  }
</style>