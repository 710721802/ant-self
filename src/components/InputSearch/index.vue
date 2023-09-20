<template>
  <a-input 
    v-bind="$attrs"
    :value="modelValue"
    :style="{...style, width: width}"
    @change="onValueChange"
    @keyup="onKeyUp"
  >
    <template #suffix>
      <span @click="() => {emits('search');}" class="search-icon">
        <SearchOutlined />
      </span>
    </template>
  </a-input>
</template>
<script setup lang="ts">
  import { CSSProperties } from "vue";
  import { SearchOutlined } from '@ant-design/icons-vue';

  const props = withDefaults(defineProps<{
    modelValue: string,
    width?: string,
    style?: CSSProperties | any,
  }>(), {
    modelValue: '',
    width: '100%',
    style: {}
  })
  const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void,
    (event: 'search'): void,
  }>()

  const onValueChange = (e: Event) => {
    const val =  (e.target as HTMLInputElement).value;
    emits('update:modelValue', val);
  }

  const onKeyUp = (e: KeyboardEvent) => {
    // console.log('onKeyUp',e)
    if(e.keyCode === 13 || e.key === 'Enter') {
      emits('search');
    }
  }

</script>
<style scoped lang="less">
  .search-icon {
    cursor: pointer;
  }
</style>