<template>
  <div class="qrcode">
    <div ref="qrcanvasRef"></div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { qrcanvas } from 'qrcanvas'
export default {
  name: 'Qrcanvas',
  props: {
    data: {
      type: String
    },
    size: {
      type: Number,
      default: 128
    }
  },
  setup(props) {
    const qrcanvasRef = ref()
    onMounted(() => {
      const qrcanvasResult = new qrcanvas({
        data: props.data,
        size: props.size
      })
      qrcanvasRef.value.innerHTML = ''
      qrcanvasRef.value.appendChild(qrcanvasResult)
    })
    return { qrcanvasRef }
  }
}
</script>

<style lang="scss">
.qrcode {
  text-align: center;
}
</style>
