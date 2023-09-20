<template>
  <div class="comps-usage-container">
    <a-row :gutter="32">

      <a-col :span="12">
        <a-card>
          <h4>默认</h4>
          <!-- 测试组件 -->

        </a-card>
      </a-col>
      
    </a-row>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  
  const props = withDefaults(defineProps<{
    modelValue: string;  // 当前值
  }>(), {
    modelValue: '测试',
  })

  const emits = defineEmits<{
    (event: 'update:modelValue', value: number | string | null): void,
  }>();

</script>
<style lang="less">
  
</style>