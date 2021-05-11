<template>
  <el-form
    :model="model"
    :label-width="labelWidth"
    :label-position="labelPosition"
    :rules="rules"
    :inline="inline"
  >
    <slot></slot>
  </el-form>
</template>

<script>
export default {
  name: 'CustomForm',
  props: {
    model: {
      type: Object
    },
    labelWidth: {
      type: String,
      default: '80px'
    },
    labelPosition: {
      type: String,
      default: 'right'
    },
    rules: {
      type: Object
    },
    inline: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style></style>
