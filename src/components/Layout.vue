<template>
  <div class="flex min-h-screen">
    <button
      @click.prevent="toggle"
      class="
        absolute
        z-50
        sm:hidden
        left-0
        top-4
        py-2
        ml-4
        border-0
        text-gray-400
        border-gray-200
      "
    >
      <img v-if="!show" src="@/assets/images/menu.svg" alt="toggle" />
    </button>
    <SideNav
      @toggleNav="toggle"
      ref="sidebar"
      class="transition-all duration-700 md:transition-none hide"
    />
    <div
      v-on="show ? { click: toggle } : {}"
      :class="[
        show
          ? 'transition-all duration-700 bg-gray-400 bg-opacity-50 opacity-70 '
          : '',
      ]"
      class="container mx-auto overflow-y-scroll h-screen pb-12"
    >
      <transition name="fade" mode="out-in">
        <router-view :key="$route.path" />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    SideNav: () => import("./SideNav.vue"),
  },
  data() {
    return {
      show: false,
      isSmallScreen: false,
    }
  },
  methods: {
    handleResize() {
      console.log(this.isSmallScreen)
      if (window.innerWidth < 640) {
        this.isSmallScreen = true
      }
      console.log(this.isSmallScreen)
    },
    toggle() {
      const elStyle = this.$refs.sidebar.$el
      if (window.innerWidth < 640) {
        if (this.show) {
          elStyle.classList.add("hide")
          elStyle.classList.remove("show")
        }
        if (!this.show) {
          elStyle.style.position = "absolute"
          elStyle.style.top = "0"
          elStyle.style.bottom = "0"
          elStyle.style.left = "0"
          elStyle.style.zIndex = "100"
          elStyle.classList.add("show")
          elStyle.classList.remove("hide")
        }
        this.show = !this.show
      }
    },
  },
  beforeMount() {
    window.addEventListener("load", this.handleResize)
    window.addEventListener("resize", this.handleResize)
  },
}
</script>

<style scoped>
@media (max-width: 640px) {
  .hide {
    transform: translate(-80vw);
    position: absolute;
    left: -80vw;
  }
}
.show {
  transform: translate(0vw);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
}
</style>
