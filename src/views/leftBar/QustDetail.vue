<script setup>
/* eslint-disable */
import { useExamStore } from '@/store/examStore';
const dataExam = useExamStore();
const { storage, isActive, index } = defineProps(['storage', 'isActive', 'index']);

</script>
<template>
    <div class="detail">
        <div class="list-type" :class="{ active: (storage.id + index) == isActive }">
            <span class="qust-index">{{ storage.order }}</span>
            <span class="qust-score">({{ storage.score }} 分)</span>
            <span class="content-title">{{ storage.questVal?.inText }}</span>
        </div>

    </div>
</template>
<style lang="scss" scoped>
.list-type {
    display: flex;
    // align-items: center;
    text-align: left;
    // width: 290rem;
    margin-left: -15rem;
    padding-left: 16rem;
    margin-right: 2rem;
    height: 32rem;
    color: #646873;
    cursor: pointer;
    // margin-bottom: 5rem;

    &:hover {
        background-color: #f0f6ff7c;

    }

    span {

        line-height: 32rem;
    }

    .qust-score {
        padding: 0 3rem;
    }

    .content-title {
        width: 130em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

}

.active {
    color: #3A8BFF;
    background-color: #F0F6FF;

}
</style>