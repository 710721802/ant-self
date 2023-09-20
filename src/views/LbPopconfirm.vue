<!--
 * @Author: Coco wangkk4@lenovo.com
 * @Date: 2022-11-28 09:57:06
 * @LastEditors: Coco wangkk4@lenovo.com
 * @LastEditTime: 2022-11-28 10:59:20
 * @FilePath: /lenovo-brain-design/src/views/LbRadio.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<div class="comps-usage-container">
		<a-row :gutter="32">
			<a-col :span="12">
				<a-card>
					<h4>默认</h4>
					<a-popconfirm title="Are you sure delete this task?" ok-text="确定" cancel-text="取消" @confirm="confirm"
						@cancel="cancel">
						<a href="#">Delete</a>
					</a-popconfirm>
				</a-card>
			</a-col>

			<a-col :span="12">
				<a-card>
					<h4>全方位</h4>
					<div id="components-a-popconfirm-demo-placement">
						<div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
							<a-popconfirm placement="topLeft" ok-text="Yes" cancel-text="No" @confirm="confirm">
								<template #title>
									<p>{{ text }}</p>
								</template>
								<a-button>TL</a-button>
							</a-popconfirm>
							<a-popconfirm placement="top" ok-text="Yes" cancel-text="No" @confirm="confirm">
								<template #title>
									<p>{{ text }}</p>
								</template>
								<a-button>Top</a-button>
							</a-popconfirm>
							<a-popconfirm placement="topRight" ok-text="Yes" cancel-text="No" @confirm="confirm">
								<template #title>
									<p>{{ text }}</p>
								</template>
								<a-button>TR</a-button>
							</a-popconfirm>
						</div>
						<div :style="{ width: `${buttonWidth}px`, float: 'left' }">
							<a-popconfirm placement="leftTop" ok-text="Yes" cancel-text="No" @confirm="confirm">
								<template #title>
									<p>{{ text }}</p>
								</template>
								<a-button>LT</a-button>
							</a-popconfirm>
							<a-popconfirm placement="left" ok-text="Yes" cancel-text="No" @confirm="confirm">
								<template #title>
									<p>{{ text }}</p>
								</template>
								<a-button>Left</a-button>
							</a-popconfirm>
							<a-popconfirm placement="leftBottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
								<template #title>
									<p>{{ text }}</p>
								</template>
								<a-button>LB</a-button>
							</a-popconfirm>
						</div>
						<div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
							<a-popconfirm placement="rightTop" ok-text="Yes" cancel-text="No" @confirm="confirm">
								<template #title>
									<p>{{ text }}</p>
								</template>
								<a-button>RT</a-button>
							</a-popconfirm>
							<a-popconfirm placement="right" ok-text="Yes" cancel-text="No" @confirm="confirm">
								<template #title>
									<p>{{ text }}</p>
								</template>
								<a-button>Right</a-button>
							</a-popconfirm>
							<a-popconfirm placement="rightBottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
								<template #title>
									<p>{{ text }}</p>
								</template>
								<a-button>RB</a-button>
							</a-popconfirm>
						</div>
						<div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
							<a-popconfirm placement="bottomLeft" ok-text="Yes" cancel-text="No" @confirm="confirm">
								<template #title>
									<p>{{ text }}</p>
								</template>
								<a-button>BL</a-button>
							</a-popconfirm>
							<a-popconfirm placement="bottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
								<template #title>
									<p>{{ text }}</p>
								</template>
								<a-button>Bottom</a-button>
							</a-popconfirm>
							<a-popconfirm placement="bottomRight" ok-text="Yes" cancel-text="No" @confirm="confirm">
								<template #title>
									<p>{{ text }}</p>
								</template>
								<a-button>BR</a-button>
							</a-popconfirm>
						</div>
					</div>
				</a-card>
			</a-col>
		</a-row>
	</div>
</template>

<script setup lang="ts">
import { message } from 'ant-design-vue'
const buttonWidth = 70
const text = 'Are you sure to delete this taskAre you sure to delete this taskAre you sure to delete this task?'
const confirm = (e: MouseEvent) => {
	console.log(e);
	message.success('Click on Yes');
}
const cancel = (e: MouseEvent) => {
	console.log(e);
	message.error('Click on No');
}
</script>
<style lang="less">

</style>