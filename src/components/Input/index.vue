<!--
 * @Author: luxiyuan
 * @Date: 2022-09-05 15:43:44
 * @LastEditors: Coco wangkk4@lenovo.com
 * @LastEditTime: 2023-04-27 18:54:42
 * @Description: file content
 * @FilePath: \lenovo-brain-design\src\components\Input\index.vue
-->
<template>
  <a-popover
    placement="rightTop"
    trigger="focus"
    :overlayClassName="`popover_verify_content ${ !showRules ? 'hide-content': '' }`"
  >
    <template #content>
      <ul class="rule-tab" v-if="showRules">
        <li class="rule-item" v-for="(item, index) in rulesOptions" :key="index">
          <CheckCircleOutlined class="check-icon" v-if="item.isCheck" />
          <CloseCircleOutlined class="close-icon" v-else />
          <p>{{ item.title }}</p>
        </li>
      </ul>
    </template>
    <a-input
      ref="inputRef"
      :value="modelValue"
      v-bind="$attrs"
      autocomplete="off"
      :placeholder="placeholder ? placeholder : '请输入'"
      :class="{ 'contain-addonAfter': containAddonAfter, 'contain-addonBefore': containAddonBefore }"
      :style="{ 'width': width }"
      :allowClear="false"
      @change="onChange"
    >
      <template #addonAfter v-if="containAddonAfter">
        <slot name="addonAfter"></slot>
      </template>
      <template #addonBefore v-if="containAddonBefore">
        <slot name="addonBefore"></slot>
      </template>
      <template #prefix>
        <slot name="prefix"></slot>
      </template>
      <template #suffix>
        <!-- 自定义删除icon -->
        <i
          v-if="allowClear"
          v-show="modelValue"
          class="iconfont icon-icon_error custom-icon"
          @click="handleRemove"
        ></i>
        <!-- 自定义显示字数 -->
        <div v-if="showCount" class="limit-text" :class="{ 'containe-suffix': containSuffix }">{{ totalLength }}/{{ maxlength }}</div>
        <slot name="suffix"></slot>
      </template>
    </a-input>

  </a-popover>
</template>
<script lang="ts">
  export default {
    inheritAttrs: false
  }
</script>
<script setup lang="ts">
import { watch, computed, useSlots } from 'vue'
import { useChangeEvent } from '../../hooks'
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons-vue'

interface ruleProps {
  title: string
  isCheck: boolean
  checkLength?: boolean
  reg?: RegExp
}

const props = withDefaults(defineProps<{
  modelValue: string,
  maxlength?: number,
  placeholder?: string,
  showCount?: boolean,
  width?: string,
  showRules?: boolean,
  rulesOptions?: any,
  allowClear?: boolean,
}>(), {
  modelValue: '',
  maxlength: 50,
  placeholder: '请输入',
  showCount: false,
  width: '100%',
  showRules: false,
  allowClear: false,
  rulesOptions: [ // 校验规则提示
    {
      title: '长度在1-50位字符以内',
      checkLength: true,
      isCheck: false,
    },
    {
      title: '由汉字、字母、数字、下划线或中划线组成(可包含空格)',
      isCheck: false,
      reg: /^[a-zA-Z0-9_\-—\s\u4e00-\u9fa5]+$/,
    },
    {
      title: '不能以空格开头或结尾',
      isCheck: false,
      reg: /^(?!\s)(?!.*\s$)/
    }
  ]
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void,
}>()

const slots = useSlots()
const realLength = props.maxlength || 50
const { onChange } = useChangeEvent(realLength, emit)
const totalLength = computed(() => {
  const length = props.modelValue.replace(/[\u4e00-\u9fa5]/g, 'aa').length
  return length < realLength ? length : realLength
});
const containSuffix = slots.suffix
const containAddonAfter = slots.addonAfter
const containAddonBefore = slots.addonBefore

watch(() => props.modelValue, (newValue: string): void => {
  if (props.rulesOptions?.length == 0 || !props.showRules) {
    return
  }
  props.rulesOptions?.forEach((item: ruleProps) => {
    if (item.checkLength) { // 如果是检验长度，则按照1汉字=2字符的规则判断
      const newLength = newValue.replace(/[\u4e00-\u9fa5]/g, 'aa').length
      if (newLength > 0 && newLength <= realLength) {
        item.isCheck = true
      } else {
        item.isCheck = false
      }
    } else { // 其它的情况都用正则判断
      if (item.reg && item.reg instanceof RegExp) {
        if (item.reg.test(newValue)) {
          item.isCheck = true
        } else {
          item.isCheck = false
        }
      }
    }
  })
}, {
  immediate: true,
})

const handleRemove = () => {
  emit('update:modelValue', '');
}

</script>

<style scoped lang="less">
  .limit-text {
    color: rgba(0,0,29,.2);
    &.containe-suffix {
      margin: 0 6px 0 2px;
    }
  }
  .ant-input-affix-wrapper-disabled {
    .limit-text {
      color: rgba(0,20,29,.15);
    }
  }
  .ant-input-show-count-suffix {
    display: none;
  }
  .custom-icon {
    font-size: 14px;
    cursor: pointer;
    color: #52595e;
    opacity: .5;
    margin-top: 1px;
    &:hover {
      color: @theme-color;
      opacity: 1;
    }
  }
  .limit-text {
    color: rgba(0,0,0,.45);
  }
  
  .ant-input {
    padding: 3px 12px;
  }
  .ant-input-affix-wrapper {
    padding: 3px 12px;
    height: 32px;
  }
</style>
