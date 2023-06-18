<template>
  <GeneralDialog v-model="visible" :title="title">
    <!-- 搜索框 -->
    <div>
      <input type="text" placeholder="占位搜索框..." />
    </div>
    <!--tab 栏 -->
    <div class="tab">
      <div class="tab_list">
        <div
          v-for="value in tabList"
          :key="value"
          class="tab_item"
          :class="{ active: value === activeTab }"
          @click="changeTabItem(value)"
        >
          {{ tabListLabel[value] }}
        </div>
      </div>
      <div class="tips">0条与“搜索”相关的{{ tabListTips[activeTab] }}</div>
    </div>
    <!-- 内容展示区 -->
    <keep-alive>
      <div></div>
    </keep-alive>
  </GeneralDialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { GeneralDialog } from '@/components/Dialog'

import { tabList, tabListLabel, tabListTips } from './enum'

const title = ref('历史记录')
const visible = ref(false)

const activeTab = ref(0)

const show = () => {
  visible.value = true
}

const close = () => {
  visible.value = false
}

const changeTabItem = (item: number) => {
  activeTab.value = item
}

// eslint-disable-next-line no-undef
defineExpose({
  show
})
</script>

<style lang="scss" scoped>
.tab {
  user-select: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 10px;
  .tab_list {
    display: flex;
    margin: 15px 40px;
    justify-content: space-between;
    .tab_item {
      &.active {
        color: #00cc66;
        position: relative;
        &::after {
          content: '';
          display: inline-block;
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #00cc66;
        }
      }
    }
  }
}
.tips {
  font-size: 12px;
  text-align: center;
  color: #999;
}
</style>
