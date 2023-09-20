<!--
 * @Author: luojm4
 * @Date: 2023-02-14 13:14:20
 * @LastEditors: luojm4
 * @LastEditTime: 2023-02-16 17:00:00
 * @Description: file content
 * @FilePath: \lenovo-brain-design\src\views\LbInput.vue
-->
<template>
  <div class="comps-usage-container">
    <l-upload-picture 
      :imageList="imageList"
      :maxLength="maxLength"
      :action="uploadUrl"
      @beforeUpload="beforeUpload"
      @imageDelete="handleDelete">
    </l-upload-picture>
    <div class="toggle-icon">
      <ArrowsAltOutlined @click="toggleShowCode" />
    </div>
    <div class="code-container" v-if="isShowCode">
      {{
        `<l-upload-picture 
           :maxLength="maxLength"
           :action="uploadUrl"
           @imageChange="imageChange">
         </l-upload-picture>`
      }}
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import { ArrowsAltOutlined } from '@ant-design/icons-vue';

  const isShowCode = ref(false)
  const maxLength = ref<number>(3)
  const uploadUrl = ref<string>("/api/test/upload")
  const imageList = ref<Array<{url: string, text?: string}>>([])

  const beforeUpload = (file: any) => {
    console.log(file)
    // example
    imageList.value.push({
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    })
  }

  const handleDelete = (index: number) => {
    console.log(index)
    // example
    imageList.value.splice(index, 1)
  }

  const toggleShowCode = () => {
    isShowCode.value = !isShowCode.value;
  }
</script>
<style lang="less" scoped>
  @import '../assets/css/common.less';
  .comps-usage-container {
    width: 800px;
    .toggle-icon {
      text-align: left;
    }
  }
</style>