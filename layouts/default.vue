<template>
  <div>
    <Header />
    <Carousel :carousel-data="carouselData" />
    <DealsOfDay :data="todaysDealData" :no-of-images="'4'" />
    <BrowseClothes
      :image-data="menswearImages"
      :wear-type="'MENS WEAR'"
      :price="'STARTING AT ₹599'"
      :no-of-images="'5'"
      :show-details="true"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/header/Header.vue'
import Carousel from '@/components/general/Carousel.vue'
import DealsOfDay from '../components/general/DealsOfDay.vue'
import BrowseClothes from '../components/general/BrowseClothes.vue'

export default {
  components: {
    Header,
    Carousel,
    DealsOfDay,
    BrowseClothes,
  },
  computed: {
    ...mapState('home', ['carouselData', 'todaysDealData', 'menswearImages']),
  },
}
</script>

Carousel
