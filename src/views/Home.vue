<template>
  <div class="home">
    <qrcanvas />
    <div style="margin: 16px 0"></div>
    <el-button type="info" @click="openDialog">显示Dialog</el-button>
    <Dialog ref="dialogRef" :showBtn="true" @click-submit="submit">
      <template #body>
        <i class="el-icon-info"></i>
        my name is Charlie, Im five
        <Dialog ref="dialogRef1">
          <template #body>
            <div>我是爸爸</div>
          </template>
        </Dialog>
      </template>
    </Dialog>
  </div>
</template>

<script>
import Qrcanvas from '../components/Qrcanvas.vue'
import Dialog from '../components/Dialog.vue'
import { ref } from 'vue'

export default {
  name: 'Home',
  components: {
    Qrcanvas,
    Dialog
  },
  setup() {
    const dialogRef = ref()
    const dialogRef1 = ref()
    const openDialog = () => {
      dialogRef.value.showDialog = true
    }
    const submit = () => {
      dialogRef1.value.showDialog = true
    }
    return {
      openDialog,
      dialogRef,
      submit,
      dialogRef1
    }
  }
}
</script>
