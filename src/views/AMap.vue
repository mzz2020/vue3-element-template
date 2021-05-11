<template>
  <div :style="amapStyle" id="AMapRef"></div>
</template>

<script>
import { reactive, ref } from 'vue'
import AMapLoader from '@amap/amap-jsapi-loader'
export default {
  name: 'AMap',
  setup() {
    // 地图大小
    const amapStyle = reactive({
      width: document.body.offsetWidth + 'px',
      height: document.body.offsetHeight - 80 + 'px'
    })
    // 地图实例
    const amap = ref()
    // 圆点实例
    const circleMarker = ref()
    // 圆点列表
    const circleList = ref([
      [116.397428, 39.921883],
      [116.397428, 39.920213],
      [116.403322, 39.922282],
      [116.403322, 39.920249]
    ])
    // 地图配置
    const AMapLoaderOptiion = {
      key: 'c34c7b38bc3b6a29ff1723f256d207f7', // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '1.4.15', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      AMapUI: {
        // 是否加载 AMapUI，缺省不加载
        version: '1.1', // AMapUI 缺省 1.1
        plugins: [] // 需要加载的 AMapUI ui插件
      },
      Loca: {
        // 是否加载 Loca， 缺省不加载
        version: '1.3.2' // Loca 版本，缺省 1.3.2
      }
    }
    //圆点标记配置
    let circleCon = {
      center: [], // 圆心位置
      radius: 3000, //半径
      strokeColor: 'white', //线颜色
      strokeOpacity: 0.7, //线透明度
      strokeWeight: 2, //线宽
      fillColor: 'red', //填充色
      fillOpacity: 0.5, //填充透明度
      zIndex: 10,
      bubble: true,
      cursor: 'pointer',
      clickable: true
    }
    // 加载地图实例
    AMapLoader.load(AMapLoaderOptiion)
      .then(AMap => {
        // 地图实例配置
        amap.value = new AMap.Map('AMapRef', {
          zoom: 10, // 级别
          zooms: [4, 18], //设置地图级别范围
          viewMode: '3D', // 使用3D视图
          center: [116.397428, 39.90923] //中心点坐标
        })
        // 圆心位置
        circleCon.center = new AMap.LngLat('116.403322', '39.920255')
        // 实例化圆
        circleMarker.value = new AMap.Circle(circleCon)
        // 加载多个圆点
        circleList.value.map(circle => {
          const circleCenter = new AMap.LngLat(circle[0], circle[1])
          // if (circleMarker.value.contains(circleCenter)) {}  // 如果点在圆内则输出下面的语句写在if里面
          let Marker = new AMap.Marker({
            position: circleCenter
          })
          // 自定义样式
          Marker.setContent('<div class="amap-content">我</div>')
          amap.value.add(Marker)
        })
        // 加入范围圆
        // circleMarker.value.setMap(amap.value)
        amap.value.setFitView() //根据地图上添加的覆盖物分布情况，自动缩放地图到合适的视野级别
      })
      .catch(e => {
        console.log(e)
      })

    return {
      amapStyle
    }
  }
}
</script>

<style lang="scss">
.amap-content {
  background-color: rgba(255, 0, 0, 0.5);
  color: #fff;
  border-radius: 10%;
  border: 3px solid rgba(255, 0, 0, 0.8);
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 10px;
}
</style>
