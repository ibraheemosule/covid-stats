<template>
  <div id="app" class="bg-gray-100 px-2 flex-grow h-screen overflow-y-scroll">
    <div class="my-9 mt-12 pl-4">
      <h1 class="text-2xl font-light mb-1 mr-4">
        Overall Stats Data
        <hr class="line w-full" />
      </h1>
    </div>
    <div class="flex flex-wrap">
      <template v-for="data in cardData">
        <InfoCard
          :key="data.title"
          :color="data.color"
          :title="data.title"
          :value="data.value"
          :id="data.id"
          :load="states.length < 1"
        />
      </template>
    </div>
    <div class="row my-10 mx-4 overflow-x-scroll" v-if="states.length > 0">
      <h2 class="text-md font-light my-3">Overall States Chart</h2>
      <ConfirmedCases
        :chartData="states"
        :options="chartOptions"
        :chartStyles="styles"
        label="Overall States Chart"
        :width="1000"
      />
    </div>
    <div v-else class="flex h-80 justify-center items-center">
      <div class="w-12 h-12 mx-auto mt-20">
        <img class="w-full rotate" src="@/assets/images/covid.png" alt="" />
        <div>Loading...</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    ConfirmedCases: () => import("../components/ConfirmedCases.vue"),
    InfoCard: () => import("../components/InfoCard.vue"),
  },
  data() {
    return {
      styles: {
        borderColor: "#74a57f",
        pointBorderColor: "#0E1428",
        pointBackgroundColor: "#AFD6AC",
        backgroundColor: "#74a57f8a",
      },
      chartOptions: {
        responsive: window.innerWidth < 760 ? false : true,
        maintainAspectRatio: false,
        scaleShowValues: true,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                autoSkip: false,
              },
            },
          ],
        },
      },
    }
  },
  computed: {
    cardData() {
      return [
        {
          title: "total cases",
          color: "bg-fadered",
          value:
            this.data?.totalActiveCases
              .toLocaleString()
              .split(",")
              .join(", ") || 0,
          id: 0,
        },
        {
          title: "total confirmed",
          color: "bg-blue-100",
          value:
            this.data?.totalConfirmedCases
              .toLocaleString()
              .split(",")
              .join(", ") || 0,
          id: 1,
        },
        {
          title: "total deaths",
          color: "bg-gray-300",
          value: this.data?.death.toLocaleString().split(",").join(", ") || 0,
          id: 2,
        },
        {
          title: "total discharged",
          color: "bg-green-100",
          value:
            this.data?.discharged.toLocaleString().split(",").join(", ") || 0,
          id: 3,
        },
      ]
    },
  },
}
</script>

<style scoped>
.line {
  border: 1px solid rgba(150, 150, 150, 0.062);
  margin: 20px 0px 20px 0;
}
</style>
