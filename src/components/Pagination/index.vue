<template>
	<div class="pagination-container">
    <a-pagination
      size="small"
      v-bind="$attrs"
      :showQuickJumper="showQuickJumper"
      :showSizeChanger="showSizeChanger"
      :showTotal="showTotal"
      @change="handleCurrentChange"
      @showSizeChange="handleSizeChange"
    >
    </a-pagination>
  </div>
</template>

<script setup lang="ts">
  const props = withDefaults(defineProps<{
    showQuickJumper?: boolean,
    showSizeChanger?: boolean,
    showTotal?: Function
  }>(), {
    showQuickJumper: true,
    showSizeChanger: true,
    showTotal: (total: number) => {
      return `共 ${ total } 条`
    }
  })

  const emit = defineEmits<{
    (e: 'update:current', value: number): void,
    (e: 'update:pageSize', value: number): void,
    (e: 'handleReload'): void,
  }>()

  /**
  * pageSize 改变时会触发
  * @param {number} 当前页
  * @param {number} 每页条数
  * @return {void}
  */
  const handleSizeChange = (current: number, pageSize: number) => {
    emit('update:current', current)
    emit('update:pageSize', pageSize)
    emit('handleReload')
  }

  /**
  * currentPage 改变时会触发
  * @param {number} 当前页
  * @return {void}
  */
  const handleCurrentChange = (page: number) => {
    emit('update:current', page)
    emit('handleReload')
  }
</script>
