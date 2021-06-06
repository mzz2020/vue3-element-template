<template>
  <el-col :span="span">
    <el-space>
      <el-card class="box-card" :header="header">
        <ml-svg :viewBox="viewBox" :style="{ width: '100%', height: '100%', ...svgStyle }">
          <slot></slot>
        </ml-svg>
      </el-card>
    </el-space>
  </el-col>
</template>

<script>
export default {
  name: 'SvgRow',
  props: {
    viewBox: {
      type: [String, Boolean],
      default: false
    },
    svgStyle: {
      type:String,
      default: ''
    },
    span: {
      type: Number,
      required: true
    },
    header: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  text-align: center;
}
</style>
