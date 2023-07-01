<script setup>
/* eslint-disable */
import { inputVal } from './store';

</script>
<template>
    <div class="data-search">
        <input type="text" placeholder="请输入姓名或学号" v-model="inputVal">
        <span><i class="ri-search-line"></i></span>
    </div>
</template>

<style lang="scss" scoped>
.data-search {
    position: relative;
    left: 300rem;
    margin-bottom: 20rem;

    span {
        position: absolute;
        // padding: 0 10px;
        left: 150rem;
        top: 16rem;
        cursor: pointer;
        z-index: 10;
        font-size: 16rem;
        color: #ACB4BF;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }

    input {
        height: 30rem;
        // width: 180rem;
        font-size: 12rem;
        color: #131B26;
        // color: #ACB4BF;
        outline: none;
        border: 1px solid #D4D6D9;
        background: none;
        padding: 0 14px;
        border-radius: 40px;
        caret-color: #3A8BFF;

        &:focus,
        &:hover {
            border: 1px solid #3A8BFF;

        }

        &::-webkit-input-placeholder {
            color: #ACB4BF;

        }

        &::-moz-placeholder {
            color: #ACB4BF;

        }

        &::-ms-input-placeholder {
            color: #ACB4BF;

        }
    }


}
</style>

