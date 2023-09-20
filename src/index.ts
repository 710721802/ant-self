/*
 * @Author: luxiyuan
 * @Date: 2022-09-28 15:21:21
 * @LastEditors: luxiyuan
 * @LastEditTime: 2023-08-23 11:52:46
 * @Description: file content
 * @FilePath: \lenovo-brain-design\src\index.ts
 */
import { createApp } from 'vue';
import 'highlight.js/styles/monokai-sublime.css';
import 'highlight.js/lib/common';
import hljsVuePlugin from '@highlightjs/vue-plugin';
import antd, { message } from 'ant-design-vue';
import router from './router';
// import './style.css';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import './assets/css/main.less';
import LenovoBrainDesign from './components';
import './assets/icon-font/iconfont.css';

message.config({
  top: '80px',
  // duration: 0, // 自动关闭的延时，单位秒。设为 0 时不自动关闭(为了看到修改效果,后期删除)
});
const app = createApp(App);
app.use(hljsVuePlugin);
app.use(router);
app.use(antd);
app.use(LenovoBrainDesign);
app.mount('#app');
