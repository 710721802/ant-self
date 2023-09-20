/*
 * @Author: zhangxm45
 * @Date: 2023-02-16 15:28:50
 * @LastEditors: zhangxm45
 * @LastEditTime: 2023-02-16 16:08:40
 */
import { message } from 'ant-design-vue';
import { h } from 'vue';
import type { VNode } from 'vue';

interface toRoute{
  text: string,
  url: string
}
const lbSuccess = (
  content: string|VNode|(()=>VNode),
  route: toRoute,
  onClose?: ()=>void,
  duration: number = 3,
) => {
  message.success(h('span', {}, [
    typeof content === 'function' ? content() : content,
    h('a', {
      href: route.url,
      style: {
        marginLeft: '20px',
        color: '#00ADFF',
      },
    }, route.text),
  ]), onClose, duration);
};
export default lbSuccess;
