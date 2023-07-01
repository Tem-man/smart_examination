<script setup>
/* eslint-disable */
import { ref } from 'vue';
const props = defineProps(['list', 'titleIndex']);
let cnNum = ref('');
// let id = 4;
switch (props.titleIndex) {
    case 0:
        cnNum.value = "一";
        break;
    case 1:
        cnNum.value = "二";
        break;
    case 2:
        cnNum.value = "三";
        break;
    case 3:
        cnNum.value = "四";
        break;
    case 4:
        cnNum.value = "五";
        break;
}

</script>
<template>
    <div class="nav-item">
        <p class="nav-title">{{ cnNum }} <span>.</span> <span>{{ props.list.title }}</span></p>
        <slot name="navBtn"></slot>

    </div>
</template>
<style lang="scss" scoped>
.nav-item {
    margin-top: 20rem;
    margin-left: 20rem;
    // margin-bottom: 10rem;

    .nav-title {
        margin-bottom: 16rem;
        font-size: 13rem;
        color: #131B26;

    }
}
</style>
