<template>
  <div
    class="
      sidebar
      absolute
      top-0
      left-0
      sm:static sm:flex sm:w-1/4
      w-3/4
      h-screen
      font-extralight
      overflow-y-scroll
      z-10
    "
  >
    <div class="flex items-center mt-4 h-20">
      <img
        alt=""
        class="w-20 h-auto -ml-6 p-4"
        src="@/assets/images/covid.png"
      />
      <h3 class="inline uppercase font-semibold text-green-600">covid stats</h3>
    </div>
    <ul class="nav pl-2 flex flex-grow flex-col h-5/6">
      <li @click="toggleNavOnMobile" class="nav-item mb-6">
        <router-link
          :to="{ name: 'country' }"
          class="
            flex flex-row
            items-center
            dashboard
            text-gray-400
            font-normal
            text-xs
          "
        >
          <span>Overall Stats</span>
        </router-link>
      </li>

      <li @click="toggleNavOnMobile" class="nav-item my-4">
        <span
          class="
            cursor-pointer
            block
            font-semibold
            text-green-600
            sm:cursor-text sm:hover:text-gray
            text-xs
          "
          >STATES</span
        >
      </li>
      <li class="nav-item overflow-y-scroll flex-grow flex flex-col">
        <ul class="states flex-grow mb-4" v-if="allStates.length">
          <template v-for="(state, index) in allStates">
            <li :key="index" @click="toggleNavOnMobile" class="nav-item">
              <router-link
                :to="{
                  name: 'state',
                  params: {
                    state: state,
                    index: index,
                  },
                }"
                class="
                  flex flex-row
                  font-normal
                  text-gray-400
                  items-center
                  opacity-75
                "
              >
                <span class="text-xs p-3 capitalize">{{ state }}</span>
              </router-link>
            </li>
          </template>
        </ul>
        <Loader v-else class="my-8" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    allStates() {
      return this.states?.map((val) => val.state)
    },
    isStatesAvailable() {
      return this.allStates?.length > 0
    },
  },
  methods: {
    toggleNavOnMobile() {
      this.$emit("toggleNav")
    },
  },
}
</script>

<style scoped>
.sidebar {
  flex-direction: column;
  padding: 10px 16px;
  background: rgb(22, 22, 22);
  /* background-color: #274fed; */
  box-shadow: 0 2px 4px #666;
  color: #fefefe;
  @media (max-width: 640px) {
    min-width: 80vw !important;
    display: "none";
  }
}
.sidebar .icon {
  cursor: pointer;
}
.sidebar .icon-circle {
  width: 32px;
  height: 32px;
  padding: 5px;
  margin-left: 10px;
  cursor: pointer;
  color: #222;
  background-color: #fefefe;
  border-radius: 50%;
}
.sidebar a {
  padding-left: 0.5em;
}
.sidebar .dashboard {
  padding-top: 1em;
  padding-bottom: 1em;
  margin-left: -0.5em;
}
.sidebar a:hover {
  color: rgb(182, 182, 182);
  transition: all ease-in 0s;
  background: #ffffff0d;
  border-radius: 0.5em;
}
</style>
