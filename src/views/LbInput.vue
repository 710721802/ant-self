<!--
 * @Author: luxiyuan
 * @Date: 2022-11-18 14:29:18
 * @LastEditors: Coco wangkk4@lenovo.com
 * @LastEditTime: 2023-04-06 16:52:15
 * @Description: file content
 * @FilePath: \lenovo-brain-design\src\views\LbInput.vue
-->
<template>
  <div class="comps-usage-container">
    <a-row :gutter="32">
      <a-col :span="12">
        <a-card>
          <h4>默认</h4>
          <l-input v-model="value"></l-input>
          <div class="toggle-icon" >
            <CopyOutlined class="copy-btn" @click="copyCode(defaultCode)" />
          </div>
          <div v-if="isShowCode">
            <highlightjs language="javascript" :code="defaultCode"></highlightjs>
          </div>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <h4>自定义宽度</h4>
          <l-input v-model="value" :width="inputWidth"></l-input>
          <div class="toggle-icon" >
            <CopyOutlined class="copy-btn" @click="copyCode(customWidthCode)" />
          </div>
          <div v-if="isShowCode">
            <highlightjs language="javascript" :code="customWidthCode"></highlightjs>
          </div>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <h4>密码（antd组件库默认）</h4>
          <a-input-password v-model:value="value" type="password" ></a-input-password>
          <div class="toggle-icon" >
            <CopyOutlined class="copy-btn" @click="copyCode(passwordCode)" />
          </div>
          <div v-if="isShowCode">
            <highlightjs language="javascript" :code="passwordCode"></highlightjs>
          </div>
        </a-card>
      </a-col>
      
      <a-col :span="12">
        <a-card>
          <h4>搜索（antd组件库默认）</h4>
          <a-input-search v-model:value="value"></a-input-search>
          <div class="toggle-icon" >
            <CopyOutlined class="copy-btn" @click="copyCode(searchCode)" />
          </div>
          <div v-if="isShowCode">
            <highlightjs language="javascript" :code="searchCode"></highlightjs>
          </div>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <h4>禁用</h4>
          <l-input v-model="value" disabled ></l-input>
          <l-input v-model="value" showCount disabled style="margin-top: 10px"></l-input>
          <div class="toggle-icon" >
            <CopyOutlined class="copy-btn" @click="copyCode(disableCode)" />
          </div>
          <div v-if="isShowCode">
            <highlightjs language="javascript" :code="disableCode"></highlightjs>
          </div>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <h4>带清除（antd组件库默认）</h4>
          <l-input v-model="value" allowClear ></l-input>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <h4>带校验</h4>
          <l-input v-model="value" showRules></l-input>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <h4>显示字数</h4>
          <l-input v-model="value" showCount></l-input>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <h4>自定义校验规则</h4>
          <l-input v-model="value" showRules showCount :maxlength="20" :rulesOptions="rulesOptions"></l-input>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <h4>自定义提示文字</h4>
          <l-input v-model="testVal" :maxlength="20" placeholder="限制输入20个字"></l-input>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <h4>带前缀标签</h4>
          <l-input v-model="value">
            <template #addonBefore>https://</template>
          </l-input>
          <l-input v-model="value" style="margin-top: 10px;">
            <template #addonBefore>
              <AlipayOutlined />
            </template>
          </l-input>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <h4>带后缀标签</h4>
          <l-input v-model="value">
            <template #addonAfter>.com</template>
          </l-input>
          <l-input v-model="value" style="margin-top: 10px;">
            <template #addonAfter>
              <AlipayOutlined />
            </template>
          </l-input>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <h4>带前缀</h4>
          <l-input v-model="value">
            <template #prefix>https://</template>
          </l-input>
          <l-input v-model="value" style="margin-top: 10px;">
            <template #prefix>
              <AlipayOutlined />
            </template>
          </l-input>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <h4>带后缀</h4>
          <l-input v-model="value">
            <template #suffix>.com</template>
          </l-input>
          <l-input v-model="value" style="margin-top: 10px;">
            <template #suffix>
              <SearchOutlined />
            </template>
          </l-input>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <h4>带前后缀</h4>
          <l-input v-model="value">
            <template #prefix>￥</template>
            <template #suffix>元</template>
          </l-input>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <h4>验证错误</h4>
          <a-form
              ref="formRef"
              :model="formState"
              :rules="rules"
          >
              <a-form-item label="测试四个" name="value1">
                  <l-input v-model="formState.value1" showRules allowClear></l-input>
              </a-form-item>
          </a-form>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <h4>多配置混合</h4>
          <l-input v-model="value" showCount allowClear showRules>
            <template #addonBefore>https://</template>
            <template #addonAfter>.com</template>
            <template #prefix>￥</template>
            <template #suffix>元</template>
          </l-input>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <h4>搜索框</h4>
          <l-input-search 
            v-model="searchKey" 
            @search="searchFunc"
            width="240px"
            :style="{height: '50px'}"
          ></l-input-search>
        </a-card>
      </a-col>

    </a-row>
    
  </div>
</template>
<script setup lang="ts">
  import { ref, reactive, onMounted } from 'vue';
  import { message } from 'ant-design-vue'
  import { ArrowsAltOutlined, AlipayOutlined, SearchOutlined, CopyOutlined } from '@ant-design/icons-vue';

  const inputWidth = '220px';
  const rulesOptions = [
  {
      title: '长度在1-20位字符以内',
      checkLength: true,
    }
  ]
  const value = ref('测试组件');
  const testVal = ref('')
  const isShowCode = ref(false)
  const searchKey = ref('AA');

  const searchFunc = () => {
    console.log('searchFunc', searchKey.value)
  }

  const formRef = ref()
  const formState = reactive({
      value1: ' dslfjj',
  })
  const rules = reactive({
      value1: [
        { required: true, trigger: 'blur' },
        { pattern: /^(?!\s)(?!.*\s$)/, message: '格式不正确', trigger: 'blur' }
      ]
  })

  const copyCode = (code) => {
    const copyToClipboard = (text) => navigator.clipboard.writeText(text)
    copyToClipboard(code)
    message.success('已复制到剪贴板', 1)
  }

  const defaultCode = `<l-input v-model="value"></l-input>`
  const customWidthCode = `<l-input v-model="value" :width="inputWidth"></l-input>`
  const passwordCode = `<a-input-password v-model:value="value" type="password"></a-input-password>`
  const searchCode = `<a-input-search v-model:value="value"></a-input-search>`
  const disableCode = `<l-input v-model="value" disabled></l-input>
<l-input v-model="value" showCount disabled style="margin-top: 10px"></l-input>`


  onMounted(() => {
    formRef.value.validate()
  })
</script>