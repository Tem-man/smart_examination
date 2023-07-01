<script setup>
/* eslint-disable */
import { ref } from 'vue'
const props = defineProps(['listData', 'isFouce']);
const goAnchor = (selector) => {
    document.getElementById(selector).scrollIntoView({
        behavior: "smooth"
    });
}
</script>
<template>
    <!-- <a :href="'#' + props.listData.order" class="btn" :class="{ isFouce: props.isFouce }">
                                                            {{ props.listData.order
                                                            }}</a> -->
    <a href="javascript:void(0)" class="btn" :class="{ isFouce: props.isFouce }" @click="goAnchor(props.listData.order)">
        {{ props.listData.order
        }}</a>
</template>
<style lang="scss" scoped>
.btn {
    width: 32rem;
    height: 32rem;
    line-height: 32rem;
    margin: 0 16rem 10rem 0;
    background-color: #E6F0FF;
    border: solid #94C1FF 1px;
    font-size: 14rem;
    font-weight: normal;
    color: #3A8BFF;
    display: inline-block;
    border-radius: 4rem;
    text-align: center;
    cursor: pointer;
    text-decoration: none;

}

.isFouce {
    background-color: #3A8BFF;
    border-color: #3A8BFF;
    color: #FFFFFF;
}
</style>
