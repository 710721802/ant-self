<!--
 * @Author: Coco wangkk4@lenovo.com
 * @Date: 2022-09-15 11:09:25
 * @LastEditors: luxiyuan
 * @LastEditTime: 2023-08-08 16:14:55
 * @FilePath: \lenovo-brain-design\src\components\InputNumber\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-input-number 
    v-bind="$attrs"
    :value="currentValue" 
    :size="size"
    :controls="false"
    @change="onValueChange"
    >
    <template #addonBefore>
      <div class="opt-icon" :class="{'opt-disabled': $attrs.disabled, 'limit-disabled': minLimit}" @click="reduceNum()" :style="{ 'width': btnWidth[size], 'height': btnWidth[size] }">-</div>
    </template>
    <template #addonAfter>
      <div class="opt-icon" :class="{'opt-disabled': $attrs.disabled, 'limit-disabled': maxLimit}" @click="addNum()" :style="{ 'width': btnWidth[size], 'height': btnWidth[size] }">+</div>
    </template>
  </a-input-number>
</template>
<script setup lang="ts">
  import { ref, watch, useAttrs } from 'vue';

  const props = withDefaults(defineProps<{
    min?: number,  // 最小值
    max?: number,  // 最小值
    step?: string | number,
    size?: 'default' | 'small' | 'large',
    width?: string | number,
    modelValue: number,  // 当前值
  }>(), {
    min: -Infinity,
    max: Infinity,
    size: 'default',
    step: 1,
    width: 182,
    modelValue: 0,
  });
  const emits = defineEmits<{
    (event: 'update:modelValue', value: number | string | null): void,
    (event: 'change'): void,
    (event: 'pressEnter'): void
  }>();

  const attrs = useAttrs()
  const btnWidth = {default: '30px', small: '22px', large: '38px'}
  const currentValue = ref<number | string | null>(props.modelValue);
  const maxLimit = ref<boolean>(props.modelValue === props.max);
  const minLimit = ref<boolean>(props.modelValue === props.min);

  watch(() => props.modelValue, () => {
    currentValue.value = props.modelValue;
  })

  const reduceNum = () => {
    if(attrs.disabled) { return };
    if(currentValue.value === props.min) {
      return;
    }
    const step = typeof props.step === 'string' ? parseInt(props.step) : props.step;
    if(isNaN(step)) {  // 非数字
      currentValue.value = ''
    }else {
      // (currentValue.value as number) -= step;
      currentValue.value = floatSub(currentValue.value as number, step);
    }
    onValueChange(currentValue.value)
  }

  const addNum = () => {
    console.log('currentValue', currentValue.value)
    if(attrs.disabled) { return };
    if(currentValue.value === props.max) {
      return;
    }
    const step = typeof props.step === 'string' ? parseInt(props.step) : props.step;
    if(isNaN(step)) {  // 非数字
      currentValue.value = ''
    }else {
      // (currentValue.value as number) += step;
      currentValue.value = floatAdd(currentValue.value as number, step);
    }
    onValueChange(currentValue.value)
  }

  const floatAdd = (val:number, step:number) => {
    console.log('val', val)
    if(val === null) {
      val = 0
    }
    let m = 0, n = 0;             //记录a，b的小数位数
    const _val = val + "", _step = step + "";

    try {
      m = _val.split(".")[1].length;
    } catch (error) {
      // console.log(error)
    }
    try {
      n = _step.split(".")[1].length;
    } catch (error) {
      // console.log(error)
    }
    const maxInt = Math.pow(10, Math.max(m, n)); //将数字转换为整数的最大倍数
    return (floatMul(val, maxInt) + floatMul(step, maxInt)) / maxInt;
  }

  const floatMul = (val:number, step:number) => {
    let m = 0, n = 0;            //记录a，b的小数位数
    const _val = val + "", _step = step + "";

    try {
      m = _val.split(".")[1].length;
    } catch (error) {
      // console.log(error)
    }
    try {
      n = _step.split(".")[1].length;
    } catch (error) {
      // console.log(error)
    }
    const maxInt = Math.pow(10, m + n); //将数字转换为整数的最大倍数
    return Number(_val.replace(".", "")) * Number(_step.replace(".", "")) / maxInt;
  }

  const floatSub = (val:number, step:number) => {
    if(val === null) {
      val = 0
    }
    let m = 0, n = 0;             //记录a，b的小数位数
    const _val = val + "", _step = step + "";

    try {
      m = _val.split(".")[1].length;
    } catch (error) {
      // console.log(error)
    }
    try {
      n = _step.split(".")[1].length;
    } catch (error) {
      // console.log(error)
    }
    const maxInt = Math.pow(10, Math.max(m, n)); //将数字转换为整数的最大倍数
    return (floatMul(val, maxInt) - floatMul(step, maxInt)) / maxInt;
  }

  const onValueChange = (val: number | string | null) => {
    updateBtnStatus(val);
    emits('update:modelValue', val);
  }

  const updateBtnStatus = (val: number | string | null) => {
    if(val === props.min) {
      minLimit.value = true;
    }else {
      minLimit.value = false;
    }
    if(val === props.max) {
      maxLimit.value = true;
    }else {
      maxLimit.value = false;
    }
  }

</script>
<style lang="less">
  .ant-input-number-group {
    border-radius: 2px;
    // border: 1px solid rgba(0,20,29,0.2);
    &:hover {
      border-color: @theme-color;
    }
  }
  .ant-input-number-group-addon {
    background: rgba(255,255,255,0.7);
    border: 0;
    color: #000;
    padding: 0;
    cursor: pointer;
    &:hover:not(.limit-disabled) {
      background: rgba(0,173,255,0.1);
      color: @theme-color;
    }
    .opt-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .limit-disabled, .opt-disabled  {
        cursor: not-allowed;
        background-color: rgba(0, 20, 29, 0.03);
        color: rgba(0, 20, 29, 0.15);
      }
  }
  .ant-input-number {
    border: 0;
    border-left: 1px solid rgba(0,20,29,0.2);
    border-right: 1px solid rgba(0,20,29,0.2);
    color: rgba(5,19,26,0.75);
    &:hover {
      border-color: rgba(0,20,29,0.2);
    }
    &.ant-input-number-focused {
      box-shadow: none;
    }
    &.ant-input-number-disabled {
        background-color: rgba(0, 20, 29, 0.03);
        .ant-input-number-input {
          color: rgba(0, 20, 29, 0.15)
        }
      }
    &.ant-input-number-lg {
      font-size: 14px;
      padding: 0;
    }
  }
  .ant-input-number-input {
    text-align: center;
  }
  
</style>
