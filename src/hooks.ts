import { ref } from 'vue';

export function useChangeEvent(maxlength: number, emit: Function) {
  const limit = ref<number>(maxlength);
  const length = ref<number>(0);
  const showLength = ref<number>(0);

  const onChange = (e: Event) => {
    // 判断是否大于限制
    const temp = (e.target as HTMLInputElement).value;
    length.value = temp.replace(/[\u4e00-\u9fa5]/g, 'aa').length;
    if (length.value <= limit.value) {
      showLength.value = length.value;
      emit('update:modelValue', temp);
    } else {
      showLength.value = maxlength;
      let str = '';
      for (let i = 0; i < temp.length; i += 1) {
        str += temp[i];
        const currentLength = str.replace(/[\u4e00-\u9fa5]/g, 'aa').length;
        if (currentLength > limit.value) {
          str = temp.slice(0, i);
          break;
        }
      }
      emit('update:modelValue', str);
    }
  };
  return {
    onChange,
    length,
    showLength,
    totalLength: showLength,
  };
}

export default {};
