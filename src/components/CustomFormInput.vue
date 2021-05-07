<template>
  <el-form-item :label="label" :prop="prop">
    <el-input @input="updateValue" v-model="inputModel" :placeholder="placeholder"></el-input>
  </el-form-item>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'CustomFormInput',
  props: {
    label: {
      type: String
    },
    prop: {
      type: String
    },
    placeholder: {
      type: String
    },
    modelValue: {
      type: String
    }
  },
  setup(props, context) {
    const inputModel = ref(props.modelValue || '')
    const updateValue = value => {
      inputModel.value = value
      context.emit('update:modelValue', value)
    }
    return { inputModel, updateValue }
  }
}
</script>

<style>

</style>