<template>
  <a-cascader
    :value="modelValue"
    v-bind="$attrs"
  >
    <template #clearIcon>
      <i
        class="iconfont icon-icon_error custom-icon"
      ></i>
    </template>
  </a-cascader>
</template>

<script setup lang="ts">
  const props = withDefaults(defineProps<{
    modelValue: string,
  }>(), {
    modelValue: '',
  })
</script>

<style scoped lang="less">
  .custom-icon {
    font-size: 14px;
    color: #52595e;
    opacity: .5;
    &:hover {
      color: @theme-color;
      opacity: 1;
    }
  }
  .ant-select-clear {
    margin-top: -7px;
  }
</style>