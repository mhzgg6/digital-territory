<template>
  <div class="diaital-header">
    <div class="diaital-header-warp">
      <!-- <div v-html="captcha && captcha.data"></div> -->
      <div @click="handleToggleTheme">主题切换</div>
      <div @click="openDialog">设置</div>
    </div>
    <el-dialog v-model="dialogFormVisible" :append-to-body="true" title="Shipping address" width="500">
      <el-form :model="form">
        <el-row>
          <el-col>
            <el-form-item label="用户名" :label-width="formLabelWidth">
              <el-input v-model="form.username" autocomplete="off" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="密码" :label-width="formLabelWidth">
              <el-input v-model="form.password" autocomplete="off" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16">
            <el-form-item label="验证码" :label-width="formLabelWidth">
              <el-input v-model="form.code" autocomplete="off" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <div v-dompurify-html="captcha && captcha.data"></div>
          </el-col>
        </el-row>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="handleLogin">登录</el-button>
          <el-button type="primary" @click="handleRegister">注册</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from "vue"
import request from "@/api/index"
import { encrypt } from "@/utils/crypto"
import { getTheme, toggleTheme } from "@/utils/themeGlobalSetting"

interface Captcha {
  data: string
  text: string
}
interface Form {
  username: string
  password: string
  code: string
}
const captcha = ref<Captcha | null>(null)
const dialogFormVisible = ref(false)
const formLabelWidth = "140px"

const form = reactive<Form>({
  username: "",
  password: "",
  code: "",
})

onMounted(() => {
  // getCaptcha()
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
const openDialog = () => {
  getCaptcha()  
  dialogFormVisible.value = true
  // request.post("/api/user/register", { username: "mhz", password: "123456" }).then(() => {})
}

const handleRegister = () => {
  request.post("/api/user/register", { username: "mhz", password: "123456" }).then(() => {})
}
const handleLogin = () => {
  const data = { ...form, password: encrypt(form.password) }
  request.post("/api/user/login", { ...data }).then(() => {})
}
</script>
