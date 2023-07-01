<script setup></script>
<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>
<style lang="scss" scoped>
.btn {
    display: inline-block;
    margin: 0rem 10rem 0 4rem;
    padding: 6rem 16rem;
    font-size: 14rem;
    border: 1px solid #DADAE8;
    border-radius: 20rem;
    white-space: nowrap;
    color: #646873;
    background: #fff;
    cursor: pointer;
    text-align: center;

    &:hover {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
}
</style>