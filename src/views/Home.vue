<template>
  <div class="home">
    <!-- 换行 -->
    <div style="margin: 16px 0"></div>
    <!-- 打开对话框 -->
    <el-button type="success" @click="openDialog">显示Dialog</el-button>
    <!-- 弹框组件 -->
    <ml-dialog ref="dialogRef" title="四维码" width="180px" :showBtn="false" @click-submit="submit">
      <template #body>
        <ml-qrcanvas :data="qrCanvasData" style="margin-bottom: 10px" />
      </template>
    </ml-dialog>
    <!-- <Dialog ref="dialogRef" title="二维码" width="180px" :showBtn="false" @click-submit="submit">
      <template #body> -->
    <!-- 二维码生成 -->
    <!-- <qrcanvas :data="qrCanvasData" style="margin-bottom: 10px;" />
      </template>
    </Dialog> -->
    <!-- 换行 -->
    <div style="margin: 16px 0"></div>
    <!-- 表单组件，from -->
    <ml-customform :model="fromData" :rules="rules" inline class="custom-form">
      <!-- 表单项input，加校验 -->
      <ml-customforminput label="邮箱" prop="email" v-model="fromData.email" />
    </ml-customform>
    {{ fromData.email }}
    <!-- heighCharts 图表组件 -->
    <ml-highchartsview
      :style="{ width: '500px', height: '200px', margin: '20px auto' }"
      :id="heighChartsData.id"
      :option="heighChartsData.option"
    />
  </div>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  name: 'Home',
  components: {},
  setup() {
    // 对话框 Dom
    const dialogRef = ref()
    // qrCanvas Data
    const qrCanvasData = ref('http://192.168.3.30:8088/#/amap')
    // 打开对话框
    const openDialog = () => {
      // 调用子组件方法
      dialogRef.value.showDialog = true
    }
    // 点击弹框确定按钮
    const submit = () => {
      // 调用子组件方法
      dialogRef.value.showDialog = false
    }
    // 表单对象
    const fromData = reactive({
      email: ''
    })
    // 表单校验
    const rules = {
      email: [{ required: true, message: '邮箱不能为空', trigger: 'blur' }]
    }
    // heighCharts Data
    const heighChartsData = reactive({
      id: 'heighChartsId',
      option: {
        credits: { enabled: false },
        title: { text: '' },
        subtitle: { text: '' },
        yAxis: {
          title: { text: '' },
          lineWidth: 1,
          lineColor: '#c0c4cc'
        },
        xAxis: {
          title: { text: '' },
          lineWidth: 1,
          lineColor: '#c0c4cc'
        },
        series: [
          {
            name: '自定义',
            color: '#67C23A',
            data: [10, 20, 30, 50, 15]
          }
        ]
      }
    })
    return {
      openDialog,
      submit,
      dialogRef,
      qrCanvasData,
      fromData,
      rules,
      heighChartsData
    }
  }
}
</script>

<style lang="scss">
.custom-form {
  margin-top: 20px;
}
</style>
