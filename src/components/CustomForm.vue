<template>
  <el-form
    :model="formModel"
    :label-width="labelWidth"
    :label-position="labelPosition"
    :rules="rules"
    :inline="inline"
  >
    <slot></slot>
  </el-form>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'CustomForm',
  props: {
    models: {
      type: Object,
      default: () => {}
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
      type: Array,
      default: () => []
    },
    inline: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const formModel = computed(() => props.models)
    return { formModel }
  }
}
</script>

<style>

</style>