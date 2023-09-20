<!--
 * @Author: zhangxm45
 * @Date: 2023-02-14 13:51:02
 * @LastEditors: zhangxm45
 * @LastEditTime: 2023-02-16 16:10:31
-->
<template>
  <div class="comps-usage-container">
    <a-row :gutter="32">
      <a-col :span="12">
        <a-card>
          <h4>Message</h4>
          <br>
          <div class="btnBox">
            <a-button type="primary" @click="message1">提交成功</a-button>
          </div>
          <div class="btnBox">
            <a-button type="primary" @click="message2">提交失败</a-button>
          </div>
          <div class="btnBox">
            <a-button type="primary" @click="message3">提交的内容存在问题</a-button>
          </div>
          <div class="btnBox">
            <a-button type="primary" @click="message4">内容提交中</a-button>
          </div>
          <div class="btnBox">
            <a-button type="primary" @click="message5">方案提交成功！您可以随时撤回审核中或已发布的方案</a-button>
          </div>
          <div class="btnBox">
            <a-button type="primary" @click="message6">仿真申请提交成功</a-button>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
  import { message } from 'ant-design-vue'
  import lbSuccess from "../components/Message/index";
  const message1 = () => {
    message.success('提交成功')
  }
  const message2 = () => {
    message.error('提交失败')
  }
  const message3 = () => {
    message.warning('提交的内容存在问题')
  }
  const message4 = () => {
    message.loading('内容提交中')
  }
  const message5 = () => {
    message.success('方案提交成功！您可以随时撤回审核中或已发布的方案')
  }
  const message6 = () => {
    lbSuccess('仿真申请提交成功', {text: '立即查看', url: ''})
  }
</script>
<style lang="less" scoped>
.btnBox {
  margin-top: 20px;
}
</style>