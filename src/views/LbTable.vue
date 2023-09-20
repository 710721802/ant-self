<!--
 * @Author: wanghq18 wanghq18@lenovo.com
 * @Date: 2023-02-20 10:31:55
 * @LastEditors: luxiyuan
 * @LastEditTime: 2023-08-30 16:49:51
 * @FilePath: \lenovo-brain-design\src\views\LbTable.vue
 * @Description: 
-->
<template>
  <div class="comps-usage-container">
    <a-row :gutter="32">
      <a-col :span="12">
        <a-card>
          <h4>默认-编辑按钮</h4>
          <a-table
            :pagination="false"
            :columns="columns"
            :data-source="data"
            :row-selection="rowSelection"
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
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card>
          <h4>带滚动条-最后一列右对齐</h4>
          <a-table
            :pagination="false"
            :columns="columns"
            :data-source="[...data,...data]"
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
        </a-card>
      </a-col>
      <a-col :span="24">
        <a-card>
          <h4>table+分页-二次封装</h4>
          <l-table 
            :columns="columns"
            :data-source="data"
            :total="40"
            @update="updateTableData"
          >
            <template #bodyCell="{column, text, index}"	>
              <template v-if="column.dataIndex === 'name'">
                <a href="javascript:;">{{ index }}</a>
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
          </l-table>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'


export default defineComponent({
  
  setup () {
    const data = ref([
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
    ])
    const updateTableData = (params) => {
      console.log('updateTableData...', params);
    }
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
    const rowSelection = ref([])
    return {
      data,
      columns,
      rowSelection,
      updateTableData,
    }
  }
})
</script>