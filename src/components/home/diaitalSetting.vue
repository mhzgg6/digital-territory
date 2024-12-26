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
        <el-tab-pane v-for="(item, index) in tabList" :key="index" :label="item.label" @click="handleSetting">
          {{ item.label }}
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import type { TabsInstance } from "element-plus"
import ThemeDialog from "../dialogs/themeDialog.vue"

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

// const handleClose = () => {}
// const handleConfirm = () => {}
const handleSetting = () => {
  mhz.openDialog({
    title: "设置",
    width: "80%",
    height: "50%",
    content: "dialogs/themeDialog",
    btns: [
      {
        text: "确定",
      },
    ],
  })
}
</script>

<style lang="scss" scoped>
:deep(.didital-setting__dialog) {
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.6);
}
:deep(.didital-setting__header) {
  display: flex;
}
// .didital-setting__header-close {
//   width: 20px;
//   height: 20px;
// }
.didital-setting__content {
  height: 600px;
}
</style>
