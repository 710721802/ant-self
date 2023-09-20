<!--
 * @Author: Coco wangkk4@lenovo.com
 * @Date: 2023-03-09 16:02:36
 * @LastEditors: Coco wangkk4@lenovo.com
 * @LastEditTime: 2023-03-10 15:00:24
 * @FilePath: /lenovo-brain-design/src/components/Header/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <header :style="style" :class="{'position-style': fixed}">
    <div class="flex-left">
      <div class="left-box">
        <img :class="{'logo-status': true}" @click="() => emits('click')" height="24" :src="logo" alt="">
        <slot name="left">
          
        </slot>
      </div>
  </div>
  <div class="flex-center">
    <slot name="center">
      
    </slot>
  </div>
  <div class="flex-right">
      <slot name="right">
        
      </slot>
    </div>
  </header>
</template>
<script setup lang="ts">
  import { StyleValue } from "vue";

  const props = withDefaults(defineProps<{
    logo?: string;  // log url
    style?: StyleValue; // 自定义header样式
    fixed?: boolean;
  }>(), {
    logo: require('../../assets/image/header/header-logo.png'),
    style: '',
    fixed: false,
  })

  const emits = defineEmits<{
    (event: 'click'): void,
  }>();
</script>
<style lang="less" scoped>
  header {
    width: 100%;
    height: 54px;
    padding: 0 28px;
    display: flex;
    align-items: center;
    background: #05131A;
    color: #fff;
    &.position-style {
      position: fixed;
      top: 0;
      left: 0;
    }
    .flex-left {
      flex: 1;
      .left-box {
        display: flex;
        .logo-status {
          cursor: pointer;
        }
      }
    }
    .flex-center {
      flex: 1;
      text-align: center;
    }
    .flex-right {
      flex: 1;
      text-align: right;
    }
  }
</style>