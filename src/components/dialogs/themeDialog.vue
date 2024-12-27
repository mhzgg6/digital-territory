<template>
  <div class="theme-dialog">
    <div class="theme-dialog__left">
      <div v-for="item in menuList" :key="item.name" class="theme-dialog__left-item">
        {{ item.name }}
      </div>
    </div>
    <div class="theme-dialog__right">

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const menuList = ref([
  {
    name: "主题",
    active: true,
  },
  {
    name: "背景",
    active: false,
  },
])
</script>

<style lang="scss" scoped>
.theme-dialog {
  box-sizing: border-box;
  display: flex;
  height: 100%;
  padding: 20px;
  &__left {
    box-sizing: border-box;
    width: 200px;
    height: 100%;
    border: 1px solid #f4f4f7;
    // background-color: #f0f1f4;
  }
  &__right {
    flex: 1;
  }
}
</style>
