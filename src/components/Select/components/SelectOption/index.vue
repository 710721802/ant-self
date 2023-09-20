<template>
    <div class="l-select-option"></div>
</template>
<script lang="ts" setup>
const props = withDefaults(defineProps<{
    value: string | number
}>(), {
    value: ''
});

</script>
<style lang="less" scoped>

</style>
