<!--
 * @Author: Coco wangkk4@lenovo.com
 * @Date: 2023-02-24 10:35:57
 * @LastEditors: Coco wangkk4@lenovo.com
 * @LastEditTime: 2023-08-24 15:12:26
 * @FilePath: /lenovo-brain-design/README.md
 * @Description: 
-->
# lenovo-brain-design组件库

## 本地开发
```
npm run dev
```

### 版本
基于ant-design-vue V3.x, 组件库的发布版本号以 3.x.x开头


## 使用

切换npm源：npm config set registry=https://nexus.brain.lenovo.com/repository/npm/

在项目中下载组件库： npm i @lenovo/lenovo-brain-design


### 引入

import LenovoBrainDesign from '@lenovo/lenovo-brain-design';
app.use(LenovoBrainDesign);

#### 引入样式

import '@lenovo/lenovo-brain-design/dist/css/main.css';


## 构建发布
```
1.更新版本号：修改package.json中的version

2.构建： npm run build

3.切换npm源到lenovo私库：​​​​​​​npm config set registry=https://nexus.brain.lenovo.com/repository/npm-hosted/ （推荐使用 nrm 管理repository）

4.登录：npm login（输入账号、密码、邮箱）

5.发布：npm publish
```

## 仓库地址

https://gitlab.xpaas.lenovo.com/lenovo-brain/common/lenovo-brain-design

## 使用文档

## 走查部署
1. 进入lenovo-public1

2. sudo su -

3. cd /usr/share/nginx/html

4. rz(选择打包好的zip，例如dev.zip)

5. unzip dev.zip

6. rm -rf dev.zip

7. systemctl restart nginx

8. http://10.110.162.174/访问


## 版本升级
### V3.0.15 
  新增 Spin 组件
### V3.1.0
  修复table组件复选框样式错乱的问题
### V3.1.1
  修复下拉列表删除icon取消不掉的问题
