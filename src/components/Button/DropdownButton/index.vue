<!--
 * @Author: Coco wangkk4@lenovo.com
 * @Date: 2023-02-17 17:38:43
 * @LastEditors: Coco wangkk4@lenovo.com
 * @LastEditTime: 2023-02-23 16:28:06
 * @FilePath: /lenovo-brain-design/src/components/Button/LDropdownButton.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-dropdown-button
    class="lb-dropdown-button"
    v-bind="$attrs"
    type="primary"
    :loading="loading"
    @click="getValue(0)"
  >
    <slot name="content">保存</slot>
    <template #overlay>
      <a-menu class="lb-dropdown">
        <a-menu-item
          v-for="(item, index) in menu"
          :key="index"
          @click="getValue(index+1)">{{ item }}</a-menu-item>
      </a-menu>
    </template>
    <template #icon>
      <slot name="icon"><DownOutlined /></slot>
    </template>
  </a-dropdown-button>
</template>
<script setup lang="ts">
  import { ref, Ref } from 'vue';
  import { DownOutlined } from '@ant-design/icons-vue';

  const props = withDefaults(defineProps<{
    width?: number;
    menu?: string[];
    loading?: boolean;
  }>(), { 
    width: 104,
    menu: () => ['保存并导出'],
    loading: false,
  });

  const emits = defineEmits<{
    (event: 'click', value: number): void,
  }>();
  const getValue = (type: number) => {
    emits('click', type)
  }
</script>
<style lang="less">
  .lb-dropdown.ant-dropdown-menu {
    padding: 0;
    .ant-dropdown-menu-item {
      color: #00ADFF;
    }
  }
</style>