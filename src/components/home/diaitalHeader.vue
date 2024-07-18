<template>
  <div class="diaital-header">
    <div class="diaital-header-warp">
      <!-- <div v-html="captcha && captcha.data"></div> -->
      <div @click="handleToggleTheme">主题切换</div>
      <div @click="handleRegister">设置</div>
    </div>
  </div>
  <el-dialog v-model="dialogFormVisible" :append-to-body="true" title="Shipping address" width="500">
    <el-form :model="form">
      <el-form-item label="用户名" :label-width="formLabelWidth">
        <el-input v-model="form.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" :label-width="formLabelWidth">
        <el-input v-model="form.password" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from "vue"
import request from "@/api/index"
import { getTheme, toggleTheme } from "@/utils/themeGlobalSetting"

interface Captcha {
  data: string
  text: string
}
interface Form {
  username: string
  password: string
}
const captcha = ref<Captcha | null>(null)
const dialogFormVisible = ref(false)
const formLabelWidth = "140px"

const form = reactive<Form>({
  username: "",
  password: "",
})

onMounted(() => {
  getCaptcha()
})
const handleToggleTheme = () => {
  const theme = getTheme()
  toggleTheme(theme, "blue-theme")
}

const getCaptcha = () => {
  request.get("/api/user/captcha").then((res) => {
    captcha.value = res.data
  })
}
const handleRegister = () => {
  dialogFormVisible.value = true
  // request.post("/api/user/register", { username: "mhz", password: "123456" }).then(() => {})
}
</script>
