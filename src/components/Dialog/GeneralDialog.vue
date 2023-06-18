<!-- 通用弹窗 -->
<template>
  <Teleport v-if="modelValue" to="body">
    <div class="dialog_box">
      <div class="dialog_head">
        <!-- 弹窗名称 -->
        <div class="dialog_title">
          <slot name="title">
            <span>{{ title }}</span>
          </slot>
        </div>
        <!-- 操作按钮 #TODO 这个或许可以拆出去，用的地方可能很多 -->
        <div class="dialog_handle">
          <!-- #TODO title 需要换下？ -->
          <div class="dialog_close" title="关闭" @click="close">
            <img src="Dialog/close_black.png" alt="关闭" />
          </div>
        </div>
      </div>
      <div class="dialog_content">
        <!-- 内容 -->
        <slot>
          <span>暂无聊天记录...</span>
        </slot>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
// eslint-disable-next-line no-undef
defineProps({
  modelValue: {
    required: true,
    type: Boolean
  },
  title: {
    type: String
  }
})

// eslint-disable-next-line no-undef
const emit = defineEmits(['update:modelValue'])

const close = () => {
  emit('update:modelValue', false)
}
</script>

<style lang="scss" scoped>
.dialog_box {
  // 垂直居中对齐的盒子
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 0.3);
  border-radius: 2px;
  overflow: hidden;
  width: 300px;
  height: 500px;
  background: white;
  .dialog_head {
    display: flex;
    // 不允许选中文字
    user-select: none;
    .dialog_title {
      padding: 5px;
      color: #555;
      font-size: 14px;
    }
    .dialog_handle {
      display: flex;
      margin-left: auto;
      .dialog_close {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        padding: 3px;
        overflow: hidden;
        cursor: pointer;
        &:hover {
          background-color: #ff6666;
          img {
            // #TODO 换成别的引入，或者换成 svg
            content: url('../../../public/Dialog/close_white.png');
          }
        }
        img {
          width: 10px;
          height: 10px;
        }
      }
    }
  }
}
</style>
