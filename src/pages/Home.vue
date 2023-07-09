<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="container__left">
        <Sidebar />
      </div>
      <div class="container__right">
        <Content />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar/index.vue'
import Content from './components/Content.vue'
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;

  &__left {
    width: 300px;
  }

  &__right {
    flex: 1;
  }
}
</style>
