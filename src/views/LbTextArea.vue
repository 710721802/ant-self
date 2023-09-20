<!--
 * @Author: Coco wangkk4@lenovo.com
 * @Date: 2022-11-17 10:16:58
 * @LastEditors: luxiyuan
 * @LastEditTime: 2022-11-21 14:08:15
 * @FilePath: \lenovo-brain-design\src\views\LbTextArea.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="comps-usage-container">
    <a-row :gutter="32">
      <a-col :span="12">
        <a-card>
          <h4>Textarea 组件111</h4>
          <l-textarea v-model="value"></l-textarea>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <h4>Textarea 组件222</h4>
          <l-textarea v-model="value"></l-textarea>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  const value = ref<string>('测试');
  
</script>