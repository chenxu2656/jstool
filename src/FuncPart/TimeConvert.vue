<template>
    <div>
      <h2>国际时间转换器</h2>
      <el-form :model="form" label-width="80px" style="margin-bottom: 20px;">
        <el-form-item label="选择国家A">
          <el-select v-model="form.countryA" placeholder="请选择">
            <el-option v-for="country in countries" :key="country.code" :label="country.name" :value="country.code"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择时间A">
          <el-date-picker type="datetime" v-model="form.dateA" placeholder="请选择时间"></el-date-picker>
        </el-form-item>
        <el-form-item label="选择国家B">
          <el-select v-model="form.countryB" placeholder="请选择">
            <el-option v-for="country in countries" :key="country.code" :label="country.name" :value="country.code"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="convertTime">转换</el-button>
        </el-form-item>
      </el-form>
      <div v-if="result">
        <p>{{ form.countryA }} 时间：{{ form.dateA }}</p>
        <p>{{ form.countryB }} 对应时间：{{ result }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { ElSelect, ElOption, ElForm, ElFormItem, ElButton, ElDatePicker } from 'element-plus';
  import countriesData from '../../public/country.json';
  
  export default {
    components: {
      ElSelect,
      ElOption,
      ElForm,
      ElFormItem,
      ElButton,
      ElDatePicker
    },
    setup() {
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
  
      return {
        form,
        countries,
        result,
        convertTime,
        getCountryTimezone
      };
    }
  };
  </script>
  