<template>
  <div>
    <Header />
    <Carousel :carousel-data="carouselData" />
    <DealsOfDay :data="todaysDealData" :no-of-images="'4'" />
    <BrowseClothes
      :image-data="menswearImages"
      :wear-type="'MENS WEAR'"
      :price="'STARTING AT ₹999'"
      :no-of-images="'5'"
      :show-details="true"
    />
    <BrowseClothes
      :image-data="womensWearImages"
      :wear-type="'WOMENS WEAR'"
      :price="'STARTING AT ₹399'"
      :no-of-images="'5'"
      :show-details="true"
    />
    <BrowseClothes
      :image-data="kidsWearData"
      :wear-type="'KIDS WEAR'"
      :price="'STARTING AT ₹299'"
      :no-of-images="'5'"
      :show-details="true"
    />
    <BrowseClothes
      :image-data="footWearData"
      :wear-type="'FOOTWEAR'"
      :price="'STARTING AT ₹1999'"
      :no-of-images="'5'"
      :show-details="true"
    />
    <SlideShow
      :image-data="trendingStyleSectionData"
      :wear-type="'TRENDING STYLES'"
      :price="'STARTING AT ₹2999'"
      :show-details="true"
    />
    <BrowseClothes
      :image-data="beautySectionData"
      :wear-type="'ACCESSORIES'"
      :price="'STARTING AT ₹799'"
      :no-of-images="'5'"
      :show-details="true"
    />
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
import Carousel from '@/components/general/Carousel.vue'
import DealsOfDay from '@/components/general/DealsOfDay.vue'
import BrowseClothes from '@/components/general/BrowseClothes.vue'
import SlideShow from '@/components/general/SlideShow.vue'

export default {
  components: {
    Header,
    Carousel,
    DealsOfDay,
    BrowseClothes,
    SlideShow,
    Footer
  },
  computed: {
    ...mapState('home', [
      'carouselData',
      'todaysDealData',
      'menswearImages',
      'womensWearImages',
      'kidsWearData',
      'footWearData',
      'trendingStyleSectionData',
      'beautySectionData',
    ]),
  },
}
</script>

Carousel
