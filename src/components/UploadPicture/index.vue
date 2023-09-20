<!--
 * @Author: luojm4
 * @Date: 2023-02-14 13:14:20
 * @LastEditors: luojm4
 * @LastEditTime: 2023-02-16 16:00:00
 * @FilePath: \lenovo-brain-design\src\components\UploadPicture\index.vue
-->
<template>
  <div class="l-upload-picture">
    <div class="upload-container">
      <div class="image-container" v-for="(item, key) in showImageList" :key="key">
        <div class="image-content">
          <img class="image-item" :src="item.url" alt="">
          <img class="delete-icon" src="../../assets/image/icons/icon_gb.png" @click="handleDelete(key)">
        </div>
        <div v-if="item.text" class="picture-layer">{{ item.text }}</div>
      </div>
      <a-upload
        v-if="imageList?.length < props.maxLength"
        v-bind="$attrs"
        :accept="props.accept"
        class="upload-container"
        :showUploadList="false"
        list-type="picture-card"
        :beforeUpload="beforeUpload">
        <div>
          <img
            class="upload-icon"
            width="32"
            src="../../assets/image/icons/icon_add.png"
          />
          <div class="upload-text">添加图片</div>
        </div>
      </a-upload>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref, onMounted, watchEffect } from 'vue';

  interface Props {
    imageList: Array<{url: string, text?: string}>,
    maxLength?: number,
    accept?: string,
  }

 const props = withDefaults(defineProps<Props>(), {
    imageList: () => [
      {
        url: '',
        text: ''
      }
    ],
    maxLength: 5,
    accept: '.jpg, .jpeg, .png, .bmp',
  })

  const emit = defineEmits<{
    (event: 'beforeUpload', value: any): void,
    (event: 'imageDelete', value: number): void
  }>();

  const showImageList = ref<Array<{url: string, text?: string}>>([])

  watchEffect(() => {
    showImageList.value = props.imageList
  })
  

  const beforeUpload = (file: any) => {
    emit('beforeUpload', file)
  }

  const handleDelete = (index: number) => {
    emit('imageDelete', index)
  }

  onMounted(() => {
    console.log(props)
  })

</script>
<style lang="less" scoped>
.l-upload-picture {
  display: flex;
  position: relative;
  :deep(.ant-upload.ant-upload-select-picture-card) {
    background-color: #fff;
  }
  .upload-container {
    display: flex;
  }
  .image-container{
    position: relative;
    margin-right: 24px;
    height: 140px;
    width: 140px;
    border: 1px solid rgba(0, 20, 29, 0.2);
  }
  .image-content {
    .image-item {
      height: 138px;
      width: 138px;
      object-fit: contain;
    }
    .delete-icon {
      display: none;
    }
    .picture-text {
      display: none;
    }
    :deep(.ant-btn-primary) {
      min-width: 108px;
      height: 32px;
    }
    &:hover {
      .delete-icon {
        display: block;
        position: absolute;
        right: -10px;
        top: -10px;
        height: 20px;
        width: 20px;
        cursor: pointer;
      }
      .picture-text {
        display: block;
        position: absolute;
        bottom: 8px;
        left: 16px;
        cursor: pointer;
      }
    }
  }
  .picture-layer {
    width: 100%;
    color: #fff;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background: rgba(0, 20, 29, 0.6);
    position: absolute;
    bottom: 0;
  }
  .upload-container {
    // flex: 1;
    :deep(.ant-upload.ant-upload-select-picture-card) {
      width: 140px;
      height: 140px;
      .ant-upload {
        display: block;
      }
      &:hover {
        border: 1px dashed @theme-color;
        .upload-text {
          color: @theme-color;
        }
        .upload-icon {
          width: 32px;
          height: 32px;
          content: url('../../assets/image/icons/icon_add_hover.png');
        }
      }
    }
    .upload-icon {
      margin-top: 52px;
    }
    .upload-text {
      margin-top: 16px;
      font-size: 12px;
      color: rgba(0, 20, 29, 0.3);
    }
  }
}
</style>