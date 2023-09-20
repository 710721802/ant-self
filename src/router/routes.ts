/*
 * @Author: luxiyuan
 * @Date: 2022-11-18 14:29:18
 * @LastEditors: Coco wangkk4@lenovo.com
 * @LastEditTime: 2023-08-24 13:50:17
 * @Description: file content
 * @FilePath: \lenovo-brain-design\src\router\routes.ts
 */
import Home from '../views/Home.vue';
import LbInput from '../views/LbInput.vue';
import LbInputNumber from '../views/LbInputNumber.vue';
import LbTextArea from '../views/LbTextArea.vue';
import LbRadio from '../views/LbRadio.vue';
import LbCheckBox from '../views/LbCheckBox.vue';
import LbSwitch from '../views/LbSwitch.vue';
import LbSteps from '../views/LbSteps/LbSteps.vue';
import LbPagination from '../views/LbPagination.vue';
import LbCascader from '../views/LbCascader.vue';
import LbPopconfirm from '../views/LbPopconfirm.vue';
import LbSelect from '../views/LbSelect.vue';
import LbTable from '../views/LbTable.vue';
import LbUpload from '../views/LbUpload.vue';
import LbUploadPicture from '../views/LbUploadPicture.vue';
import LbMessage from '../views/LbMessage.vue';
import LbModal from '../views/LbModal.vue';
import LbButton from '../views/LbButton.vue';
import LbTooltip from '../views/LbTooltip.vue';

import LbLogin from '../views/LbLogin.vue';
import LbHeader from '../views/LbHeader.vue';
import LbSpin from '../views/LbSpin.vue';

interface routeParam {
  path: string;
  name?: string;
  component: any;
}
interface routeData {
    path: string;
    name?: string;
    component: any;
    redirect?: string;
    children?: routeParam[];
}

const routes: routeData[] = [
  {
    path: '/',
    redirect: '/lb-input',
    component: Home,
    children: [
      { path: '/lb-input', component: LbInput },
      { path: '/lb-input-number', component: LbInputNumber },
      { path: '/lb-textarea', component: LbTextArea },
      { path: '/lb-radio', component: LbRadio },
      { path: '/lb-checkbox', component: LbCheckBox },
      { path: '/lb-switch', component: LbSwitch },
      { path: '/lb-steps', component: LbSteps },
      { path: '/lb-pagination', component: LbPagination },
      { path: '/lb-select', component: LbSelect },
      { path: '/lb-table', component: LbTable },
      { path: '/lb-upload', component: LbUpload },
      { path: '/lb-upload-picture', component: LbUploadPicture },
      { path: '/lb-cascader', component: LbCascader },
      { path: '/lb-message', component: LbMessage },
      { path: '/lb-modal', component: LbModal },
      { path: '/lb-popconfirm', component: LbPopconfirm },
      { path: '/lb-tooltip', component: LbTooltip },
      { path: '/lb-button', component: LbButton },
      { path: '/lb-spin', component: LbSpin },
    ],
  },
  { path: '/lb-login', component: LbLogin },
  { path: '/lb-header', component: LbHeader },
  { path: '/user-license', component: LbLogin },
];

export default routes;
