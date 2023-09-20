<template>
  <div class="comps-usage-container">
    <a-row :gutter="32">
      <a-col :span="12">
        <a-card>
          <h4>提示</h4>
          <a-button type="primary" @click="modalStatus.visible1 = true">打开弹窗</a-button>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card>
          <h4>表单（2字）</h4>
          <a-button type="primary" @click="modalStatus.visible2 = true">打开弹窗</a-button>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card>
          <h4>表单（3字）</h4>
          <a-button type="primary" @click="modalStatus.visible3 = true">打开弹窗</a-button>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card>
          <h4>表单（4字）</h4>
          <a-button type="primary" @click="modalStatus.visible4 = true">打开弹窗</a-button>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card>
          <h4>表单（5字）</h4>
          <a-button type="primary" @click="modalStatus.visible5 = true">打开弹窗</a-button>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card>
          <h4>表单（6字）</h4>
          <a-button type="primary" @click="modalStatus.visible6 = true">打开弹窗</a-button>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card>
          <h4>内部滚动</h4>
          <a-button type="primary" @click="modalStatus.visible7 = true">打开弹窗</a-button>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card>
          <h4>大小-中</h4>
          <a-button type="primary" @click="modalStatus.visible8 = true">打开弹窗</a-button>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card>
          <h4>大小-大</h4>
          <a-button type="primary" @click="modalStatus.visible9 = true">打开弹窗</a-button>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card>
          <h4>表格</h4>
          <a-button type="primary" @click="modalStatus.visible10 = true">打开弹窗</a-button>
        </a-card>
      </a-col>
    </a-row>
  </div>
  <!-- 提示 -->
  <l-modal
    :visible="modalStatus.visible1"
    title="提示"
    tipStyle
    warning
    @ok="modalStatus.visible1 = false"
    @cancel="modalStatus.visible1 = false"
  >
    <template #body>
      <span>您确定要删除吗？</span>
    </template>
  </l-modal>
  <!-- 表单2字 -->
  <l-modal
    :visible="modalStatus.visible2"
    title="提示"
    :fontMaxSize="2"
    @ok="modalStatus.visible2 = false"
    @cancel="modalStatus.visible2 = false"
  >
    <template #body>
      <a-form
        :model="formState"
      >
        <a-form-item label="用户" name="username">
          <l-input></l-input>
        </a-form-item>
        <a-form-item label="密码" name="password">
          <l-input></l-input>
        </a-form-item>
    </a-form>
    </template>
  </l-modal>
  <!-- 表单3字 -->
  <l-modal
    :visible="modalStatus.visible3"
    title="提示"
    :fontMaxSize="3"
    @ok="modalStatus.visible3 = false"
    @cancel="modalStatus.visible3 = false"
  >
    <template #body>
      <a-form
        :model="formState"
      >
        <a-form-item label="用户名" name="username">
          <l-input showRules></l-input>
        </a-form-item>
        <a-form-item label="密码" name="password">
          <l-input></l-input>
        </a-form-item>
    </a-form>
    </template>
  </l-modal>
  <!-- 表单4字 -->
  <l-modal
    :visible="modalStatus.visible4"
    title="提示"
    @ok="modalStatus.visible4 = false"
    @cancel="modalStatus.visible4 = false"
  >
    <template #body>
      <a-form
        :model="formState"
      >
        <a-form-item label="用户名称" name="username">
          <l-input></l-input>
        </a-form-item>
        <a-form-item label="密码" name="password">
          <l-input></l-input>
        </a-form-item>
    </a-form>
    </template>
  </l-modal>
  <!-- 表单5字 -->
  <l-modal
    :visible="modalStatus.visible5"
    title="提示"
    :fontMaxSize="5"
    @ok="modalStatus.visible5 = false"
    @cancel="modalStatus.visible5 = false"
  >
    <template #body>
      <a-form
        :model="formState"
      >
        <a-form-item label="用户名名称" name="username">
          <l-input></l-input>
        </a-form-item>
        <a-form-item label="密码" name="password">
          <l-input></l-input>
        </a-form-item>
    </a-form>
    </template>
  </l-modal>
  <!-- 表单6字 -->
  <l-modal
    :visible="modalStatus.visible6"
    title="提示"
    :fontMaxSize="6"
    @ok="modalStatus.visible6 = false"
    @cancel="modalStatus.visible6 = false"
  >
    <template #body>
      <a-form
        :model="formState"
      >
        <a-form-item label="用户名名名称" name="username">
          <l-input></l-input>
        </a-form-item>
        <a-form-item label="密码" name="password">
          <l-input></l-input>
        </a-form-item>
    </a-form>
    </template>
  </l-modal>
  <!-- 滚动 -->
  <l-modal
    :visible="modalStatus.visible7"
    title="提示"
    @ok="modalStatus.visible7 = false"
    @cancel="modalStatus.visible7 = false"
  >
    <template #body>
      <div>{{ longText }}</div>
    </template>
  </l-modal>
  <!-- 大小-中 -->
  <l-modal
    :visible="modalStatus.visible8"
    title="提示"
    size="middle"
    @ok="modalStatus.visible8 = false"
    @cancel="modalStatus.visible8 = false"
  >
    <template #body>
      <div>{{ longText }}</div>
    </template>
  </l-modal>
  <!-- 大小-大 -->
  <l-modal
    :visible="modalStatus.visible9"
    title="提示"
    size="large"
    @ok="modalStatus.visible9 = false"
    @cancel="modalStatus.visible9 = false"
  >
    <template #body>
      <div>{{ longText }}</div>
    </template>
  </l-modal>
  <!-- 表格 -->
  <l-modal
    :visible="modalStatus.visible10"
    title="表格"
    size="large"
    @ok="modalStatus.visible10 = false"
    @cancel="modalStatus.visible10 = false"
  >
    <template #body>
      <a-table
        :pagination="false"
        :columns="columns"
        :data-source="data"
        :scroll="{ x: 1300, y: 200 }"
      >
        <template #bodyCell="{ column, text }">
          <template v-if="column.dataIndex === 'name'">
            <a href="javascript:;">{{ text }}</a>
          </template>
          <template v-if="column.dataIndex === 'action'">
            <a-button
              type="link"
            >
              编辑
            </a-button>
            <a-button
              type="link"
            >
              删除
            </a-button>
          </template>
        </template>
      </a-table>
    </template>
  </l-modal>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
const modalStatus = reactive({
  visible1: false,
  visible2: false,
  visible3: false,
  visible4: false,
  visible5: false,
  visible6: false,
  visible7: false,
  visible8: false,
  visible9: false,
  visible10: false,
});
const formState = reactive({
  username: '',
  password: '',
});
const longText = ref(`很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长
  的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的
  文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长
  的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很
  长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很
  长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长
  的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文
  文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长
  的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很
  长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很
  长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长
  的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文
  文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长
  的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很
  长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很
  长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长
  的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文
  字很长的文字很长的文字很长的文字`)

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: true,
  },
  {
    title: '长文本',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: true,
  },
  {
    title: '编辑',
    dataIndex: 'action',
    width: 160,
  },
];
</script>