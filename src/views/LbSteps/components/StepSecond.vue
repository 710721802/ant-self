<template>
  <div class="index">第二步</div>
  <div class="action">
    <a-button @click="$emit('next', 0)">上一步</a-button>
    <a-button @click="$emit('next', 2)">下一步</a-button>
  </div>
</template>
<style lang="less" scoped>
.index {
  height: 200px;
  line-height: 200px;
  text-align: center;
  font-weight: bold;
}
</style>