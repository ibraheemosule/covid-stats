import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {
     death: "",
     discharged: "",
     states: [],
     totalActiveCases: "",
     totalConfirmedCases: "",
     totalSamplesTested: ""
    }
  },
  getters: {
    states(state) {
      const allStates = state.data.states
      console.log(allStates, "here")
      let names = allStates.map((name) => name.state)
      names = [...new Set(names)]
      allStates.sort((a,b) => (a.state > b.state) ? 1 : ((b.state > a.state) ? -1 : 0))
      let returnVal = []
      for(let i = 0; i < allStates.length; i++){
        if(names.includes(allStates[i].state)){
          returnVal.push(allStates[i])
          delete names[names.indexOf(allStates[i].state)]
        }
      }
      console.log(returnVal)
      return returnVal
    }
  },
  mutations: {
    setData: (state, data) => state.data = data
  },
  actions: {
  },
})
