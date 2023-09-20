/*
 * @Author: luxiyuan
 * @Date: 2022-09-05 15:55:32
 * @LastEditors: Coco wangkk4@lenovo.com
 * @LastEditTime: 2023-02-03 14:59:06
 * @Description: file content
 * @FilePath: \lenovo-brain-design\src\components\Input\use-change-event.ts
 */
import { ref } from 'vue'

export default function useChangeEvent(maxlength: number, emit: Function) {
  const limit = ref<number>(maxlength)
  const totalLength = ref<number>(0);
  const onChange = (e: Event) => {
    // 判断是否大于限制
    const temp = (e.target as HTMLInputElement).value
    const length = temp.replace(/[\u4e00-\u9fa5]/g, 'aa').length
    if (length <= limit.value) {
      totalLength.value = length
      emit('update:modelValue', temp)
    }
  }
  return {
    onChange,
    totalLength
  }
}
