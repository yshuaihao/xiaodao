<template>
  <div class="container">
    <el-form ref="formRef" :model="dynamicValidateForm" label-width="120px" class="demo-dynamic">
      <el-form-item
        prop="username"
        label="username"
        :rules="[
          {
            required: true
          }
        ]"
      >
        <el-input v-model="dynamicValidateForm.username" />
      </el-form-item>
      <el-form-item
        prop="password"
        label="password"
        :rules="[
          {
            required: true
          }
        ]"
      >
        <el-input type="password" v-model="dynamicValidateForm.password" />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          style="width: 100%; margin-bottom: 30px"
          @click="submitForm(formRef)"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

interface DomainItem {
  key: number
  value: string
}

const formRef = ref<FormInstance>()
const dynamicValidateForm = reactive<{
  domains: DomainItem[]
  username: string
  password: string
}>({
  domains: [
    {
      key: 1,
      value: ''
    }
  ],
  username: '',
  password: ''
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>

<style lang="scss" scoped>
.container {
  width: 500px;
  position: absolute;
  left: 30%;
  top: 30%;
}
</style>
