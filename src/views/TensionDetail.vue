<template>
  <div class="TensionDetail" style="width: 100%; height: 100%">
    <v-btn @click="goHome" class="ma-5" style="z-index: 100">返回</v-btn>
    <div id="chart" style="width: 100%; height: 50vh"></div>
  </div>
</template>

<script>
export default {
  name: 'TensionDetail',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    myEcharts () {
      // 基于准备好的dom，初始化echarts实例
      const myChart = this.$echarts.init(document.getElementById('chart'))
      // 指定图表的配置项和数据
      let base = +new Date(1968, 9, 3)
      const oneDay = 24 * 3600 * 1000
      const date = []
      const data = [Math.random() * 300]
      for (let i = 1; i < 20000; i++) {
        const now = new Date((base += oneDay))
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'))
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]))
      }
      const option = {
        tooltip: {
          trigger: 'axis',
          position: function (pt) {
            return [pt[0], '10%']
          }
        },
        title: {
          left: 'center',
          text: 'Large Area Chart'
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: date
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%']
        },
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 10
          },
          {
            start: 0,
            end: 10
          }
        ],
        series: [
          {
            name: 'Fake Data',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
              color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
              color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 158, 68)'
                },
                {
                  offset: 1,
                  color: 'rgb(255, 70, 131)'
                }
              ])
            },
            data: data
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    },
    goHome () {
      this.$router.push('/')
    }
  },
  mounted () {
    this.myEcharts()
  }
}
</script>

<style lang="scss" scoped>
</style>
