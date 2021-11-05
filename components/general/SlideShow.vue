<template>
  <div class="slide-show">
    <div v-if="showDetails" class="slide-show__section-header">
      <h3>BROWSE</h3>
      <h2>{{ wearType }}</h2>
      <h3>{{ price }}</h3>
      <h3>VIEW ALL</h3>
    </div>
    <div class="slide-show__section-images">
      <div>
        <template v-for="data in activeImages">
          <img
            :key="data.id"
            :src="data.imgLink"
            alt="trending images"
            class="slide-show__section-image"
          />
        </template>
      </div>
      <div class="slide-show__buttons">
        <button class="slide-show__left-buttons" @click="prevButtonClickHandler">
          &lt;
        </button>
        <button class="slide-show__right-buttons" @click="nextButtonClickHandler">
          &gt;
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlideShow',
  props: {
    imageData: {
      type: Array,
      required: true,
    },
    wearType: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    showDetails: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      sectionImages: [],
      startIndex: 0,
    }
  },
  computed: {
    activeImages() {
      const data = []
      for (let i = this.startIndex; data.length < 3; i = (i+1)%this.imageData.length) {
        data.push(this.imageData[i])
      }
      return data
    },
  },
  mounted() {
    setInterval(() => {
      this.nextButtonClickHandler()
    }, 4000)
  },
  methods: {
    nextButtonClickHandler() {
      this.startIndex = (this.startIndex + 1) % this.imageData.length
    },

    prevButtonClickHandler() {
      this.startIndex = (this.startIndex - 1) % this.imageData.length
      if (this.startIndex < 0) {
        this.startIndex = this.imageData.length - 1
      }
    },
  },
}
</script>
