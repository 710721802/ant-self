<!--
 * @Author: luxiyuan
 * @Date: 2022-11-18 18:23:36
 * @LastEditors: luxiyuan
 * @LastEditTime: 2022-11-21 15:26:29
 * @Description: file content
 * @FilePath: \lenovo-brain-design\src\components\Textarea\index.vue
-->
<template>
    <div class="lb-textarea">
        <a-textarea
            :value="modelValue"
            @change="onChange"
            v-bind="$attrs"
            :showCount="false"
            :placeholder="placeholder"
        >
        </a-textarea>
        <div class="lb-textarea-showLength" v-if="showCount">
            <span>{{ showLength }}</span> / <span>{{ maxlength }}</span>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { computed } from 'vue'
    import { useChangeEvent } from '../../hooks';
    const props = withDefaults(defineProps<{
        modelValue: string,
        maxlength?: number,
        placeholder?: string,
        showCount?: boolean,
        allowClear?:boolean,
    }>(), {
        modelValue: '',
        maxlength: 200,
        placeholder: '请输入内容',
        showCount: true,
        allowClear: false,
    });
    const emit = defineEmits<{(e: 'update:modelValue', value: string): void}>();

    const showLength = computed(() => {
        const length = props.modelValue.replace(/[\u4e00-\u9fa5]/g, 'aa').length
        return length < props.maxlength ? length : props.maxlength
    })

    const { onChange } = useChangeEvent(props.maxlength, emit)

</script>
<style lang="less">
.lb-textarea {
    position: relative;
    .ant-input, .ant-input {
        &:hover {
            border-color: @theme-color;
        }
        &:focus {
            border-color: @theme-color;
            box-shadow: none;
        }
    }
    .lb-textarea-showLength {
        position: absolute;
        height: 16px;
        right: 8.59px;
        bottom: 4.59px;
        font-family: 'Microsoft YaHei';
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 16px;
        text-align: right;
        color: rgba(0, 20, 29, 0.3);
    }
    textarea::-webkit-input-placeholder { /* WebKit, Blink, Edge */
        font-family: 'Microsoft YaHei';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
    }

    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        font-family: 'Microsoft YaHei';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
    }
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
        font-family: 'Microsoft YaHei';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
    }
    textarea:-ms-input-placeholder { /* Internet Explorer 10-11 */
        font-family: 'Microsoft YaHei';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
    }
    textarea::-ms-input-placeholder { /* Microsoft Edge */
        font-family: 'Microsoft YaHei';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
    }
}
</style>