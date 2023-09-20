<!--
 * @Author: Coco wangkk4@lenovo.com
 * @Date: 2023-02-24 10:50:01
 * @LastEditors: Coco wangkk4@lenovo.com
 * @LastEditTime: 2023-04-24 18:37:24
 * @FilePath: /lenovo-brain-design/src/components/Login/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="lb-login-container">
    <!-- <div class="login-bg"> -->
      <img class="login-bg" :src="bgUrl" alt="">
    <!-- </div> -->
    <div class="content-box">
      <div class="desc-content">
        <div class="intro-box">
        <slot name="intro">
            <div>
              <div class="logo">
                <img :src="logo" alt="">
              </div>
              <div class="tag">{{ tag }}</div>
              <div class="title">{{ title }}
                <span v-if="desc" class="line"></span> 
              </div>
              <div class="desc">{{ desc }}</div>
            </div>
          </slot>
        </div>
      </div>
      <div class="form-content">
        <div class="form-box">
          <div class="login-form-card">
            <div class="lb-form-header">登录</div>
            <div class="lb-form-body">
              <a-form
                ref="formRef"
                :model="formState"
                :rules="rules"
                name="normal_login"
                class="login-form"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
              >
                <a-form-item class="custom-form-item"
                  name="username"
                >
                <a-input class="custom-large" size="large" v-model:value="formState.username" @focus="()=> removeError('username')" placeholder="账户"></a-input>
                </a-form-item>
      
                <a-form-item class="custom-form-item"
                  name="password"
                >
                  <a-input-password class="custom-large" size="large" autocomplete="off" v-model:value="formState.password" @focus="()=> removeError('password')" @pressEnter="onFinish" placeholder="密码">
                  </a-input-password>
                </a-form-item>
      
                <a-form-item class="custom-captcha-item"
                    name="captchaValue"
                  >
                  <div class="code-item">
                    <a-input class="custom-large" size="large" v-model:value="formState.captchaValue" @focus="()=> removeError('captchaValue')"  :maxlength="4" placeholder="验证码"></a-input>
                    <img class="code-img" :src="captchaImg" alt="验证码" @click="getCaptcha" width="96" height="39">
                  </div>
                </a-form-item>
      
                <a-form-item name="isAgree" class="custom-form-item">
                  <a-checkbox v-model:checked="formState.isAgree" @change="()=> removeError('isAgree')">
                    <span class="agree-text">同意并愿意遵守
                      <router-link tag="a" target="_blank" :to="{path: '/user-license'}">《用户许可协议》</router-link>
                    </span>
                  </a-checkbox>
                </a-form-item>
                <div class="forgot-pwd" v-if="hasForgot">
                  <router-link class="pwd" tag="a" :to="{path: '/forgot-pwd'}">忘记密码 ？</router-link>
                </div>
                <a-form-item>
                  <a-button class="custom-large" size="large" block type="primary" html-type="submit">
                    登录
                  </a-button>
                </a-form-item>
              </a-form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lb-login-footer">
      <slot name="footer">
        <div class="powered">Powered by Lenovo Brain</div>
        <div class="copyright">版权所有: {{ currentYear }}-Present 联想集团 
          <a-divider class="vertical-line" type="vertical" />
          <a class="copyright-link" target="_blank" :href="uaUrl">用户协议</a>
          <a-divider class="vertical-line" type="vertical" />
          <router-link tag="a" class="copyright-link" target="_blank" :to="{path: '/source-license'}">开源软件</router-link>
        </div>
      </slot>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref, reactive, computed } from 'vue';
  import type { Rule } from 'ant-design-vue/es/form';
  import type { FormInstance } from 'ant-design-vue';
  
  export interface FormState {
    username: string;
    password: string;
    captchaValue: string;
    isAgree: boolean;
    uuid?: string;
  }
  
  const props = withDefaults(defineProps<{
    captchaApi: string;
    bgUrl?: string;
    logo?: string;
    tag?: string;
    title?: string;
    desc?: string;
    hasForgot?: boolean;
    uaUrl?: string;
  }>(), {
    captchaApi: '',
    bgUrl: '',
    logo: require('../../assets/image/login/logo-common.png'),
    tag: '',
    title: '',
    desc: '',
    hasForgot: false,
    uaUrl: 'https://download.lenovo.com/lenovo/lla/coe-30002-01_lenovo_license_agreement_zh-cn.pdf'
  })

  const emits = defineEmits<{
    (event: 'submit', value: FormState): void,
  }>();

  const currentYear = new Date().getFullYear(); // 当前时间
  const formRef = ref<FormInstance>();  // 表单元素
  const formState = reactive<FormState>({  // 表单填充值
    username: '',
    password: '',
    captchaValue: '',
    isAgree: false,  // 用户许可协议复选框
  });
  const captchaImg = ref<string>('')  // 验证码url
  const oldUuid = ref<string>('')
  
  /**
   * @description: 获取uuid
   * @return {void}
  */
  const getUuid = () => {
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (res) {
      var randomNum = Math.random() * 16 | 0
      var data = res === 'x' ? randomNum : (randomNum & 0x3 | 0x8)
      return data.toString(16)
    })
    return uuid;
  }

    /**
     * @description: 获取验证码图片
     * @return {void}
    */
    const getCaptcha = () => {
      const newUuid = getUuid();
      if (!!oldUuid.value) {
        captchaImg.value = `${props.captchaApi}?uuid=${newUuid}&oldUuid=${oldUuid.value}`;
      } else {
        captchaImg.value = `${props.captchaApi}?uuid=${newUuid}`;
      }
      oldUuid.value = newUuid;
    }
    getCaptcha();
  /**
   * @description: 输入框获取焦点时，清空报错提示
   * @return {void}
  */
  const removeError = (name: string) => {
    formRef.value?.clearValidate([name])
  }

  /**
   * @description: 账户校验
   * @return {void}
  */
  let validateName = async (rule, value) => {
    if (value.trim() === '') {
      return Promise.reject('请输入账户')
    } else {
      return Promise.resolve()
    }
  }

  /**
   * @description: 密码校验
   * @return {void}
  */
  let validatePassword = async (rule, value) => {
    if (value.trim() === '') {
      return Promise.reject('请输入密码')
    } else {
      return Promise.resolve()
    }
  }

  /**
   * @description: 验证码校验
   * @return {void}
  */
  let validateCode = async (rule, value) => {
    if (value.trim() === '') {
      return Promise.reject('请输入验证码')
    } else {
      return Promise.resolve()
    }
  }

  /**
   * @description: 勾选协议
   * @return {void}
  */
  let validateIsAgree = async (rule, value) => {
    if (!value) {
      return Promise.reject('请先阅读并同意《用户许可协议》') 
    } else {
      return Promise.resolve()
    }
  }

   // 表单校验规则定义
   const rules: Record<string, Rule[]> = {
      username: [{ validator: validateName, trigger: 'blur' }],
      password: [{ validator: validatePassword, trigger: 'blur' }],
      captchaValue: [{ validator: validateCode, trigger: 'blur' }],
      isAgree: [{ validator: validateIsAgree, trigger: 'change' }],
  }

  const onFinish = (values: any) => {
    emits('submit', {...values, uuid: oldUuid.value})
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const disabled = computed(() => {
    return !(formState.username && formState.password);
  });

  defineExpose({
    updateCaptcha: getCaptcha
  });
</script>
<style scoped lang="less">
  .lb-login-container {
    position: relative;
    height: 100%;
    width: 100%;
    // background: url('../../assets/image/login-bg.png') no-repeat;
    // background-size: 100% 100%;
    .login-bg {
      width: 100%;
      height: 100%;
      // position: fixed;
      position: absolute;
      object-fit: cover;
      z-index: -1;
    }
    .content-box {
      display: flex;
      height: 100%;
      margin: 0 auto;
      .desc-content {
        width: 100%;
        .logo {
          position: absolute;
          top: 6%;
        }
        .intro-box {
          display: flex;
          height: 100%;
          align-items: center;
          padding: 0 22% 0 8%;
          position: relative;
          .tag {
            display: inline-block;
            padding: 0 12px;
            height: 40px;
            line-height: 40px;
            background: linear-gradient(90deg,#00D6FF 0%,#00ADFF 100%);
            font-size: 26px;
            color: #fff;
            text-align: center;
            margin-bottom: 8px;
          }
          .title {
            position: relative;
            font-size: 58px;
            font-weight: 700;
            color: #081319;
            padding-bottom: 34px;
            box-sizing: content-box;
            margin-bottom: 60px;
          }
          .desc {
            font-size: 20px;
            font-weight: 400;
            line-height: 34px;
            color: rgba(8,19,25,0.5);
          }
          .line {
            display: inline-block;
            height: 6px;
            width: 120px;
            background: rgba(8,19,25,.8);
            position: absolute;
            bottom: 0;
            left: 0;
          }
        }
      }
      .form-content {
        padding-right: 5%;
        .form-box {
          height: 100%;
          display: flex;
          align-items: center;
          .login-form-card {
            width: 440px;
            padding: 56px 70px 36px;
            background: linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.8) 100%);
            box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.1);
            border-radius: 6px;
            border: 0px solid rgba(8,19,25,0.3);
            .lb-form-header {
              font-size: 16px;
              color: #081319cc;
              margin-bottom: 20px;
            }
            .lb-form-body {
              .login-form {
                .code-item {
                  display: flex;
                  align-items: center;
                }
                .code-img {
                  margin-left: 27px;
                  cursor: pointer;
                }
                .agree-text{
                  font-size: 12px;
                  color: #606266;
                  a {
                    color:#00ADFF;
                    &:hover{
                      color: #009BE5;
                    }
                  }
                }
                .forgot-pwd {
                  font-size: 12px;
                  margin-bottom: 8px;
                  text-align: right;
                  .pwd {
                    color: rgba(0,20,29,.5);
                  }
                }
                .custom-form-item {
                    &.ant-form-item {
                      margin-bottom: 30px;
                    }
                    &.ant-form-item-with-help {
                      margin-bottom: 6px;
                    }
                }
                .custom-captcha-item {
                  &.ant-form-item {
                      margin-bottom: 10px;
                    }
                    &.ant-form-item-with-help {
                      margin-bottom: 0px;
                    }
                }
                .custom-large {
                  &.ant-input-lg {
                    height: 48px;
                  }
                  &.ant-input-password-large {
                    height: 48px;
                  }
                  &.ant-btn-lg {
                    height: 48px;
                  }
                }

              }
            }
          }
        }
      }
    }
    .lb-login-footer {
      position: absolute;
      bottom: 22px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 12px;
      font-weight: 400;
      color: #00141d4d;
      .powered {
        text-align: center;
        margin-bottom: 20px;
      }
      .copyright {
        .vertical-line {
          background: rgba(0,20,29,.3);
        }
        .copyright-link {
          margin-left: 6px;
        }
      }
    }
  }

  @media screen and (max-width: 1440px){
    .lb-login-container {
      .content-box {
        width: 100%;
        .desc-content {
          .intro-box {
            padding: 0 12% 0 8%;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1920px){
    .lb-login-container {
      .content-box {
        width: 100%;
        
      }
    }
  }
  @media screen and (min-width: 1920px){
    .lb-login-container {
      .content-box {
        width: 1920px;
        .desc-content {
          .intro-box {
            padding: 0 356px 0 120px;
          }
        }
        .form-content {
          padding-right: 206px;
        }
      }
    }
  }
</style>