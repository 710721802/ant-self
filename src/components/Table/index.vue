<!--
 * @Author: wanghq18 wanghq18@lenovo.com
 * @Date: 2023-05-15 15:27:25
 * @LastEditors: wanghq18 wanghq18@lenovo.com
 * @LastEditTime: 2023-08-16 15:07:25
 * @FilePath: \lenovo-brain-design\src\components\Table\index.vue
 * @Description: pagination 显示原生分页 默认值 false
 * showPagination 显示分页 默认值 true
 * total 数据总数 默认值 30
 * @update 向父组件传参（分页信息），更新tab了数据
 * dataSource table的数据
 * columns 表格列信息
-->
<template>
<a-table
  :pagination="pagination"
  v-bind="{...$attrs, ...$props, ...{dataSource: dataSource, columns: columns}}"
  >
  <template v-slot:[item]="scope" v-for="item in renderSlotsArr">
    <slot
      :name="item"
      :column="scope.column"
      :text="scope.text"
      :index="scope.index"
      :record="scope.record"
    >
    </slot>
  </template>
</a-table>
<div class="pagination-container">
  <a-pagination
    size="small"
    v-bind="{...$attrs, ...$props}"
    v-model:current="paginationOptions.current"
    v-model:pageSize="paginationOptions.pageSize"
    v-model:total="paginationOptions.total"
    @change="change"
    v-if="showPagination && !pagination"
  ></a-pagination>
</div>
</template>

<script setup lang="ts">
import { useSlots, reactive } from 'vue';
interface PaginationOptions {
  current: number,
  pageSize: number,
  total: number,
}
const props = withDefaults(defineProps<{
  dataSource?: any,
  columns?: any,
  pagination?: boolean,
  showPagination?: boolean,
  currentPage?: number,
  pageSize?: number,
  total: number,
  showQuickJumper?: boolean,
  showSizeChanger?: boolean,
  showTotal?: Function
}>(), {
  currentPage: 1,
  pageSize: 10,
  pagination: false,
  showPagination: true,
  showQuickJumper: true,
  showSizeChanger: true,
  showTotal: (total: number) => {
    return `共 ${ total } 条`
  }
})
const emit = defineEmits<{
  (e: 'update', value: object): void,
}>()
// 支持插槽
let slots = useSlots()
const renderSlotsArr = Object.keys(slots);
// 分页配置
const paginationOptions = reactive<PaginationOptions>({
  current: props.currentPage,
  pageSize: props.pageSize,
  total: props.total,
})

const change = () => {
  emit('update',paginationOptions)
}
</script>

<style scoped>

</style>
