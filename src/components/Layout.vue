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
      :class="[show ? 'show' : 'hide']"
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
    }
  },
  methods: {
    toggle() {
      const elStyle = this.$refs.sidebar.$el
      if (window.innerWidth < 640) {
        this.show
          ? elStyle.classList.remove("show")
          : elStyle.classList.remove("hide")
        this.show = !this.show
      }
    },
  },
}
</script>

<style scoped>
@media (max-width: 640px) {
  .hide {
    transform: translate(-80vw);
    position: absolute;
    left: 0;
    top: 0;
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
