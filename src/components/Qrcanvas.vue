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
  setup () {
    const qrcanvasRef = ref()
    onMounted(() => {
      const qrcanvasResult = new qrcanvas({
        data: '我的二维码',
        size: 128
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
}
</style>