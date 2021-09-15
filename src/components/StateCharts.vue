<script>
import { Line } from "vue-chartjs"
export default {
  extends: Line,
  data() {
    return {
      value: "",
    }
  },
  props: {
    label: {
      type: String,
    },
    chartData: {
      type: Array,
    },
    options: {
      type: Object,
    },
    chartStyles: {
      type: Object,
    },
    currentState: {
      type: [String, Number, Array],
    },
  },

  mounted() {
    this.stats()
  },
  methods: {
    stats() {
      const scenarios = [
        "Confirmed Cases",
        "Cases On Admission",
        "Discharged",
        "Death",
      ]
      const totals = []
      for (let i in this.chartData[parseInt(this.currentState)]) {
        totals.push(this.chartData[parseInt(this.currentState)][i])
      }
      totals.splice(0, 2)
      const { borderColor, pointsBackgroundColor, backgroundColor } =
        this.chartStyles
      this.renderChart(
        {
          labels: scenarios,
          datasets: [
            {
              label: this.label,
              data: totals,
              borderColor: borderColor,
              pointsBackgroundColor: pointsBackgroundColor,
              backgroundColor: backgroundColor,
            },
          ],
        },
        this.options,
      )
    },
  },
}
</script>

<style></style>
