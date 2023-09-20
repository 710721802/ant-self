<!--
 * @Author: Coco wangkk4@lenovo.com
 * @Date: 2022-11-17 10:16:58
 * @LastEditors: luxiyuan
 * @LastEditTime: 2022-12-08 15:41:06
 * @FilePath: \lenovo-brain-design\src\views\LbCheckBox.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="comps-usage-container">
    <a-row :gutter="32">
      <a-col :span="12">
        <a-card>
          <h4>基本用法</h4>
          <a-checkbox-group v-model:value="value1" :options="options"></a-checkbox-group>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <h4>禁用</h4>
          <a-checkbox-group v-model:value="value1" :options="options" disabled></a-checkbox-group>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <h4>部分选择</h4>
          <div :style="{ borderBottom: '1px solid #E9E9E9' }">
            <a-checkbox
              v-model:checked="state.checkAll"
              :indeterminate="state.indeterminate"
              @change="onCheckAllChange"
            >
              <span>Check all</span>
            </a-checkbox>
          </div>
          <br />
          <a-checkbox-group v-model:value="state.checkedList" :options="plainOptions" />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
  import { ref, reactive, watch } from 'vue';
  const value1 = ref(['Apple', 'Orange'])
  const plainOptions = ['Apple', 'Pear', 'Orange']
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ]
  const state = reactive({
    indeterminate: true,
    checkAll: false,
    checkedList: ['Apple', 'Orange'],
  })
  
  const onCheckAllChange = (e: any) => {
    Object.assign(state, {
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
    });
  }

  watch(
    () => state.checkedList,
    val => {
      state.indeterminate = !!val.length && val.length < plainOptions.length;
      state.checkAll = val.length === plainOptions.length;
    },
  );
</script>