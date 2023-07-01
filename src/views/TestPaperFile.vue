<script setup>
/* eslint-disable */
const props = defineProps(['title'])
</script>
<template>
    <div class="list-li">
        <input type="checkbox" name="" id="">
        <div class="key-title">
            {{ props.title }}
        </div>
    </div>
</template>
<style lang="scss" scoped>
.list-li {
    display: flex;
    align-items: center;
    margin-left: 20rem;
    margin-top: 30rem;

    input {
        height: 14rem;
        width: 14rem;
    }

    .key-title {
        color: #000;
        font-size: 14rem;
        margin-left: 8rem;
    }
}
</style>