<!--
  * Modal
  * 基于antd封装，大部分api继续延用
  * 组件样式基于class：modal-common编写，（暂编写全局样式）
  * tipStyle：（默认false）
      true    tips提示样式
      false   from表单样式
  * 取消footer内容显示，需要配置footer：false（默认true）
  * 点击右上角关闭按钮或遮罩层关闭modal，需配置cancel
  * fontMaxSize : 为label字符最大值（暂支持2-6）
-->
<template>
	<a-modal
    class="modal-common"
    wrapClassName='ant-modal-middle-dialog'
    :visible="visible"
    :width="size === 'small' ? '480px' : size === 'middle' ? '640px' : size === 'large' ? '960px' : '480px'"
    v-bind="$props"
    :maskClosable="maskClosable"
    :footer="null"
    centered
    :destroyOnClose="destroyOnClose"
    @cancel="cancel"
  >
    <div
      class="body"
      id="scroller"
      :class="classObject"
    > 
      <div v-if="warning" class="warning-icon">
        <img src="../../assets/icons/icon-warning.png" alt="">
        <slot name="body"></slot>
      </div>
      <slot v-if="!warning" name="body"></slot>
    </div>
    <div class="footer">
      <slot name="footer">
        <a-button @click="cancel">取消</a-button>
        <a-button type="primary" @click="ok">确定</a-button>
      </slot>
    </div>
  </a-modal>
</template>

<script setup lang="ts">
import { computed, ref, watch, nextTick } from 'vue'
import { debounce } from '../../utils/index'

const props = withDefaults(defineProps<{
  visible: boolean, // 对话框是否可见
  tipStyle?: boolean, // 是否是提示样式
  fontMaxSize?: number, // label最大字符
  maskClosable?: boolean,
  simple?: boolean,
  size?: string,
  warning?: boolean,
  destroyOnClose: boolean
}>(), {
  visible: false,
  tipStyle: false,
  fontMaxSize: 4,
  maskClosable: false,
  simple: false,
  size: 'small',
  warning: false,
  destroyOnClose: true
})

const showBorderTop = ref(false)
const showBorderBottom = ref(false)

const emit = defineEmits<{
  (e: 'cancel'): void,
  (e: 'ok'): void,
}>()

const classObject = computed(() => {
  return {
    'tipStyleBody': props.tipStyle,
    'simpleStyle': props.simple,
    ['font-size-' + props.fontMaxSize]: true,
    'show-border-top': showBorderTop.value,
    'show-border-bottom': showBorderBottom.value
  }
})

const cancel = () => {
  emit('cancel')
  resetBoder()
}

const ok = () => {
  emit('ok')
  resetBoder()
}

const reachBottom = () => {
  let scrolltop = document.getElementById('scroller')?.scrollTop || 0
  let clientHeight = document.getElementById('scroller')?.clientHeight || 0
  let scrollHeight = document.getElementById('scroller')?.scrollHeight || 0
  let numHeight = scrolltop + clientHeight
  if (scrolltop === 0 && numHeight === scrollHeight) {
    return
  }
  if (scrolltop === 0) {
    showBorderTop.value = false
  } else {
    showBorderTop.value = true
  }
  if (scrollHeight > clientHeight && numHeight > scrollHeight - 1) {
    showBorderBottom.value = false
  } else {
    showBorderBottom.value = true
  }
}

const resetBoder = () => {
  showBorderTop.value = false
  showBorderBottom.value = false
}

watch(() => props.visible, value => {
  if (value) {
    nextTick(() => {
      reachBottom()
      window?.addEventListener('scroll', debounce(reachBottom, 100), true)
    })
  } else {
    window?.removeEventListener('scroll', debounce(reachBottom, 100), true)
  }
})
</script>

<style lang="less">
.ant-modal-middle-dialog textarea.ant-input{
  height: 148px;
  min-height: 32px;
  max-height: 300px;
  overflow-y: auto;
}

