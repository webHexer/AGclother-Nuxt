<template>
  <div class="browse-clothes">
    <div v-if="showDetails" class="browse-clothes__section-header">
      <h3>BROWSE</h3>
      <h2>{{ wearType }}</h2>
      <h3>{{ price }}</h3>
      <h3>VIEW ALL</h3>
    </div>

    <div class="browse-clothes__products">
      <div
        v-for="(data, index) in imageData"
        :key="index"
        class="browse-clothes__product"
      >
        <router-link :to="'/browseCategory/' + wearType">
          <img :src="data.imgLink" :alt="wearType" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrowseClothes',
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
    noOfImages: {
      type: String,
      required: true,
    },
    showDetails: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    imageWidth() {
      return 100 / this.noOfImages + '%'
    },
  },
}
</script>
