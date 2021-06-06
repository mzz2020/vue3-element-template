<template>
  <svg aria-hidden="true" :style="svgStyle" :viewBox="viewBox" xmlns="http://www.w3.org/2000/svg">
    <slot></slot>
  </svg>
</template>

<script>
export default {
  name: 'CustomSvg',
  props: {
    svgStyle: {
      type: String,
      default: ''
    },
    viewBox: {
      type: [String, Boolean],
      default: false
    }
  }
}
</script>

<style lang="scss" scoped></style>
