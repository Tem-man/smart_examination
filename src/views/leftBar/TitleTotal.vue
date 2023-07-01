<script setup>
import { useExamStore } from '@/store/examStore';
const dataExam = useExamStore();
</script>
<template>
    <div class="title-total">
        <span>题量</span>
        <span>{{ dataExam.totalOrder || 0 }}</span>
        <span>,</span>
        <span class="total-score">总分</span>
        <span>{{ dataExam.getTotalScore || 0 }}.0</span>
    </div>
</template>
<style lang="scss" scoped>
.title-total {
    text-align: left;
    padding-left: 16rem;
    color: #a8a8b3;
    margin: 18rem 0;
    font-size: 14rem;

    span {
        padding-right: 4rem;
    }

    .total-score {
        padding-left: 10rem;
    }
}
</style>