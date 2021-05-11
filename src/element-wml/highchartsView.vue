<template>
  <div :id="id" :option="option"></div>
</template>

<script>
import { onMounted, watch } from 'vue'
import Highcharts from 'highcharts'
export default {
  name: 'HighchartsView',
  props: {
    id: String,
    option: Object
  },
  setup(props) {
    watch(() => props.option, () => {
      Highcharts.chart(props.id, props.option)
    })
    onMounted(() => {
      Highcharts.chart(props.id, props.option)
    })
  }
}
</script>

<style lang="scss">

</style>
