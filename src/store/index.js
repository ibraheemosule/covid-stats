import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {
      death: "",
      discharged: "",
      states: [],
      totalActiveCases: "",
      totalConfirmedCases: "",
      totalSamplesTested: "",
    },
  },
  mutations: {
    setData: (state, data) => (state.data = data),
  },
  actions: {},
})
