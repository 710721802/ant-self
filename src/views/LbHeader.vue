<!--
 * @Author: Coco wangkk4@lenovo.com
 * @Date: 2023-03-09 16:04:58
 * @LastEditors: Coco wangkk4@lenovo.com
 * @LastEditTime: 2023-03-10 15:00:52
 * @FilePath: /lenovo-brain-design/src/views/LbHeader.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <l-header @click="goHome" fixed>
    <template #right>
      user name
    </template>
  </l-header>
  <div class="content">
    <h3>content</h3>
  </div>
  <!-- @click="goHome" fixed :style="{backgroundColor: '#adf', color: '#333', height: '32px'}" -->
</template>
<script setup lang="ts">
  const goHome = () => {
    console.log('goHome...')
  }
</script>
<style lang="less" scoped>
  .content {
    height: 999px;
    background: skyblue;
    // margin-top: 54px;
  }
  
</style>