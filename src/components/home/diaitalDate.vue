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

let curHour: string = ref("")
let curMinute: string = ref("")
let curSeconds: string = ref("")

let timer: Node.Timer | null = ref(null)

onMounted(() => {
  getNowTime()
  timer.value = setInterval(getNowTime, 1000)
})

onBeforeUnmount(() => {
  timer.value = null
  clearInterval(timer.value)
})

const getNowTime = () => {
  const date: string = new Date()
  curHour.value = getHour(date)
  curMinute.value = getMinute(date)
  curSeconds.value = getSeconds(date)
}

const getHour = (date: string): string => {
  return date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`
}

const getMinute = (date: string): string => {
  return date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`
}

const getSeconds = (date: string): string => {
  return date.getSeconds() >= 10 ? date.getSeconds() : `0${date.getSeconds()}`
}
</script>
