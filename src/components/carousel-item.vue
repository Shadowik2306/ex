<template>
  <div class="carousel-item_2">
    <img :src="require('@/assets/images/' + item_data.imgr)">
  </div>
</template>

<script>
export default {
  name: "carousel-item_2",
  props: {
    item_data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>

</style>