.modal-common{
  font-size: 14px;
  .ant-modal-content {
    padding: 0;
  }
  .ant-modal-header{
    padding: 0 24px;
    height: 60px;
    border-bottom: none;
    .ant-modal-title {
      line-height: 60px;
      font-size: 14px;
      font-weight: bold;
      color: rgba(0,20,29,0.75);
    }
  }
  .ant-modal-close-x {
    height: 60px;
    width: 60px;
    font-size: 13px;
    color: #8F939A;
  }
  .ant-modal-body{
      padding: 0;
      .body{
        padding: 12px 40px 24px;
        min-height: 108px;
        max-height: 502px;
        overflow-y: auto;
        &.show-border-top {
          border-top: 1px solid rgba(0, 20, 29, 0.04);
        }
        &.show-border-bottom {
          border-bottom: 1px solid rgba(0, 20, 29, 0.04);
        }
        &.simpleStyle {
          padding: 12px 0;
        }
        .ant-input {
          // padding: 4px 12px;
        }
        .ant-form-item-label{
          width: 98px;
          min-width: 98px;
          margin-top: -1px;
        }
        .ant-form-item{
          display: flex;
          flex-wrap: nowrap;
          margin: 0;
          padding-top: 16px;
          .ant-form-item-label > label {
            color: rgba(0,20,29,0.3);;
          }
          .ant-form-item-label > label::after{
            margin: 0 24px 0 0px;
          }
          .ant-form-item-label > label::before{
            margin-right: 8px;
          }
          .ant-form-item-control-wrapper{
            width: 0;
            flex: 1;
            margin-top: -1px;
            input{
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .ant-form-item-children{
              word-break: break-all;
            }
          }
        }
        .ant-form-item:first-child{
          padding: 0;
        }
        .warning-icon {
          display: flex;
          img {
            margin: 2px 12px 0 0;
            width: 18px;
            height: 18px;
          }
        }
      }
      .tipStyleBody{
        padding-bottom: 64px;
      }
      .font-size-2{
        .ant-form-item{
          .ant-form-item-label{
            width: 66px;
            min-width: 66px;
          }
        }
      }
      .font-size-3{
        .ant-form-item{
          .ant-form-item-label{
            width: 80px;
            min-width: 80px;
          }
        }
      }
      .font-size-4{
        .ant-form-item{
          .ant-form-item-label{
            width: 94px;
            min-width: 94px;
          }
        }
      }
      .font-size-5{
        .ant-form-item{
          .ant-form-item-label{
            width: 108px;
            min-width: 108px;
          }
        }
      }
      .font-size-6{
        .ant-form-item{
          .ant-form-item-label{
            width: 122px;
            min-width: 122px;
          }
        }
      }
      .footer{
        text-align: right;
        padding: 20px 24px;
        height: 72px;
        .ant-btn{
          min-width:72px;
          height: 32px;
        }
        button + button{
          margin-left: 12px;
        }
      }
  }
  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  ::-webkit-scrollbar {
    width: 5px !important;
    height: 5px !important;
    background-color: #cccccc;
  }
  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 1px #cccccc;
    border-radius: 10px;
    background-color: #ffffff;
  }
  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px #cccccc;
    background-color: rgba(0, 20, 29, .1);
  }
}
/*悬浮提示框图标样式*/
.ant-message-success .anticon{
  color: #64C647;
}
.ant-message-error .anticon{
  color: #EE2E3A;
}
.ant-modal-labelW120 .ant-form-item .ant-form-item-label{
  min-width: 120px;
}
.tips-icon {
  font-size: 18px;
  color: #FFA900!important;
  margin-right: 11px;
}
.tip-icon-error {
  font-size: 18px;
  color: #EE2E3A!important;
  margin-right: 11px;
}
.tips-content {
  font-size: 14px;
  color: rgba(0, 20, 29, 0.75);
  vertical-align: text-bottom;
}
.margin-btm16{
  margin-bottom: 16px;
}
.tips-container {
  display: flex;
  .tips-icon {
    margin-top: 3px;
  }
}
</style>
