<template>
  <div id="app" class="bg-gray-100 px-2 flex-grow h-screen overflow-y-scroll">
    <div class="my-9 mt-12 pl-4">
      <h1 class="text-2xl font-light mb-1 mr-4">
        {{ $route.params.state.split(/(?=[A-Z])/).join(" ") }} State Data
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
        />
      </template>
    </div>
    <div class="row my-10 mx-4 overflow-x-scroll" v-if="states.length > 0">
      <h2 class="text-md font-light my-3">
        {{ $route.params.state.split(/(?=[A-Z])/).join(" ") }} State Chart
      </h2>
      <StateCharts
        :currentState="currentState"
        :chartData="states"
        :options="chartOptions"
        :chartStyles="styles"
        :label="
          $route.params.state.split(/(?=[A-Z])/).join(' ') + ' State Data'
        "
      />
    </div>
    <div v-else class="flex h-80 justify-center items-center">
      <div class="w-12 h-12 mx-auto mt-20">
        <img class="rotate" src="@/assets/images/covid.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    StateCharts: () => import("../components/StateCharts.vue"),
    InfoCard: () => import("../components/InfoCard.vue"),
  },
  data() {
    return {
      activeState: "",
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
    currentState() {
      let index = 0
      for (let i = 0; i < this.states.length; i++) {
        if (this.states[i].state == this.$route.params.state) {
          this.changeState(this.states[i])
          index = i
        }
      }
      return index
    },
    labelData() {
      return this.states[this.currentState]
    },
    cardData() {
      return [
        {
          title: "confirmed cases",
          color: "bg-fadered",
          value: this.activeState?.confirmedCases || 0,
          id: 0,
        },
        {
          title: "admitted patients",
          color: "bg-blue-100",
          value: this.activeState?.casesOnAdmission || 0,
          id: 1,
        },
        {
          title: "Deaths",
          color: "bg-gray-300",
          value: this.activeState?.death || 0,
          id: 2,
        },
        {
          title: "discharged patients",
          color: "bg-green-100",
          value: this.activeState?.discharged || 0,
          id: 3,
        },
      ]
    },
  },
  methods: {
    changeState(value) {
      this.activeState = value
    },
  },
}
</script>

<style scoped>
.line {
  border: 1px solid rgba(150, 150, 150, 0.062);
  margin: 20px 0 20px 0;
}
</style>
