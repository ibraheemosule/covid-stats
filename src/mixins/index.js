import Vue from "vue"
import { mapState } from "vuex"

Vue.mixin({
  data() {
    return {
      loading: true,
    }
  },
  computed: {
    ...mapState(["data"]),
    states() {
      const existingStates = []
      const states = this.data.states.filter(state => {
        if (existingStates.indexOf(state._id) > -1) {
          return false
        }
        existingStates.push(state._id)
        return true
      })
      states.sort((a, b) => {
        return a.state > b.state ? 1 : -1
      })
      return states
    },
  },
})
