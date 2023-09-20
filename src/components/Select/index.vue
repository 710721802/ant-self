<template>
    <div class="l-select">
        <div v-if="labelText" class="select-label">{{ labelText }}</div>
        <a-select
            :value="modelValue"
            @change="onChange"
            :placeholder="placeholder"
            v-bind="$attrs"
            :allowClear="allowClear"
            :style="{...style}"
        >
            <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
                <slot :name="item" v-bind="data || {}"></slot>
            </template>
            <template #suffixIcon>
              <span class="ant-select-dropdown-icon"></span>
            </template>
            <template #clearIcon>
                <i class="iconfont icon-icon_error"></i>
            </template>
        </a-select>
    </div>
</template>
<script lang="ts">
  export default {
    inheritAttrs: false
  }
</script>
<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(defineProps<{
    modelValue: string | number,
    placeholder?: string,
    allowClear?: boolean,
    labelText?: string,
    style?: any
}>(), {
    modelValue: undefined,
    placeholder: '请选择',
    allowClear: false,
    labelText: '',
    style: {
        'width': '100%'
    }
});


const emit = defineEmits<{(e: 'update:modelValue', value: string | number): void}>();

const onChange = (value: string | number) => {
    emit('update:modelValue', value);
}

</script>
<style lang="less">
.l-select {
    // gap: 6px;
    display: flex;
    .select-label {
        margin-right: 24px;
        line-height: 32px;
    }
    .ant-select {
        // width: 100%;
        box-shadow: none;
        .ant-select-selector {
            padding: 0px 12px;
            border: 1px solid rgba(0, 20, 29, 0.2);
            .ant-select-selection-placeholder {
                font-family: 'Microsoft YaHei';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                /* identical to box height, or 114% */
                /* 副色 #00141D/30% */
                color: rgba(0, 20, 29, 0.3);
            }
        }
        .ant-select-arrow {
            .iconfont {
                font-size: 10px;
            }
        }
    }
    .iconfont {
        font-size: 12px;
    }
    
    .ant-select-focused:not(.ant-select-disabled).ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
        box-shadow: none;
    }
    .l-select-placeholder {
        font-family: 'Microsoft YaHei';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        /* identical to box height, or 114% */
        /* 副色 #00141D/30% */
        color: rgba(0, 20, 29, 0.3);
    }
    .l-select-icon-arrow {
        position: absolute;
        right: 13.37px;
        /* 副色 #00141D/30% */
        background: rgba(0, 20, 29, 0.3);
        width: 9.6px;
        height: 5.26px;
    }
    .ant-select-multiple {
        .ant-select-selection-search{
            margin-inline-start: 0px;
        }
    }
}
.ant-select-item-option {
    font-family: 'Microsoft YaHei';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
     /* identical to box height, or 133% */

    display: flex;
    align-items: center;

    /* 主色 #00ADFF/0 */

    color: rgba(0, 20, 29, 0.5);

    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;          
}
.ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background: #FFFFFF;
    color: @theme-color;
    font-weight: 400;
}
.ant-select-item-option-active:not(.ant-select-item-option-disabled) {
    background: #E5F7FF;
}
.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-color: #00adff;
    box-shadow: none;
}
.ant-select-multiple .ant-select-selection-item {
    color: rgba(0,20,29,0.75);
    background: #F1F4F6;
    border-radius: 2px;
}
.ant-select-dropdown {
  padding: 4px 6px;
}
/*下拉框图标更换*/
.ant-select-dropdown-icon {
  display: inline-block;
  width: 12px;
  height: 12px;
  background: url(../../assets/image/icons/icon-up.png) no-repeat center;
  background-size: 12px 12px;
  opacity: .5;
}
.ant-select .ant-select-arrow {
  transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-select-open .ant-select-arrow {
  transform: rotate(-180deg);
}
</style>
