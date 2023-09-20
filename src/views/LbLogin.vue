<!--
 * @Author: Coco wangkk4@lenovo.com
 * @Date: 2023-02-24 11:09:05
 * @LastEditors: Coco wangkk4@lenovo.com
 * @LastEditTime: 2023-02-27 15:21:09
 * @FilePath: /lenovo-brain-design/src/views/LbLogin.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <l-login 
    captchaApi="http://10.110.156.85/api/v1/user/captcha/get"
    tag="AIE 专业版"
    title="边缘动态模型训练推理系统"
    desc="边缘侧小样本模型训练&场景适配技术，您可以使用几个或十几个良品样本，在十几分钟或几十分钟内即可完成一次模型构建，您还可以指导模型学习没有见过的新样本，模型可适配迭代学习，快速适应场景的变化，本系统可以帮助您低门槛高效训练AI模型。"
    @submit="getLoginInfo">
    <!-- <template #intro>边缘动态模型训练推理系统</template> -->
    <!-- <template #footer>边缘动态模型训练推理系统</template> -->
  </l-login>
</template>
<script setup lang="ts">
import { FormState } from '../components/Login/index.vue'

const getLoginInfo = (value: FormState) => {
  console.log('ywm', value);
}

</script>
<style lang="less">
  
</style>
