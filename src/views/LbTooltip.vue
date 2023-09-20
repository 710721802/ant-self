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
					<a-tooltip>
						<template #title>prompt text</template>
						Tooltip will show when mouse enter.
					</a-tooltip>
				</a-card>
			</a-col>

			<a-col :span="12">
				<a-card>
					<h4>全方位</h4>
					<div id="components-a-tooltip-demo-placement">
						<div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
							<a-tooltip placement="topLeft">
								<template #title>
									<span>prompt text</span>
								</template>
								<a-button>TL</a-button>
							</a-tooltip>
							<a-tooltip placement="top">
								<template #title>
									<span>prompt text</span>
								</template>
								<a-button>Top</a-button>
							</a-tooltip>
							<a-tooltip placement="topRight">
								<template #title>
									<span>prompt text</span>
								</template>
								<a-button>TR</a-button>
							</a-tooltip>
						</div>
						<div :style="{ width: `${buttonWidth}px`, float: 'left' }">
							<a-tooltip placement="leftTop">
								<template #title>
									<span>prompt text</span>
								</template>
								<a-button>LT</a-button>
							</a-tooltip>
							<a-tooltip placement="left">
								<template #title>
									<span>prompt text</span>
								</template>
								<a-button>Left</a-button>
							</a-tooltip>
							<a-tooltip placement="leftBottom">
								<template #title>
									<span>prompt text</span>
								</template>
								<a-button>LB</a-button>
							</a-tooltip>
						</div>
						<div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
							<a-tooltip placement="rightTop">
								<template #title>
									<span>prompt text</span>
								</template>
								<a-button>RT</a-button>
							</a-tooltip>
							<a-tooltip placement="right">
								<template #title>
									<span>prompt text</span>
								</template>
								<a-button>Right</a-button>
							</a-tooltip>
							<a-tooltip placement="rightBottom">
								<template #title>
									<span>prompt text</span>
								</template>
								<a-button>RB</a-button>
							</a-tooltip>
						</div>
						<div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
							<a-tooltip placement="bottomLeft">
								<template #title>
									<span>prompt text</span>
								</template>
								<a-button>BL</a-button>
							</a-tooltip>
							<a-tooltip placement="bottom">
								<template #title>
									<span>prompt text</span>
								</template>
								<a-button>Bottom</a-button>
							</a-tooltip>
							<a-tooltip placement="bottomRight">
								<template #title>
									<span>prompt text</span>
								</template>
								<a-button>BR</a-button>
							</a-tooltip>
						</div>
					</div>
				</a-card>
			</a-col>
		</a-row>
	</div>
</template>

<script setup lang="ts">
const buttonWidth = 70
</script>
<style lang="less"></style>