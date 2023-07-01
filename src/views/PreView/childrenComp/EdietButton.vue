<script setup>
/* eslint-disable */
import { useExamStore } from '@/store/examStore';
const dataExam = useExamStore();

</script>
<template>
    <div class="edit-btn show-btn">
        <p class="edit-text" @click="$emit('goEdit')">编辑</p>
        <i class="ri-delete-bin-line" @click="dataExam.deleStore(dataExam.qustData)"></i>
    </div>
</template>
<style lang="scss" scoped>
.pre-view {

    &:hover .show-btn {
        display: block;
        display: flex;
        // border: 1px dashed #CAE0FF;
    }

    .edit-btn {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 10;
        display: none;
        align-items: center;
        // background-color: #A8A8B3;
        border: 1px solid #CAE0FF;
        border-radius: 0rem 8rem 0rem 8rem;
        overflow: hidden;

        .edit-text {
            font-size: 14rem;
            padding: 5rem 12rem;
            // border-bottom-left-radius: 8rem;
            color: #fff;
            background-color: #61A2FF;
        }

        .ri-delete-bin-line {
            font-size: 18rem;
            padding: 5rem 14rem;
            color: #8A8B99;
            background: #F7FAFC;

            // border-top-right-radius: 8rem;
        }
    }
}
</style>