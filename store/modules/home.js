const initialState = () => ({
  carouselData: [],
  todaysDealData: [],
  menswearImages: [],
  womensWearImages: [],
  kidsWearData: [],
  footWearData: [],
  trendingStyleSectionData: [],
  beautySectionData: [],
})

export default {
  namespaced: true,
  strict: true,
  state: initialState(),

  actions: {
    resetLocationSectionState({ commit }) {
      commit('RESET_STATE')
    },
    setCarouselData({ commit }, carouselData) {
      commit('SET_CAROUSEL_DATA', carouselData)
    },
    setTodaysDealData({ commit }, todaysDealData) {
      commit('SET_TODAYS_DEAL_DATA', todaysDealData)
    },
    setMensWearSectionData({ commit }, menswearImages) {
      commit('SET_MENS_WEAR_SECTION_DATA', menswearImages)
    },
    setWomensWearSectionData({ commit }, womensWearImages) {
      commit('SET_WOMENS_WEAR_SECTION_DATA', womensWearImages)
    },
    setKidsWearSectionData({ commit }, kidsWearData) {
      commit('SET_KIDS_WEAR_SECTION_DATA', kidsWearData)
    },
    setFootwearSectionData({ commit }, footWearData) {
      commit('SET_FOOT_WEAR_SECTION_DATA', footWearData)
    },
    setTrendingStyleSectionData({ commit }, trendingStyleSectionData) {
      commit('SET_TRENDING_STYLE_SECTION_DATA', trendingStyleSectionData)
    },
    setBeautySectionData({ commit }, beautySectionData) {
      commit('SET_BEAUTY_SECTION_DATA', beautySectionData)
    },
  },

  mutations: {
    RESET_STATE: (state) => {
      const s = initialState()
      Object.keys(s).forEach((key) => {
        state[key] = s[key]
      })
    },
    SET_CAROUSEL_DATA: (state, carouselData) => {
      state.carouselData = carouselData
    },
    SET_TODAYS_DEAL_DATA: (state, todaysDealData) => {
      state.todaysDealData = todaysDealData
    },
    SET_MENS_WEAR_SECTION_DATA: (state, menswearImages) => {
      state.menswearImages = menswearImages
    },
    SET_WOMENS_WEAR_SECTION_DATA: (state, womensWearImages) => {
      state.womensWearImages = womensWearImages
    },
    SET_KIDS_WEAR_SECTION_DATA: (state, kidsWearData) => {
      state.kidsWearData = kidsWearData
    },
    SET_FOOT_WEAR_SECTION_DATA: (state, footWearData) => {
      state.footWearData = footWearData
    },
    SET_TRENDING_STYLE_SECTION_DATA: (state, trendingStyleSectionData) => {
      state.trendingStyleSectionData = trendingStyleSectionData
    },
    SET_BEAUTY_SECTION_DATA: (state, beautySectionData) => {
      state.beautySectionData = beautySectionData
    },
  },
}
