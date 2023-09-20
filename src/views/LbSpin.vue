<!--
 * @Author: Coco wangkk4@lenovo.com
 * @Date: 2023-08-24 13:45:34
 * @LastEditors: Coco wangkk4@lenovo.com
 * @LastEditTime: 2023-08-24 14:24:36
 * @FilePath: /lenovo-brain-design/src/views/LbSpinLoading.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="comps-usage-container">
    <a-row :gutter="32">

      <a-col :span="12">
        <a-card>
          <h4>行内</h4>
          <button @click="visible1 = !visible1">点我loading</button>
          <l-spin :visible="visible1" :text="'加载中，请稍后...'" :inline="true"></l-spin>

          <div class="toggle-icon" >
            <span>
              <arrows-alt-outlined v-if="!isShowCode1" title="展开代码" @click="isShowCode1 = true" />
              <shrink-outlined v-if="isShowCode1" title="收起代码" @click="isShowCode1 = false" />
            </span>
            <CopyOutlined class="copy-btn" title="复制代码" @click="copyCode(SPININLINECODE)" />
          </div>
          <div v-if="isShowCode1">
            <highlightjs language="javascript" :code="SPININLINECODE"></highlightjs>
          </div>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card>
          <h4>全局</h4>
          <button @click="show">点我loading</button>
          <l-spin :visible="visible2" :text="'加载中，请稍后...'"></l-spin>

          <div class="toggle-icon" >
            <span>
              <arrows-alt-outlined v-if="!isShowCode2" title="展开代码" @click="isShowCode2 = true" />
              <shrink-outlined v-if="isShowCode2" title="收起代码" @click="isShowCode2 = false" />
            </span>

            <CopyOutlined class="copy-btn" title="复制代码" @click="copyCode(SPINCODE)" />
          </div>
          <div v-if="isShowCode2">
            <highlightjs language="javascript" :code="SPINCODE"></highlightjs>
          </div>
        </a-card>
      </a-col>
      
    </a-row>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import { message } from 'ant-design-vue';
  import { CopyOutlined, ArrowsAltOutlined, ShrinkOutlined } from '@ant-design/icons-vue';
  
  const visible1 = ref<boolean>(false);
  const visible2 = ref<boolean>(false);

  const isShowCode1 = ref<boolean>(false);
  const isShowCode2 = ref<boolean>(false);

  const show = () => {
    visible2.value = true;
    setTimeout(() => {
      visible2.value = false;
    }, 5000)
  }

  const copyCode = (code) => {
    const copyToClipboard = (text) => navigator.clipboard.writeText(text)
    copyToClipboard(code)
    message.success('已复制到剪贴板', 1)
  }

  const SPININLINECODE = `<l-spin :visible="visible1" :text="'加载中，请稍后...'" :inline="true"></l-spin>`;
  const SPINCODE = `<l-spin :visible="visible2" :text="'加载中，请稍后...'"></l-spin>`


</script>
<style lang="less">
  
</style>