<!--
 * @Author: Coco wangkk4@lenovo.com
 * @Date: 2022-11-17 09:44:21
 * @LastEditors: Coco wangkk4@lenovo.com
 * @LastEditTime: 2023-02-27 15:40:45
 * @FilePath: \lenovo-brain-design\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="lb-layout-container">
    <header class="lb-layout-header">前端公共组件 V3</header>
    <div class="lb-layout-box">
      <div class="lb-layout-sider">
        <a-menu v-model:selectedKeys="current" mode="inline">
          <a-menu-item v-for="menu in compsList" :key="menu.path">
            <router-link :to="{ path: menu.path }">{{
              menu.title
            }}</router-link>
          </a-menu-item>
        </a-menu>
      </div>
      <a-config-provider :locale="zhCN" :autoInsertSpaceInButton="false">
        <div class="lb-layout-content">
          <router-view></router-view>
        </div>
      </a-config-provider>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { useRouter } from 'vue-router';
  import zhCN from "ant-design-vue/es/locale/zh_CN";

const router = useRouter();
const compsList: Array<{ title: string; path: string }> = [];
router.getRoutes().forEach((item) => {
  const nameArray = item.path.split("-");
  nameArray.shift();
  const upperCaseNameArray = nameArray.map((elem) => {
    return (elem = elem.slice(0, 1).toUpperCase() + elem.slice(1));
  });
  const title = upperCaseNameArray.join(" ") + " 组件";
  if (upperCaseNameArray.length > 0) {
    compsList.push({
      title,
      path: item.path,
    });
  }
});
const current = ref<string[]>(["/lb-input"]);

watch(
  () => router.currentRoute.value,
  (newVal) => {
    current.value = [newVal.fullPath];
  }
);
</script>
<style lang="less">
#app {
  height: 100%;
}
.lb-layout-container {
  height: 100%;
  overflow: hidden;
  .lb-layout-header {
    height: 54px;
    line-height: 54px;
    text-align: center;
    background: #05131a;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
  }
  .lb-layout-box {
    height: calc(100vh - 54px);
    display: flex;
    .lb-layout-sider {
      width: 255px;
      padding: 0 12px 20px 0;
      background-color: #f6f7f7;
      overflow: auto;
      .ant-menu {
        background-color: #f6f7f7;
        &.ant-menu-inline {
          border: 0;
        }
      }
    }
    .lb-layout-content {
      padding: 20px;
      width: 100%;
      overflow: auto;
    }
  }
}
</style>
