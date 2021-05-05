<template>
  <el-dialog
    :title="title"
    :width="width"
    :custom-class="customClass"
    :before-close="beforeClose"
    append-to-body
    v-model="showDialog"
  >
    <slot name="body">
      <i class="icon-default el-icon-warning"></i>
      这是Dialog
    </slot>
    <!-- 底部按钮组 -->
    <template #footer>
      <slot name="btn">
        <div v-if="showBtn">
          <el-button v-if="showCloseBtn" @click="showDialog = false">取 消</el-button>
          <el-button v-if="showSubimtBtn" type="primary" @click="clickSubmit">确 定</el-button>
        </div>
      </slot>
    </template>
  </el-dialog>
</template>

<script>
// 父子件绑定 ref 给 showDialog 传值 Boolean 显示对话框
import { ref } from 'vue'
export default {
  name: 'Dialog',
  emits: ['before-close', 'click-submit'],
  props: {
    title: {
      type: String,
      default: '提示'
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: '400px'
    },
    customClass: {
      type: String
    },
    showBtn: {
      type: Boolean,
      default: true
    },
    showCloseBtn: {
      type: Boolean,
      default: true
    },
    showSubimtBtn: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    const showDialog = ref(false)
    // 订阅关闭回调方法
    const beforeClose = done => {
      done()
      // context.emit('before-close', done)
    }

    // 订阅确定按钮事件
    const clickSubmit = () => {
      context.emit('click-submit')
    }
    return {
      beforeClose,
      clickSubmit,
      showDialog
    }
  }
}
</script>

<style lang="scss">
// $gray-desc: #999;
.icon-default {
  font-size: 22px;
  vertical-align: middle !important;
  color: $gray-desc;
}
</style>
