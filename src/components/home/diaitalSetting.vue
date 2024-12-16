<template>
  <div class="diaital-setting">
    <div class="user-info">
      <div class="user-info__avater">
        <img src="../../assets/images/default_avater.png" alt="degault avater" />
      </div>
      <div class="user-info__detail">
        <div class="name">帅哥</div>
        <div class="tip">我命油我不油天</div>
      </div>
    </div>
    <div class="setting-warp">
      <el-tabs :tab-position="tabPosition" class="setting-tabs">
        <el-tab-pane v-for="(item, index) in tabList" :key="index" :label="item.label">
          {{ item.label }}
          <div @click="handleSetting">设置壁纸</div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>

  <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="500"
    :before-close="handleClose"
  >
    <span>This is a message</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue"
import type { TabsInstance } from "element-plus"
interface TabItem {
  label: string
  icon: string
  active: boolean
}

const tabPosition = ref<TabsInstance["tabPosition"]>("left")
const tabList = ref<TabItem[]>([
  { label: "主题", icon: "el-icon-s-home", active: true },
  { label: "壁纸", icon: "el-icon-s-home", active: true },
])

const handleSetting = () => {}
</script>
