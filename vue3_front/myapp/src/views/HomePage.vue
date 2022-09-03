<template>
  <div>
      <div class="echarts-box">
        <div id="myEcharts" :style="{width:'900px',height:'300px'}"></div>
      </div>
  </div>
</template>
<script setup>
import * as echarts from 'echarts';
let chartDom = document.getElementById('myEcharts');
let myChart=echarts.init(chartDom)
  let newPromise=new Promise((resolve)=>{
    resolve()
  })
  newPromise.then(()=>{
    initData()
  })
function initData() {
  let option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };
// myChart.setOption(option);
  myChart.setOption(option)
}
</script>

<style scoped>

</style>