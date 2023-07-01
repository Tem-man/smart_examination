<script setup>
/* eslint-disable */
import TpButton from './TpButton.vue';
import { useExamStore } from '@/store/examStore';
const dataExam = useExamStore();
const props = defineProps(['qusType']);

</script>
<template>
    <div class="add-title">
        <div class="topic-left">添加题目</div>
        <div class="qustion-type" v-for="(item, index) in props.qusType" :key="index">
            <TpButton @click="$emit('isView', index, item)">{{ item.title }}</TpButton>
        </div>
        <div class="smart-btn">智能导入</div>
        <div class="select-btn">选题</div>

    </div>
</template>
<style lang="scss" scoped>
.add-title {
    position: sticky;
    top: 40rem;
    z-index: 90;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70rem;
    background-color: #fff;
    box-shadow: 0px 2px 10px 0px rgba(237, 238, 240, 0.5);
    border-radius: 8px;

    .topic-left {
        font-size: 14rem;
        padding-right: 30rem;
        color: #a8a8b3;
    }

    .smart-btn,
    .select-btn {
        color: #3A8BFF;
        font-size: 14rem;
        padding: 0 12rem;

    }

    .smart-btn {
        padding-left: 30rem;
    }

}
</style>