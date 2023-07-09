<template>
  <el-row class="tac">
    <el-menu>
      <el-sub-menu index="1">
        <template #title>
          <el-icon><Location /></el-icon>
          <span>仪表盘</span>
        </template>
        <el-menu-item index="1-1">工作台</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><icon-menu /></el-icon>
          <span>数据可视化</span>
        </template>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon><Document /></el-icon>
          <span>列表页</span>
        </template>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>
          <el-icon><Memo /></el-icon>
          <span>表单页</span>
        </template>
      </el-sub-menu>
      <el-sub-menu index="5">
        <template #title>
          <el-icon><Tickets /></el-icon>
          <span>详情页</span>
        </template>
      </el-sub-menu>
      <el-sub-menu index="6">
        <template #title>
          <el-icon><CircleCheck /></el-icon>
          <span>结果页</span>
        </template>
      </el-sub-menu>
      <el-sub-menu index="7">
        <template #title>
          <el-icon><Warning /></el-icon>
          <span>异常页</span>
        </template>
      </el-sub-menu>
      <el-sub-menu index="8">
        <template #title>
          <el-icon><User /></el-icon>
          <span>个人中心</span>
        </template>
      </el-sub-menu>
    </el-menu>
  </el-row>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Memo,
  Tickets,
  CircleCheck,
  Warning,
  User
} from '@element-plus/icons-vue'
</script>
