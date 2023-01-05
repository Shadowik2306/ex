<template>
  <div class="wrapper">
    <div class="carouselPage">
      <carousel-item
      v-for="item in carousel_data" :key="item.id"
      :item_data="item"
      :style="{'display': currentSlideIndex == item.id ? 'block': 'none'}"
    />
    </div>
  </div>
</template>

<script>
import carouselItem from "@/components/carousel-item.vue";

export default {
  name: "carouselPage",
  components: {
    carouselItem
  },
  props: {
    carousel_data: {
      type: Array,
      default: () => []
    },
    interval: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
      currentSlideIndex: 1
    }
  },
  methods: {
    nextSlide() {
      this.currentSlideIndex++
      if (this.currentSlideIndex > 3) {
        this.currentSlideIndex = 1
      }
    }
  },

  mounted()  {
    if (this.interval > 0) {
      let vm = this;
      setInterval(function () {
        vm.nextSlide();
      }, vm.interval)
    }
  }
}

</script>

<style lang="css">
  .wrapper {
    max-width: 300px;
    overflow: hidden;
    margin: 0 auto;
  }

  .carouselPage {
    display: flex;
    transition: all ease .5s;
  }

</style>