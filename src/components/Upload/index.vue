<!--
 * @Author: luojm4
 * @Date: 2023-03-13 13:14:20
 * @LastEditors: luojm4
 * @LastEditTime: 2023-03-16 16:00:00
 * @FilePath: \lenovo-brain-design\src\components\Upload\index.vue
-->
<template>
  <div class="comps-usage-container">
    <a-upload v-bind="$attrs">
      <a-button>+ 上传文件</a-button>
    </a-upload>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="less" scoped>
  :deep(.ant-upload-list) {
    width: 300px;
  }
  .upload-input {
    width: 300px;
    float: left;
  }
</style>