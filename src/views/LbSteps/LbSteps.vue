<template>
  <div>
    <h1 class="title">可以点击切换(展示数据)</h1>
    <l-steps
      v-model:current="steps1"
      :dataSources="dataSources1"
      @change="changeStep"
    ></l-steps>
    <div class="component" v-if="steps1 === 0">第一步</div>
    <div class="component" v-if="steps1 === 1">第二步</div>
    <div class="component" v-if="steps1 === 2">第三步</div>
    <div class="component" v-if="steps1 === 3">第四步</div>
    <div class="line"></div>
    <div class="box">
      <h1 class="title">不可点击切换(步骤创建)</h1>
      <l-steps
        v-model:current="steps2"
        :dataSources="dataSources2"
        @change="changeStep2"
      ></l-steps>
      <component :is="stepComponent" @next="action"></component>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref, watchEffect } from "vue";
import stepFirst from "./components/StepFirst.vue";
import stepSecond from "./components/StepSecond.vue";
import stepThird from "./components/StepThird.vue";
import stepFourth from "./components/StepFourth.vue";

const dataSources1 = reactive([
  { title: "第一步", disabled: false },
  { title: "第二步", disabled: false },
  { title: "第三步", disabled: false },
  { title: "第四步", disabled: false },
]);
const dataSources2 = reactive([
  { title: "第一步", disabled: false },
  { title: "第二步", disabled: false },
  { title: "第三步", disabled: false },
  { title: "第四步", disabled: false },
]);
const componentMap = {
  0: stepFirst,
  1: stepSecond,
  2: stepThird,
  3: stepFourth,
};
const stepComponent = ref(componentMap[0]);
const steps1 = ref(0);
const steps2 = ref(0);

watchEffect(() => {
  for (let index = 0; index < dataSources2.length; index++) {
    dataSources2[index].disabled = steps2.value < index ? true : false;
  }
  if (steps2.value === dataSources2.length - 1) {
    dataSources2.forEach((item) => {
      item.disabled = true;
    });
  }
});

const changeStep = (current: number) => {
  steps1.value = current;
};
const changeStep2 = (current: number) => {
  steps2.value = current;
  changeComponent(current);
};
const changeComponent = (current: number) => {
  stepComponent.value = componentMap[current];
};
const action = (index: number) => {
  changeStep2(index);
};
</script>
<style lang="less" scoped>
.title {
  text-align: center;
}
.component {
  text-align: center;
  height: 200px;
  line-height: 200px;
  font-weight: bold;
}
.line {
  border: 1px dashed #ccc;
  margin: 10px 0;
}
</style>
