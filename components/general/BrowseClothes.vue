<template>
  <div class="browse-adult-section">
    <div v-if="showDetails" class="section-heading">
      <h6>BROWSE</h6>
      <h2>{{ wearType }}</h2>
      <h6>{{ price }}</h6>
      <h6>VIEW ALL</h6>
    </div>

    <div class="section-container">
      <div
        v-for="(data, index) in imageData"
        :key="index"
        class="section-container-image"
        :style="{ width: imageWidth }"
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

<style lang="scss" scoped>
.browse-adult-section {
  display: flex;
  flex-direction: column;
  .section-heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 5px;
    padding: 10px;
    cursor: pointer;
    h6 {
      font-family: 'Roboto Condensed', sans-serif;
      font-weight: 1000;
      line-height: 1;
      color: #333333;
      padding: 1px;
    }
    h2 {
      font-family: 'Roboto Condensed', sans-serif;
      font-weight: 1000;
      line-height: 1;
      color: #333333;
      padding: 3px;
    }
  }
  .section-container {
    display: flex;

    .section-container-image {
      margin: 3px;
      padding: 3px;
      // width: 100 / 5 * 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        margin: 3px;
        padding: 3px 5px;
        object-fit: contain;
        transition: all 0.2s ease-in-out;
      }
      img:hover {
        transform: scale(1.02);
      }
    }
  }
}
</style>
