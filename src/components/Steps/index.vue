<!--
  * Steps
  * 基于antd封装，大部分api继续延用
  * dataSources 标题对象数组 title标题  disabled 禁用属性
  * current 步数 
  * disabled 是否需要置灰（区分步骤条和展示，默认false）
  * @change 更新步骤
-->
<template>
  <a-steps :current="current" v-bind="$attrs" @change="change">
    <a-step
      v-for="(item, index) in dataSources"
      :key="index"
      :title="item.title"
      :disabled="item.disabled"
    >
      <template #icon v-if="index <= current - 1">
        {{ index + 1 }}
      </template>
    </a-step>
  </a-steps>
</template>

<script setup lang="ts">
interface Props {
  current: number;
  dataSources: string[]; // 标题
}

const props = withDefaults(defineProps<Props>(), {
  current: 0,
});

const emit = defineEmits<{
  (event: "change", value: number): void;
}>();

const change = (current: number) => {
  emit("change", current);
};

// 导出方法
defineExpose({
  change,
});
</script>

<style lang="less">
</style>
