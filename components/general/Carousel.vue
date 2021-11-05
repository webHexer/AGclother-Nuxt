<template>
  <div class="carousel">
    <img :src="activeImage.imgSrc" alt="image" class="carousel__item" />
    <div class="carousel__buttons">
      <button class="carousel__left-buttons" @click="prevImage">&lt;</button>
      <button class="carousel__right-buttons" @click="nextImage">&gt;</button>
    </div>
    <div class="carousel__text">
      <h1>{{ activeImage.categoryName }}</h1>
      <p>{{ activeImage.about }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    carouselData: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      imgData: this.carouselData,
    }
  },

  computed: {
    // ...mapState('home', ['carouselData']),

    activeImage() {
      return this.imgData.find((data) => data.active)
    },
  },

  mounted() {
    setInterval(() => {
      this.nextImage()
    }, 4000)
  },

  methods: {
    nextImage() {
      const carouselImages = JSON.parse(JSON.stringify(this.imgData))

      carouselImages.every((data, index) => {
        if (data.active && index !== carouselImages.length - 1) {
          carouselImages[index].active = false
          carouselImages[index + 1].active = true
          return false
        } else if (data.active && index === carouselImages.length - 1) {
          carouselImages[index].active = false
          carouselImages[0].active = true
          return true
        }
        return true
      })
      this.imgData = carouselImages
    },

    prevImage() {
      const carouselImages = JSON.parse(JSON.stringify(this.imgData))

      carouselImages.every((data, index) => {
        if (data.active && index !== 0) {
          carouselImages[index].active = false
          carouselImages[index - 1].active = true
          return false
        } else if (data.active && index === 0) {
          carouselImages[index].active = false
          carouselImages[carouselImages.length - 1].active = true
          return true
        }
        return true
      })
      this.imgData = carouselImages
    },
  },
}
</script>
