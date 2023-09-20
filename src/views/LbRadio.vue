<!--
 * @Author: Coco wangkk4@lenovo.com
 * @Date: 2022-11-28 09:57:06
 * @LastEditors: Coco wangkk4@lenovo.com
 * @LastEditTime: 2022-11-28 10:59:20
 * @FilePath: /lenovo-brain-design/src/views/LbRadio.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="comps-usage-container">
    <a-row :gutter="32">

      <a-col :span="12">
        <a-card>
          <h4>默认</h4>
          <a-radio v-model:checked="checked">备选项</a-radio>
          <a-radio v-model:checked="checkedA">已选项</a-radio>
          <a-radio v-model:checked="checkedB">悬浮备选项</a-radio>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <h4>禁用</h4>
          <a-radio v-model:checked="checked1" :disabled="disabled">禁用</a-radio>
          <a-radio v-model:checked="checked2" :disabled="disabled">禁用已选</a-radio>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <h4>按钮样式</h4>
          <a-radio-group v-model:value="value1">
            <a-radio-button value="a">Hangzhou HAHA</a-radio-button>
            <a-radio-button value="b">Shanghai</a-radio-button>
            <a-radio-button value="c">Beijing</a-radio-button>
            <a-radio-button value="d">Chengdu</a-radio-button>
          </a-radio-group>
        </a-card>
      </a-col>

    </a-row>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';

  const checked = ref<boolean>(false);
  const checkedA = ref<boolean>(false);
  const checkedB = ref<boolean>(false);
  
  const disabled = ref<boolean>(true);
  const checked1 = ref<boolean>(false);
  const checked2 = ref<boolean>(true);

  const value1 = ref<string>('a');
  

</script>
<style lang="less">
  
</style>