<template>
  <div>
    <a-row :gutter="32">
      <a-col :span="12">
        <a-card>
          <h4>默认</h4>
          <l-upload accept=".txt" action="/apifox"></l-upload>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card>
          <h4>默认</h4>
          <a-input class="upload-input"></a-input>
          <l-upload accept=".txt" action="/apifox"></l-upload>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="less" scoped>
  .comps-usage-container {
    width: 800px;
    .toggle-icon {
      text-align: left;
    }
  }
  .upload-input {
    width: 300px;
    float: left;
  }
</style>