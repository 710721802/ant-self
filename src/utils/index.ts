/*
 * @Author: luxiyuan
 * @Date: 2023-02-20 15:01:02
 * @LastEditors: luxiyuan
 * @LastEditTime: 2023-02-20 15:10:07
 * @Description: file content
 * @FilePath: \lenovo-brain-design\src\utils\index.ts
 */
/**
  * @desc 防抖函数
  * @param {Function} 执行函数
  * @param {Number} 延迟时间
  * @return {Function}
  */
export const debounce = (fn, delay): Function => {
  let timer;
  return function timerFn(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

export default {
  debounce,
};
