<script>
import { Line } from "vue-chartjs"
export default {
  extends: Line,
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
  },
  mounted() {
    const states = this.chartData.map(value => value.state)
    const totals = this.chartData.map(value => value.confirmedCases)
    const {
      borderColor,
      pointsBackgroundColor,
      backgroundColor,
    } = this.chartStyles
    this.renderChart(
      {
        labels: states,
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
}
</script>

<style></style>
