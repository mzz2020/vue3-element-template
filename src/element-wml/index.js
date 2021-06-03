// 弹框组件
import Dialog from './Dialog.vue'
// 表单组件
import CustomForm from './CustomForm.vue'
import CustomFormInput from './CustomFormInput.vue'
// highCharts 图表组件
import highchartsView from './highchartsView.vue'
// 二维码组件
import Qrcanvas from './Qrcanvas.vue'
// tinymce冨文本
import Tinymce from './Tinymce.vue'
// svg
import CustomSvg from './CustomSvg.vue'

// 单个导出
export const _default = {
  Dialog,
  CustomForm,
  CustomFormInput,
  highchartsView,
  Qrcanvas,
  Tinymce,
  svg: CustomSvg
}
// 全局导出
export default {
  install(vue) {
    Object.keys(_default).map(name => {
      vue.component(`ml-${name.toLowerCase()}`, _default[name])
    })
  }
}
