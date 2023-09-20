<!--
 * @Author: Coco wangkk4@lenovo.com
 * @Date: 2023-02-17 14:02:45
 * @LastEditors: Coco wangkk4@lenovo.com
 * @LastEditTime: 2023-02-23 16:17:40
 * @FilePath: /lenovo-brain-design/src/views/LbButton.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="comps-usage-container">
    <a-row :gutter="32">

      <a-col :span="12">
        <a-card>
          <h4>基础</h4>
          <l-button type="primary">主要按钮</l-button>
          <l-button type="primary" ghost>次要按钮</l-button>
          <l-button type="default">一般按钮</l-button>
          <l-button type="primary" disabled>禁用</l-button>
          <l-button type="primary" :loading="isLoading" @click="isLoading = !isLoading">
            <template #icon><PoweroffOutlined /></template>
            Loading
          </l-button>
          <l-button type="primary" ghost :loading="isLoading" @click="isLoading = !isLoading">
            Loading
          </l-button>
          <l-button type="default" :loading="isLoading" @click="isLoading = !isLoading">
            Loading
          </l-button>
          
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card>
          <h4>链接</h4>
          <l-button @click="go" type="link">link</l-button>  <l-button type="link" disabled> disabled link</l-button>
          <br><br>
          <l-button type="link" color="default"></l-button>
          <l-button type="link" color="primary"></l-button>
          <l-button type="link" color="success"></l-button>
          <l-button type="link" color="warin"></l-button>
          <l-button type="link" color="danger"></l-button>
          <l-button type="link" color="normal"></l-button>

          <!-- <l-button type="text">text</l-button> <br><br> -->
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <h4>组合按钮</h4>
          <l-dropdown-button
            :loading="isLoading"
            trigger="click" 
            :menu="dropdownMenu"
            @click="save">
          </l-dropdown-button>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
  import { ref, Ref } from 'vue';
  import { PoweroffOutlined } from '@ant-design/icons-vue';

  const isLoading = ref<boolean>(false);
  const dropdownMenu = ref<string[]>(['保存&退出', '下载', '测试'])

  const go = () => {
    console.log('link')
  }
  const save = (e) => {
    console.log('save',e)
    enterLoading(isLoading)
  }

  const enterLoading = (isLoading:Ref<boolean>) => {
    isLoading.value = true;
    setTimeout(() => {
      isLoading.value = false;
    }, 5000);
  }

</script>
<style scoped lang="less">
  .ant-btn, .ant-btn-group {
    margin-right: 20px;
    margin-bottom: 20px;
  }
</style>