<template>
  <div class="comps-usage-container">
    <a-row :gutter="32">
      <a-col :span="12">
        <a-card>
          <h4>基本用法</h4>
          <l-cascader v-model:value="value" :options="options" placeholder="Please select" />
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <h4>禁用</h4>
          <l-cascader v-model:value="value" :options="options1" placeholder="Please select" />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  
  const value = ref()
  const options = ref([
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ]);
  const options1 = ref([
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      disabled: true,
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ]);
</script>
