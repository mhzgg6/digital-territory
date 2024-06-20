<template>
  <div class="diaital-date">
    <div class="diaital-date-warp">
      <div class="time">
        <time>{{ curHour }}</time>
        <span>:</span>
        <time>{{ curMinute }}</time>
        <span>:</span>
        <time>{{ curSeconds }}</time>
      </div>
      <div class="date">2024年6月20日</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue"

let curHour = ref<string>("")
let curMinute = ref<string>("")
let curSeconds = ref<string>("")

let timer: any = null

onMounted(() => {
  getNowTime()
  timer = setInterval(getNowTime, 1000)
})

onBeforeUnmount(() => {
  timer = null
  clearInterval(timer)
})

const getNowTime = () => {
  const date: Date = new Date()
  curHour.value = getHour(date)
  curMinute.value = getMinute(date)
  curSeconds.value = getSeconds(date)
}

const getHour = (date: Date): string => {
  return date.getHours() >= 10 ? date.getHours().toString() : `0${date.getHours()}`
}

const getMinute = (date: Date): string => {
  return date.getMinutes() >= 10 ? date.getMinutes().toString() : `0${date.getMinutes()}`
}

const getSeconds = (date: Date): string => {
  return date.getSeconds() >= 10 ? date.getSeconds().toString() : `0${date.getSeconds()}`
}
</script>
