<!--
 * @Author: Coco wangkk4@lenovo.com
 * @Date: 2023-02-17 13:57:42
 * @LastEditors: Coco wangkk4@lenovo.com
 * @LastEditTime: 2023-02-17 18:07:15
 * @FilePath: /lenovo-brain-design/src/components/buttom/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-button 
    v-bind="$attrs"
    :type="type"
    :style="{'min-width': width +'px', 'color': defaultColors[color]}">
    <slot>按钮</slot>
  </a-button>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  const props = withDefaults(defineProps<{
    width?: number;
    type?: string;
    color?: 'default' | 'primary' | 'success' | 'warin' | 'danger' | 'normal' | '';
  }>(), {
    width: 120,
    type: 'primary',
    color: '',
  })
  const defaultColors = ref<{}>({'default': '#00141D', 'primary': '#00ADFF', 'success': '#64C647', 'warin': '#FFA900', 'danger':'#EE2E3A', 'normal': 'rgba(0, 20, 29, 0.5)'});
  
</script>