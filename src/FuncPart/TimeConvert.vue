<template>
    <div id="con">

        <div id="timeStampToTime" class="funcs">
            <div class="tit">国际时间转换器</div>
            <div class="funcSpace">
                <el-select v-model="form.countryA" placeholder="请选择国家1"  class="item1">
                    <el-option v-for="country in countries" :key="country.code" :label="country.name"
                        :value="country.code"></el-option>
                </el-select>
                <el-date-picker type="datetime" v-model="form.dateA" placeholder="请选择时间" class="item1"></el-date-picker>
                <el-select v-model="form.countryB" placeholder="请选择国家2" class="country2">
                    <el-option v-for="country in countries" :key="country.code" :label="country.name"
                        :value="country.code"></el-option>
                </el-select>
                <el-button type="primary" class="convertButton" color="#2d3d52" @click="convertTime()" > 转换</el-button>
                <el-input v-model="result" placeholder="时间" class="timeOutput"></el-input>
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
            .item1 {
                margin-right: 20px;
            }
            .country2 {
                margin-left: 20px;
            }

        }
    }
}
</style>
<script setup>
import { ref } from 'vue';
import countriesData from '../../public/country.json';
const form = ref({
    countryA: '',
    dateA: '',
    countryB: ''
});
const countries = ref(countriesData);
const result = ref('');

const convertTime = () => {
    const timeA = new Date(form.value.dateA);
    const timeB = new Date(timeA.toLocaleString('en-US', { timeZone: getCountryTimezone(form.value.countryB) }));
    result.value = timeB.toLocaleString('zh-CN', { timeZone: getCountryTimezone(form.value.countryB) });
};

const getCountryTimezone = (countryCode) => {
    const country = countries.value.find(c => c.code === countryCode);
    return country.timezone;
};

</script>
  