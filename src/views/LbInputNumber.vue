<!--
 * @Author: Coco wangkk4@lenovo.com
 * @Date: 2022-11-17 10:16:58
 * @LastEditors: Coco wangkk4@lenovo.com
 * @LastEditTime: 2023-02-03 16:48:54
 * @FilePath: /lenovo-brain-design/src/views/LbInputNumber.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="comps-usage-container">
    <a-row :gutter="32">
      <a-col :span="12">
        <a-card>
          <h4>默认</h4>
          <l-input-number v-model="num" :width="260"></l-input-number>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <h4>禁用</h4>
          <l-input-number v-model="num" :disabled="true"></l-input-number>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <h4>最大/最小值</h4>
          <l-input-number :max="8" :min="-2" v-model="num"></l-input-number>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <h4>自定义步数</h4>
          <l-input-number :step="2.1" v-model="num"></l-input-number>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <h4>三种尺寸</h4>
          <l-input-number :size="'large'" v-model="num"></l-input-number>
          <p></p>

          <l-input-number v-model="num"></l-input-number>
          <p></p>
          
          <l-input-number :size="'small'" v-model="num"></l-input-number>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <h4>小数</h4>
          <l-input-number v-model="floatNum" :min="0" :max="10" :step="0.1"></l-input-number>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <h4>格式化展示</h4>
          <l-input-number 
            v-model="value1"
            :formatter="(value: number | string) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
            :parser="(value: string) => value.replace(/\$\s?|(,*)/g, '')"
          ></l-input-number>

          <p></p>
          <l-input-number
            v-model="value2"
            :min="0"
            :max="100"
            :formatter="(value: number | string) => `${value}%`"
            :parser="(value: string) => value.replace('%', '')"
          ></l-input-number>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';

  const num = ref(2);
  const floatNum = ref(0);

  const value1 = ref<number>(1000);
  const value2 = ref<number>(100);
  
</script>