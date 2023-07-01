<script setup>
/* eslint-disable */

import { ref } from 'vue';
import { useExamStore } from '@/store/examStore';
const dataExam = useExamStore();
// const selectVal = ref('easy');
const num = ref([1, 2, 3, 4, 5, 6]);
const options = ref([
    { text: "易", value: "easy" },
    { text: "中", value: "middle" },
    { text: "难", value: "hard" },
])
</script>
<template>
    <div class="hard-level">
        <div class="level">难度</div>
        <select v-model="dataExam.selectVal">
            <option v-for="option in options" :value="option.value">
                {{ option.text }}
            </option>
        </select>

    </div>
    <div v-for="n in num " :value="n"> </div>
</template>
<style lang="scss" scoped>
.hard-level {
    display: flex;
    align-items: center;
    margin-left: 32rem;
    margin-top: 24rem;

    .level {
        font-size: 12rem;
    }

    select {
        margin-left: 30rem;
        width: 60rem;
        height: 24rem;
        font-size: 10rem;
        border: 1px solid #E1E1E5;
        outline: none;
        border-radius: 4px;
        cursor: pointer;


    }
}
</style>