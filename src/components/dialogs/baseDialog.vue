<template>
  <el-dialog
    v-model="dialogVisible"
    :title="title"
    :width="width"
    :class="dialogClass"
    :show-close="showClose"
    :append-to-body="appendToBody"
    :full-screen="fullscreen"
    :destroy-on-close="destroyOnClose"
    :close-on-click-modal="closeOnClickModal"
    :close-on-press-escape="closeOnPressEscape"
    :before-close="handleClose"
  >
    <template v-if="$slots.header" #header>
      <slot name="header"></slot>
    </template>

    <slot>1</slot>

    <template v-if="$slots.footer" #footer>
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from "vue"

interface DialogProps {
  dialogVisible: boolean
  title?: string
  width?: string
  height?: string
  showClose?: boolean
  fullscreen?: boolean
  dialogClass?: string
  appendToBody?: boolean
  destroyOnClose?: boolean
  closeOnClickModal?: boolean
  closeOnPressEscape?: boolean
}

const props = withDefaults(defineProps<DialogProps>(), {
  title: "",
  width: "65%",
  height: "60%",
  showClose: true,
  fullscreen: false,
  dialogClass: "",
  appendToBody: true,
  destroyOnClose: false,
  closeOnClickModal: true,
  closeOnPressEscape: true,
})

const emit = defineEmits(["update:modelValue", "close"])

const dialogVisible = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
})

const handleClose = (done: () => void) => {
  emit("close")
  done()
}
</script>
