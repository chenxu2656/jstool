<template>
    <div id="con">
        <div id="timeStampToTime" class="funcs">
            <div class="tit">时间戳转时间</div>
            <div class="funcSpace">
                <el-input v-model="timeStampInput" placeholder="时间戳" class="timeInput"></el-input>
                <el-select v-model="selectedOption" placeholder="请选择时间单位" class="optionSelect">
                    <el-option label="秒" value="秒"></el-option>
                    <el-option label="毫秒" value="毫秒"></el-option>
                </el-select>
                <el-button type="primary" class="convertButton" color="#2d3d52" @click="t2st"> 转换</el-button>
                <el-input v-model="timeOutput" placeholder="时间" class="timeOutput"></el-input>
            </div>
        </div>
        <div id="timeStampToTime" class="funcs">
            <div class="tit">时间转时间戳</div>
            <div class="funcSpace">
                <el-input v-model="timeInput" placeholder="时间" class="timeInput"></el-input>

                <el-button type="primary" class="convertButton" color="#2d3d52" @click="st2t"> 转换</el-button>
                <el-input v-model="timeStampOutput" placeholder="时间戳" class="timeOutput"></el-input>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
#con {
    width: 100%;
    margin: auto;

    .funcs {
        margin-bottom: 40px;

        .tit {
            font-size: 25px;
            text-align: left;
            font-weight: 600;
        }

        .funcSpace {
            margin-top: 20px;
            display: flex;

            .timeInput {
                width: 200px;
            }

            .optionSelect {
                width: 80px;
                margin-left: 20px;
            }

            .convertButton {
                margin-left: 20px;
            }

            .timeOutput {
                width: 200px;
                margin-left: 20px;
            }
        }
    }
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
const timeStampInput = ref('')
const timeOutput = ref('')
const timeStampOutput = ref('')
const timeInput = ref('')
const selectedOption = ref('秒')
const timestampToTime_Seconds = (timestamp) => {
    // 将时间戳转换为日期对象
    const date = new Date(timestamp * 1000);
    // 获取日期、时间部分
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    // 返回格式化后的日期字符串
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

const timestampToTime_Milliseconds = (timestamp) => {
    // 将时间戳转换为日期对象
    const date = new Date(+timestamp);

    // 获取日期、时间部分
    const year = date.getFullYear();
    console.log(year);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const milliseconds = date.getMilliseconds().toString().padStart(3, '0');

    // 返回格式化后的日期字符串
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
}
const timeToTimestamp = (timeString)=>{
  // 将时间字符串转换为日期对象
  const date = new Date(timeString);

  // 将日期对象转换为时间戳（精确到秒）
  const timestamp = Math.floor(date.getTime() / 1000);

  return timestamp;
}

const t2st = () => {
    if (!timeStampInput.value) {
        return
    }
    if (selectedOption.value == '秒') {
        timeOutput.value = timestampToTime_Seconds(timeStampInput.value)
        return
    } else {
        timeOutput.value = timestampToTime_Milliseconds(timeStampInput.value)
    }
}
const st2t = ()=>{
    if (!timeInput.value) {
        return
    }
    timeStampOutput.value =  timeToTimestamp(timeInput.value)
}
onMounted(() => {
    const now = new Date();
    const year = now.getFullYear();      // 年份
    const month = now.getMonth() + 1;    // 月份（从0开始计数，因此需要+1）
    const day = now.getDate();           // 日期
    const hour = now.getHours();         // 小时
    const minute = now.getMinutes();     // 分钟
    timeInput.value = `${year}-${month}-${day} ${hour}:${minute}:00`
})
</script>