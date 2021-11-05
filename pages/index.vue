<template>
  <div>
    <default />
  </div>
</template>

<script>
export default {
  // carousel data
  async fetch(context) {
    await fetch(
      'https://agclother-nuxt-default-rtdb.firebaseio.com/carouselData.json'
    )
      .then((res) => res.json())
      .then((response) =>
        context.store.dispatch('home/setCarouselData', response)
      )

    // deals of the data section data
    await fetch(
      'https://agclother-nuxt-default-rtdb.firebaseio.com/todaysDealData.json'
    )
      .then((res) => res.json())
      .then((response) =>
        context.store.dispatch('home/setTodaysDealData', response)
      )

    // mens wear section data
    await fetch(
      'https://agclother-nuxt-default-rtdb.firebaseio.com/mensWearData.json'
    )
      .then((res) => res.json())
      .then((response) =>
        context.store.dispatch('home/setMensWearSectionData', response)
      )

    // women's wear section data
    await fetch(
      'https://agclother-nuxt-default-rtdb.firebaseio.com/womenWearData.json'
    )
      .then((res) => res.json())
      .then((response) =>
        context.store.dispatch('home/setWomensWearSectionData', response)
      )

    // kids wear section data
    await fetch(
      'https://agclother-nuxt-default-rtdb.firebaseio.com/kidsWearData.json'
    )
      .then((res) => res.json())
      .then((response) =>
        context.store.dispatch('home/setKidsWearSectionData', response)
      )

    // footwear section data
    await fetch(
      'https://agclother-nuxt-default-rtdb.firebaseio.com/footWearData.json'
    )
      .then((res) => res.json())
      .then((response) =>
        context.store.dispatch('home/setFootwearSectionData', response)
      )

    // beauty section data
    await fetch(
      'https://agclother-nuxt-default-rtdb.firebaseio.com/trendingStylesData.json'
    )
      .then((res) => res.json())
      .then((response) =>
        context.store.dispatch('home/setTrendingStyleSectionData', response)
      )

    // beauty section data
    await fetch(
      'https://agclother-nuxt-default-rtdb.firebaseio.com/beautySectionData.json'
    )
      .then((res) => res.json())
      .then((response) =>
        context.store.dispatch('home/setBeautySectionData', response)
      )
  },
}
</script>
