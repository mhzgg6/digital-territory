<template>
  <base-dialog v-model="visible" v-bind="dialogOptions" @close="handleClose">
    <template #header>
      <div class="custom-header">
        {{ title }}
      </div>
    </template>
    <div class="content">
      <!-- 你的内容 -->
    </div>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="visible = false">取消</el-button>
        <el-button type="primary" @click="handleConfirm">确认</el-button>
      </div>
    </template>
  </base-dialog>
</template>

<script setup lang="ts">
import { computed, withDefaults, defineProps } from "vue"
import type { DialogConfig } from "@/types"

interface Props {
  modelValue: boolean
  type?: keyof typeof dialogConfig
  title?: string
}
const dialogConfig: DialogConfig = {
  basic: {
    dialogVisible: false,
    title: "标题",
    width: "60%",
    closeOnClickModal: true,
    closeOnPressEscape: true,
    showClose: true,
    destroyOnClose: false,
    dialogClass: "",
  },
}

const props = withDefaults(defineProps<Props>(), {
  type: "basic",
  title: "",
})

const emit = defineEmits(["update:modelValue", "close", "confirm"])

const visible = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
})
const dialogOptions = computed(() => ({
  ...dialogConfig[props.type],
  title: props.title,
}))

const handleClose = () => {
  emit("close")
}

const handleConfirm = () => {
  emit("confirm")
  visible.value = false
}
</script>
