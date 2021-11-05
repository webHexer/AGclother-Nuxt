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
  },
}
</script>
