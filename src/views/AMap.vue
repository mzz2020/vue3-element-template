<template>
  <div ref="amapBox" style="width: 100%; height: 100%;">
    <div :style="apapStyle" id="AMapRef"></div>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from 'vue'
import AMapLoader from '@amap/amap-jsapi-loader'
export default {
  name: 'AMap',
  setup () {
    const amapBox = ref()
    let apapStyle = reactive({
      width: '1024px',
      height: '1024px'
    })
    const AMapLoaderOptiion = {
      key: 'c34c7b38bc3b6a29ff1723f256d207f7', // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '1.4.15', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins:[], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      AMapUI: { // 是否加载 AMapUI，缺省不加载
        version: '1.1', // AMapUI 缺省 1.1
        plugins: [] // 需要加载的 AMapUI ui插件
      },
      Loca: { // 是否加载 Loca， 缺省不加载
        version: '1.3.2' // Loca 版本，缺省 1.3.2
      }
    }
    onMounted(() => {
      AMapLoader.load(AMapLoaderOptiion).then(AMap => {
        let amap = new AMap.Map('AMapRef')
        amap.zoom = 11 // 级别
        amap.viewMode = '3D' // 使用3D视图
        amap.center = [114.02597366, 22.54605355] //中心点坐标
      }).catch(e => {
        console.log(e)
      })
    })
    return {
      amapBox,
      apapStyle
    }
  }
}
</script>

<style lang="scss">
</style>