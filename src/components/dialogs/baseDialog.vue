<template>
  <el-dialog
    v-model="visible"
    :title="title"
    :width="width"
    :top="top"
    :custom-class="customClass"
    :show-close="showClose"
    :close-on-click-modal="closeOnClickModal"
    @closed="handleClosed"
  >
    <slot>
      <component :is="resolvedComponent" v-bind="componentProps" ref="contentRef" />
    </slot>
    <template v-if="showFooter" #footer>
      <slot name="footer">
        <el-button
          v-for="(btn, index) in buttons"
          :key="index"
          :type="btn.type || 'primary'"
          :loading="btn.loading"
          @click="handleButtonClick(btn)"
        >
          {{ btn.text }}
        </el-button>
      </slot>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, computed, type Component, type PropType, resolveComponent } from "vue"
import type { DialogButton } from "@/types"
import { log } from "node:console"
const curName = ref("wallpaperSetting")
const props = defineProps({
  title: {
    type: String,
    default: "提示",
  },
  width: {
    type: [String, Number],
    default: "50%",
  },
  top: {
    type: String,
    default: "15vh",
  },
  content: {
    type: [String, Object] as PropType<string | Component>,
    required: true,
  },
  componentProps: {
    type: Object,
    default: () => ({}),
  },
  buttons: {
    type: Array as PropType<DialogButton[]>,
    default: () => [],
  },
  showFooter: {
    type: Boolean,
    default: true,
  },
  showClose: {
    type: Boolean,
    default: true,
  },
  closeOnClickModal: {
    type: Boolean,
    default: true,
  },
  customClass: {
    type: String,
    default: "",
  },
})

const emit = defineEmits(["open", "close", "confirm", "cancel"])

const visible = ref(true)
// const contentRef = ref<InstanceType<Component>>()

// 解析动态组件
// 修改后的解析逻辑
const resolvedComponent = computed<Component | null>(() => {
  if (!props.content) return null
  try {
    // 处理字符串类型的组件名
    if (typeof props.content === 'string') {
      const resolved = resolveComponent(props.content)
      console.log('resolvedComponent:', resolved);
      
      // 类型保护：确保返回的是组件对象
      if (typeof resolved === 'string') {
        throw new Error(`Component "${props.content}" not found`)
      }
      return resolved as Component
    }
    // 直接传入组件对象的情况
    return props.content
  } catch (error) {
    console.error('组件解析失败:', error)
    return null
  }
})
const open = () => {
  console.log("open");
  visible.value = true
  emit("open")
}

const close = () => {
  visible.value = false
  emit("close")
}

const handleClosed = () => {
  emit("cancel")
}

const handleButtonClick = async (btn: DialogButton) => {
  if (!btn.handler) return
  try {
    const result = await btn.handler()
    if (result !== false) {
      close()
      emit("confirm")
    }
  } catch (error) {
    console.error("Dialog action error:", error)
  }
}

defineExpose({
  open,
  close,
  // getContentRef: () => contentRef.value,
})
</script>

<style scoped>
/* 自定义样式 */
:deep(.el-dialog__body) {
  max-height: 70vh;
  overflow-y: auto;
  padding: 20px;
}

:deep(.el-dialog__footer) {
  padding: 20px;
  text-align: right;
}
</style>