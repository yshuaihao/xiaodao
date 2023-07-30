<template>
  <el-row class="tac">
    <el-col :span="16">
      <el-menu
        :uniqueOpened="true"
        :default-active="activeMenu"
        class="el-menu-vertical-demo"
        router
      >
        <el-sub-menu v-for="item in routes" :index="item.path" :key="item.path">
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{ item.meta.title }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="child in item.children" :index="item.path" :key="child.path">
              {{ child.meta.title }}
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'

const router = useRouter()
// console.log(router.getRoutes())

const activeMenu = computed(() => {
  const { path } = router.currentRoute.value
  return path
})

const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})
// console.log('routes=', JSON.stringify(routes.value))
</script>
