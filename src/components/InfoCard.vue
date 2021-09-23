<template>
  <div class="w-full md:w-6/12 xl:w-3/12 px-4 pb-4">
    <div
      class="
        relative
        h-full
        flex flex-col
        min-w-0
        break-words
        white
        rounded
        mb-6
        xl:mb-0
        shadow-sm
      "
    >
      <div class="flex-auto p-4">
        <div class="flex flex-wrap">
          <div class="relative w-full max-w-full flex-grow flex-1">
            <h5 class="text-gray-400 uppercase text-xs font-medium mb-2">
              {{ title }}
            </h5>
            <span class="font-light text-md text-blueGray-700">
              {{ value | splitNumber }} <Loader v-if="load" />
            </span>
          </div>
          <div class="relative w-auto pl-1 flex-initial">
            <div
              :class="color"
              class="
                text-white text-center
                items-center
                justify-center
                w-6
                h-6
                shadow-sm
                rounded-full
                p-0.5
                -m-1
              "
            >
              <img v-if="id === 0" src="@/assets/images/sick.svg" alt="icon" />
              <img v-if="id === 1" src="@/assets/images/group.svg" alt="icon" />
              <img v-if="id === 2" src="@/assets/images/sad.svg" alt="icon" />
              <img v-if="id === 3" src="@/assets/images/happy.svg" alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["color", "value", "title", "id", "load"],
  filters: {
    splitNumber(val) {
      return val.toLocaleString().split(",").join(", ")
    },
  },
}
</script>
