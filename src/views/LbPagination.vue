<template>
  <a-row type="flex">
    <a-col flex="auto" :span="50">
      <a-card>
        <h4>基础</h4>
        <l-pagination
          v-model:current="page.currentPage"
          v-model:pageSize="page.pageSize"
          v-model:total="page.total"
          :showQuickJumper="false"
          :showSizeChanger="false"
          :showTotal="() => {}"
        ></l-pagination>
      </a-card>
    </a-col>
  </a-row>
  <a-row type="flex">
    <a-col flex="auto" :span="50">
      <a-card>
        <h4>默认</h4>
        <l-pagination 
          v-model:current="page2.currentPage"
          v-model:pageSize="page2.pageSize"
          v-model:total="page2.total"
        ></l-pagination>
      </a-card>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';

  const page = reactive({
    currentPage: 1,
    pageSize: 10,
    total: 50
  })

  const page2 = reactive({
    currentPage: 1,
    pageSize: 10,
    total: 60
  })
  
</script>

<style lang="less" scoped>
.ant-row {
  margin-bottom: 15px;
}
</style>