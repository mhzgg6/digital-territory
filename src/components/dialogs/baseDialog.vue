<template>
  <el-dialog
    v-model="dialogVisible"
    :title="title"
    :width="width"
    :modal="modal"
    :class="dialogClass"
    :show-close="showClose"
    :append-to-body="appendToBody"
    :full-screen="fullscreen"
    :destroy-on-close="destroyOnClose"
    :close-on-click-modal="closeOnClickModal"
    :close-on-press-escape="closeOnPressEscape"
    :before-close="handleClose"
  >
    <template #header="{ close, titleId, titleClass }">
      <div class="custom-header">
        <!-- <div class="custom-header__bg"></div> -->
        <div :id="titleId" class="custom-header__title" :class="titleClass">{{ title }}</div>
      </div>
    </template>

    <slot></slot>

    <template v-if="$slots.footer" #footer>
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue"

interface DialogProps {
  modelValue: boolean
  title?: string
  width?: string
  height?: string
  modal?: boolean
  showClose?: boolean
  fullscreen?: boolean
  dialogClass?: string
  appendToBody?: boolean
  destroyOnClose?: boolean
  closeOnClickModal?: boolean
  closeOnPressEscape?: boolean
}

const props = withDefaults(defineProps<DialogProps>(), {
  modelValue: false,
  title: "",
  width: "65%",
  height: "60%",
  modal: true,
  showClose: false,
  fullscreen: false,
  dialogClass: "basic-dialog",
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
const title = computed(() => props.title)
const handleClose = (done: () => void) => {
  emit("close")
  done()
}
</script>

<style lang="scss">
.basic-dialog {
  border-radius: 10px !important;
  // backdrop-filter: blur(10px);
  padding: 0 !important;
  background-color: rgba(255, 255, 255, 1) !important;
  // box-shadow:
  //   0 0.7px 1px rgba(0, 0, 0, 0.157),
  //   0 1.7px 2.6px rgba(0, 0, 0, 0.224),
  //   0 3.5px 5.3px rgba(0, 0, 0, 0.28);
  .el-dialog__header {
    border-radius: 10px 10px 0 0;
    .custom-header {
      padding: 10px 20px;
      // background-color: #fbfbfc;
      // border-bottom: 1px solid #f4f4f7;
      position: relative;
      &__bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("../../assets/images/custom-dialog-bg.png");
        background-size: 100% 100%;
        z-index: 0;
      }
    }
  }
  .el-dialog__body {
    height: 528px;
  }
}
</style>
