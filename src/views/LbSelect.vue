<template>
    <div class="comps-usage-container">
      <a-row :gutter="32">
        <a-col :span="12">
          <a-card>
            <h4>默认</h4>
            <l-select 
              :allowClear="true"
              >
                <l-select-option value="jack">Jack</l-select-option>
                <l-select-option value="lucy">Lucy</l-select-option>
                <l-select-option value="disabled" disabled>Disabled</l-select-option>
            </l-select>
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card>
            <h4>带有Label</h4>
            <l-select 
              :allowClear="true"
              :fontMaxSize="4"
              :labelText="labelText"
              :style="{'width': '150px'}"
              >
                <l-select-option value="jack">Jack</l-select-option>
                <l-select-option value="lucy">Lucy</l-select-option>
                <l-select-option value="disabled" disabled>Disabled</l-select-option>
            </l-select>
          </a-card>
        </a-col>
      </a-row>
      <a-row :gutter="32">
        <a-col :span="12">
          <a-card>
            <h4>自定义宽度</h4>
            <l-select 
              :allowClear="true"
              :selectStyle="{'width': '200px'}"
              >
                <l-select-option value="jack">Jack</l-select-option>
                <l-select-option value="lucy">Lucy</l-select-option>
                <l-select-option value="disabled" disabled>Disabled</l-select-option>
            </l-select>
            <div class="divide"></div>
            <l-select 
              :allowClear="true"
              :selectStyle="{'width': '400px'}"
              >
                <l-select-option value="jack">Jack</l-select-option>
                <l-select-option value="lucy">Lucy</l-select-option>
                <l-select-option value="disabled" disabled>Disabled</l-select-option>
            </l-select>
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card>
            <h4>插槽支持</h4>
            <l-select 
              :allowClear="true"
              :selectStyle="{'width': '200px'}"
              >
                <template #notFoundContent>
                  这是没有选项时：notFoundContent插槽
                </template>
            </l-select>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </template>
  <script setup lang="ts">
    import { ref } from 'vue';
    
    const labelText = ref<string>('默认四字')
  
  </script>
  <style lang="less" scoped>
    @import '../assets/css/common.less';
    .divide {
      margin: 10px 0;
    }
  </style>