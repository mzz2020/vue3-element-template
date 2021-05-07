<template>
  <div class="home">
    <qrcanvas data="http://192.168.3.30:8088/#/amap" />
    <div style="margin: 16px 0"></div>
    <el-button type="success" @click="openDialog">显示Dialog</el-button>
    <Dialog ref="dialogRef" :showBtn="true" @click-submit="submit"></Dialog>
    <custom-form
      :models="fromData"
      :rules="rules"
      inline
      class="custom-form"
    >
      <custom-form-input label="邮箱" placeholder="请输入邮箱" v-model="fromData.email" prop="email" />
    </custom-form>
    {{fromData.email}}
  </div>
</template>

<script>
import Qrcanvas from '../components/Qrcanvas.vue'
import Dialog from '../components/Dialog.vue'
import CustomForm from '../components/CustomForm.vue'
import CustomFormInput from '../components/CustomFormInput.vue'
import { reactive, ref } from 'vue'

export default {
  name: 'Home',
  components: {
    Qrcanvas,
    Dialog,
    CustomForm,
    CustomFormInput
  },
  setup() {
    // 对话框 Dom
    const dialogRef = ref()
    // 对话框1 Dom
    const dialogRef1 = ref()
    // 打开对话框
    const openDialog = () => {
      // 调用子组件方法
      dialogRef.value.showDialog = true
    }
    // 打开对话框1
    const submit = () => {
      // 调用子组件方法
      dialogRef1.value.showDialog = true
    }
    // 表单对象
    const fromData = reactive({
      email: '123'
    })
    // 表单校验
    const rules = {
      email: [{ required: true, message: '邮箱不能为空', trigger: 'blur' }]
    }
    return {
      openDialog,
      dialogRef,
      submit,
      dialogRef1,
      fromData,
      rules
    }
  }
}
</script>

<style lang="scss">
.custom-form {
  margin-top: 20px;
}
</style>
