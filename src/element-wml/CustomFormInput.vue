<template>
  <el-form-item :label="label" :prop="prop">
    <el-input
      :name="prop"
      @input="updateValue"
      v-model="value"
      :placeholder="placeholder"
      autocomplete="off"
    ></el-input>
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
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    const value = ref(props.modelValue)
    const updateValue = value => {
      context.emit('update:modelValue', value)
    }
    return { value, updateValue }
  }
}
</script>

<style></style>
