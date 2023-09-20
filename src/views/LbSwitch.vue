<!--
 * @Author: Coco wangkk4@lenovo.com
 * @Date: 2023-02-07 14:47:59
 * @LastEditors: Coco wangkk4@lenovo.com
 * @LastEditTime: 2023-02-07 16:00:57
 * @FilePath: /lenovo-brain-design/src/views/LbSwitch.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="comps-usage-container">
    <a-row :gutter="32">
      <a-col :span="12">
        <a-card>
          <h4>Switch</h4>
          <a-switch v-model:checked="checked" />
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <h4>Switch</h4>
          <div>
            <a-switch v-model:checked="checked2" :disabled="isDisabled" />
          </div>
          <br>
          <div>
            <a-button type="primary" @click="isDisabled = !isDisabled">Toggle disabled</a-button>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  const checked = ref<boolean>(false);
  const checked2 = ref<boolean>(false);
  const isDisabled = ref<boolean>(false);
  
</script>