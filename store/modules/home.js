const initialState = () => ({
  carouselData: [],
  todaysDealData: [],
  menswearImages: [],
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
  },
}
