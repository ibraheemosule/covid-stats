<template>
  <div id="app" class="bg-gray-100 w-full">
    <Layout>
      <router-view />
      <div
        v-if="fetchData === false"
        class="
          capitalize
          text-sm
          font-bold
          absolute
          top-50
          left-50
          -translate-y-1/2 -translate-x-1/2
        "
      >
        Unable To Fetch Data, Might be Network
      </div>
    </Layout>
  </div>
</template>
<script>
import axios from "axios"

export default {
  components: {
    Layout: () => import("./components/Layout.vue"),
  },
  data() {
    return {}
  },

  async beforeMount() {
    try {
      let { data } = await axios.get("https://covidnigeria.herokuapp.com/api")
      data = data.data
      this.$store.commit("setData", data)
      this.loading = false
    } catch (err) {
      console.log(err.message)
      this.fetchData = false
    } finally {
      this.loading = false
    }
  },
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.rotate {
  animation: rotation 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
