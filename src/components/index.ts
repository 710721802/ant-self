/*
 * @Author: luxiyuan
 * @Date: 2022-09-02 17:58:55
 * @LastEditors: Coco wangkk4@lenovo.com
 * @LastEditTime: 2023-08-24 14:02:05
 * @Description: file content
 * @FilePath: \lenovo-brain-design\src\components\index.ts
 */
import { App } from 'vue';
import Input from './Input';
import InputNumber from './InputNumber';
import Modal from './Modal';
import Textarea from './Textarea';
import Steps from './Steps';
import Pagination from './Pagination';
import Cascader from './Cascader';
import Select from './Select';
import SelectOption from './Select/components/SelectOption';
import Upload from './Upload';
import UploadPicture from './UploadPicture';
import Login from './Login';
import Button from './Button';
import DropdownButton from './Button/DropdownButton';
import Header from './Header';
import InputSearch from './InputSearch';
import Table from './Table';
import Spin from './Spin';
import '../assets/css/main.less';
import '../assets/icon-font/iconfont.css';

const components = [
  Input,
  InputNumber,
  Modal,
  Textarea,
  Pagination,
  Select,
  SelectOption,
  Cascader,
  Upload,
  UploadPicture,
  Steps,
  Login,
  Button,
  DropdownButton,
  Header,
  InputSearch,
  Table,
  Spin,
];

export {
  Input,
  InputNumber,
  Modal,
  Textarea,
  Pagination,
  Select,
  SelectOption,
  Cascader,
  Upload,
  UploadPicture,
  Login,
  Steps,
  Button,
  DropdownButton,
  Header,
  InputSearch,
  Table,
  Spin,
};

export default {
  install(app: App) {
    components.forEach((item) => {
      app.component(item.name, item.component);
    });
  },
};
