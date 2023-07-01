<script setup>
/* eslint-disable */
const { prop, label } = defineProps(['prop', 'label'])
</script>
<template>
    <th>{{ label }}</th>
</template>

<style lang="scss" scoped>
th {
    height: 34rem;
    line-height: 34rem;
    padding: 0 4rem;
    background-color: #42b983;
}
</style>