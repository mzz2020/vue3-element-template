<template>
  <div style="padding: 40px">
    <el-row>
      <svg-col :span="4" header="圆形">
        <!-- cx cy 中心点 r 半径 stroke 边框颜色 stroke-width 边框尺寸 fill 填充颜色 -->
        <circle cx="50%" cy="50%" r="30%" stroke="#80DEEA" stroke-width="3" fill="#00BCD4" />
      </svg-col>
      <svg-col :span="4" header="矩形">
        <!-- width 宽 height 高 stroke 边框颜色 stroke-width 边框尺寸 fill 填充颜色 -->
        <rect
          width="100%"
          height="100%"
          style="stroke: #80deea; stroke-width: 3px; fill: #00bcd4"
        />
      </svg-col>
      <svg-col :span="4" header="半透明矩形">
        <!-- width 宽 height 高 stroke 边框颜色 stroke-width 边框尺寸 fill 填充颜色 fill-opacity 填充透明度 -->
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          style="stroke: #80deea; stroke-width: 3px; fill: #00bcd4; fill-opacity: 0.1"
        />
      </svg-col>
      <svg-col :span="4" header="圆角矩形">
        <!-- x y 左上角点 rx ry 圆角 width 宽 height 高 stroke 边框颜色 stroke-width 边框尺寸 fill 填充颜色 fill-opacity 填充透明度 -->
        <rect
          x="0"
          y="0"
          rx="20"
          ry="20"
          width="100%"
          height="100%"
          style="stroke: #80deea; stroke-width: 3px; fill: #00bcd4; fill-opacity: 0.3"
        />
      </svg-col>
      <svg-col :span="4" header="椭圆">
        <!-- cx cy 中心点 rx 水平半径 ry 垂直半径 width 宽 height 高 stroke 边框颜色 stroke-width 边框尺寸 fill 填充颜色 fill-opacity 填充透明度 -->
        <ellipse
          cx="50%"
          cy="50%"
          rx="50%"
          ry="50%"
          style="stroke: #80deea; stroke-width: 3px; fill: #00bcd4; fill-opacity: 0.6"
        />
      </svg-col>
      <svg-col :span="4" header="三个椭圆重叠">
        <!-- cx cy 中心点 rx 水平半径 ry 垂直半径 width 宽 height 高 stroke 边框颜色 stroke-width 边框尺寸 fill 填充颜色 fill-opacity 填充透明度 -->
        <ellipse
          cx="50%"
          cy="60%"
          rx="50%"
          ry="30%"
          style="stroke: #80deea; stroke-width: 3px; fill: #80deea; fill-opacity: 1"
        />
        <ellipse
          cx="50%"
          cy="40%"
          rx="40%"
          ry="20%"
          style="stroke: #e6a23c; stroke-width: 3px; fill: #e6a23c; fill-opacity: 1"
        />
        <ellipse
          cx="50%"
          cy="20%"
          rx="30%"
          ry="10%"
          style="stroke: #66b1ff; stroke-width: 3px; fill: #66b1ff; fill-opacity: 1"
        />
      </svg-col>
    </el-row>
    <el-row>
      <svg-col :span="4" header="直线">
        <!-- x1 x2 起点 x2 y2 终点 stroke 边框颜色 stroke-width 边框尺寸 -->
        <line x1="10%" y1="10%" x2="50%" y2="90%" stroke="#80DEEA" stroke-width="2" />
        <line x1="30%" y1="10%" x2="70%" y2="90%" stroke="#e6a23c" stroke-width="2" />
        <line x1="50%" y1="10%" x2="90%" y2="90%" stroke="#66b1ff" stroke-width="2" />
      </svg-col>
      <svg-col viewBox="0 0 100 100" :span="4" header="多边形" :svgStyle="{width: '58%', height:'58%'}">
        <!-- points 点坐标 stroke 边框颜色 stroke-width 边框尺寸 full 填充颜色 fill-opacity 填充透明度 -->
        <polygon
          points="50,10 10,90 90,90"
          style="stroke: #80deea; stroke-width: 1px; fill: #00bcd4"
        />
      </svg-col>
      <svg-col  viewBox="0 0 100 100" :span="4" header="五角星" :svgStyle="{width: '58%', height:'58%'}">
        <!-- points 点坐标 stroke 边框颜色 stroke-width 边框尺寸 fill 填充颜色 fill-opacity 填充透明度 -->
        <polygon
          points="50,10 20,90 90,40 10,40 80,90"
          style="stroke: #80deea; stroke-width: 1px; fill: #00bcd4"
        />
      </svg-col>
      <svg-col  viewBox="0 0 100 100" :span="4" header="拆线" :svgStyle="{width: '58%', height:'58%'}">
        <!-- points 点坐标 stroke 边框颜色 stroke-width 边框尺寸 fill 填充颜色:none -->
        <polyline
          points="10,50 50,50 60,30 70,40 90,90"
          style="stroke: #80deea; stroke-width: 2px; fill: none"
        />
      </svg-col>
      <svg-col  viewBox="0 0 100 100" :span="4" header="路径" :svgStyle="{width: '58%', height:'58%'}">
        <!-- d 路径 M起点 L 多个点 z 深度 stroke 边框颜色 stroke-width 边框尺寸 fill 填充颜色 fill-opacity 填充透明度 -->
        <!-- M =函数
        L = 画线
        H = 水平线
        V = 垂直直线
        C = 曲线到
        S = 平滑曲线
        Q = 二次贝尔齐尔曲线
        T = 平滑二次贝尔齐尔曲线
        A = 椭圆弧
        Z = 闭合路径 -->
        <path d="M50 10 L10 90 L90 90 L90 10 Z" fill="#80deea" fill-opacity="0.4" stroke="red" />
      </svg-col>
      <svg-col  viewBox="0 0 100 100" :span="4" header="曲线" :svgStyle="{width: '58%', height:'58%'}">
        <!-- d 路径 M起点 L 多个点 z 深度 stroke 边框颜色 stroke-width 边框尺寸 fill 填充颜色 fill-opacity 填充透明度 -->
        <!-- M =函数
        L = 画线
        H = 水平线
        V = 垂直直线
        C = 曲线到
        S = 平滑曲线
        Q = 二次贝尔齐尔曲线
        T = 平滑二次贝尔齐尔曲线
        A = 椭圆弧
        Z = 闭合路径 -->
        <path d="M50 50
          C40 70 30 50 50 40
          C60 40 60 55 45 70
          C20 70 35 40 45 30"
          style="fill:white; stroke:red; stroke-width:2"/>
      </svg-col>
    </el-row>
  </div>
</template>

<script>
import SvgCol from '@/components/SvgCol.vue'
export default {
  name: 'Svg',
  components: {
    SvgCol
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  text-align: center;
}
.el-row {
  margin-bottom: 10px;
}
</style>
