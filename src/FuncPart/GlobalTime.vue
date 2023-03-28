<template>
  <div class="container">
    <div v-for="(timezone, index) in timezones" :key="index" class="timezone">
      <div class="timezone-name">{{ timezone.name }}</div>
      <div class="timezone-time">{{ timezone.time }}</div>
      <el-button class="copy-btn" size="small" type="primary" @click="copyTime(timezone.time)">
        复制时间
      </el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ElButton } from 'element-plus'

const timezones = ref([
  { name: '中国', timezone: 'Asia/Shanghai', time: 'loading...' },
  { name: '美国', timezone: 'America/New_York', time: 'loading...' },
  { name: '英国', timezone: 'Europe/London', time: 'loading...' },
  { name: '日本', timezone: 'Asia/Tokyo', time: 'loading...' }
])

const updateTime = () => {
  const now = new Date()
  timezones.value.forEach(timezone => {
    timezone.time = now.toLocaleString('zh-CN', { timeZone: timezone.timezone })
  })
}

const copyTime = (time) => {
  navigator.clipboard.writeText(time).then(() => {
    console.log('时间已复制')
  }, () => {
    console.error('时间复制失败')
  })
}

onMounted(() => {
  setInterval(updateTime, 1000)
})

</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .timezone {
  display: flex;
  width: 23%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  background-color: #405368;
  padding: 20px 10px;
  color: white;
  border-radius: 6px;
  .timezone-name {
  font-size: 24px;
  font-weight: 500;
}
.timezone-time {
  font-weight: 500;
  font-size: 24px;
}

.copy-btn {
  margin-top: 10px;
}
}




}


</style>
