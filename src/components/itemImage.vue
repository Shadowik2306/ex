<template>

  <div class="item-image">
    <div class="container bg-light">
      <div class="row">
        <a :href="'/bigImage/' + item.id">
          <img class="col-sm" :src="require('@/assets/images/' + item.filename)">
        </a>
        <div class="col-sm info d-flex flex-column fs-2">
          <div class="fs-1 fw-bold text-break" id="nickname">
            {{ item.nickname }}
          </div>
          <div id="description">{{ item.description }}</div>
          <div class="d-flex flex-row">
            <div class="fs-5">Comments: 3</div>
            <div class="fs-5">Likes: 1</div>
          </div>
          <div>
            <button v-on:click="update" class="btn btn-primary" style="width: 100%;height: 100%;"> Edit </button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "itemImage",
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    update() {
      var input = document.createElement('input');
      input.type = 'file';

      let vm = this;
      input.onchange = e => {
        vm.item.filename =  e.target.files[0].name;
        fetch("http://localhost:8079/lines/" + vm.item.id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({'id': vm.item.id, 'nickname': vm.item.nickname,
            'filename': vm.item.filename, 'description': vm.item.description})
        })
            .then((response) => {
              response.json()
            })
            .then((result) => {
              console.log('Success:', result);
            })
            .catch((error) => {
              console.log()
              console.error('Error:', error);
            });
      }
      input.click();
    },

  }
}
</script>

<style scoped>

</style>