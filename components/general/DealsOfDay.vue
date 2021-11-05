<template>
  <div class="deals-of-the-day">
    <div class="deals-of-the-day__section-header">
      <h3>BROWSE</h3>
      <h2>TODAY'S DEAL</h2>
      <h3>UPTO 60% OFF</h3>
      <h3>VIEW ALL</h3>
    </div>
    <div class="deals-of-the-day__products">
      <div
        v-for="(items, index) in data"
        :key="index"
        class="deals-of-the-day__product"
      >
        <nuxt-link :to="'/browseCategory/' + categoryName">
          <img :src="items.source" alt="deals images" />
        </nuxt-link>
        <!-- <div class="content">
          <h5>{{ items.desc }}</h5>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DealsOfDay',
  props: {
    data: {
      type: Array,
      required: true,
    },
    noOfImages: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      categoryName: "TODAY'S DEAL",
    }
  },
}
</script>
