<template>
  <div id="app" class="bg-gray-100 w-full">
    <Layout>
      <router-view />
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
</style>
