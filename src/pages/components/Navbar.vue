<template>
  <header class="container">
    <div class="container__logo">
      <img src="favicon.ico" alt="" />
      <span>小岛管家后台</span>
    </div>
    <div class="container__select">
      <div class="container__select__icon">
        <el-icon><Search /></el-icon>
      </div>
      <div class="container__select__avatar">
        <el-avatar :size="35" src="https://empty">
          <img src="" alt="" />
        </el-avatar>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.container {
  height: 60px;
  border-bottom: 1px solid #ccc;

  &__logo {
    height: 60px;
    padding: 15px 0 15px 20px;
    box-sizing: border-box;

    img {
      height: 30px;
      margin-right: 20px;
      display: inline-block;
    }

    span {
      position: relative;
      font-size: 16px;
      top: -10px;
    }
  }

  &__select {
    position: absolute;
    right: 20px;
    display: flex;

    &__icon {
      font-size: 20px;
      margin-top: 17px;
      margin-right: 20px;
    }

    &__avatar {
      margin-top: 10px;
    }
  }
}
</style>
